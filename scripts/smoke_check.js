const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer");

const buildDir = path.join(__dirname, "..", "build");
const host = "127.0.0.1";
const port = Number(process.env.SMOKE_PORT || 4173);

const routes = [
  {
    path: "/",
    expectedPathname: "/",
    expectedTitle: "장병헌 | Technical Product Manager",
    expectedStatus: 200,
  },
  {
    path: "/en/",
    expectedPathname: "/en/",
    expectedTitle: "Byeongheon Jang | Technical Product Manager",
    expectedStatus: 200,
  },
  {
    path: "/projects/loggy/",
    expectedPathname: "/projects/loggy/",
    expectedTitle: "Loggy | 실시간 로그 분석 협업 플랫폼 | Portfolio",
    expectedStatus: 200,
  },
  {
    path: "/en/projects/loggy/",
    expectedPathname: "/en/projects/loggy/",
    expectedTitle: "Loggy | Real-Time Log Analysis Collaboration Platform | Byeongheon Jang",
    expectedStatus: 200,
  },
  {
    path: "/en/does-not-exist",
    expectedPathname: "/en/",
    expectedTitle: "Byeongheon Jang | Technical Product Manager",
    expectedStatus: 200,
    allowConsoleErrors: true,
  },
];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const getContentType = (filePath) =>
  mimeTypes[path.extname(filePath).toLowerCase()] ||
  "application/octet-stream";

const buildFilePath = (requestPath) => {
  const decodedPath = decodeURIComponent(requestPath);
  const normalizedPath = decodedPath.replace(/^\/+/, "");
  const directFilePath = path.join(buildDir, normalizedPath);

  if (
    normalizedPath &&
    fs.existsSync(directFilePath) &&
    fs.statSync(directFilePath).isFile()
  ) {
    return directFilePath;
  }

  const routeIndexPath = path.join(buildDir, normalizedPath, "index.html");

  if (fs.existsSync(routeIndexPath)) {
    return routeIndexPath;
  }

  if (decodedPath === "/" && fs.existsSync(path.join(buildDir, "index.html"))) {
    return path.join(buildDir, "index.html");
  }

  return null;
};

const createStaticServer = () =>
  http.createServer((request, response) => {
    const requestUrl = new URL(request.url, `http://${host}:${port}`);
    const filePath = buildFilePath(requestUrl.pathname);

    if (filePath) {
      response.writeHead(200, { "Content-Type": getContentType(filePath) });
      fs.createReadStream(filePath).pipe(response);
      return;
    }

    const fallback404 = path.join(buildDir, "404.html");

    if (fs.existsSync(fallback404)) {
      response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(fallback404).pipe(response);
      return;
    }

    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not Found");
  });

const startServer = (server) =>
  new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => resolve());
  });

const stopServer = (server) =>
  new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

const verifyRoute = async (browser, route) => {
  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  const response = await page.goto(`http://${host}:${port}${route.path}`, {
    waitUntil: "networkidle2",
  });

  if (!response) {
    throw new Error(`No response received for ${route.path}`);
  }

  if (response.status() !== route.expectedStatus) {
    throw new Error(
      `Expected HTTP ${route.expectedStatus} for ${route.path}, got ${response.status()}`
    );
  }

  await page.waitForFunction(
    (expectedTitle) => document.title === expectedTitle,
    {},
    route.expectedTitle
  );
  await page.waitForFunction(
    (expectedPathname) => window.location.pathname === expectedPathname,
    {},
    route.expectedPathname
  );

  if (pageErrors.length > 0) {
    throw new Error(
      `Page errors on ${route.path}: ${pageErrors.join(" | ")}`
    );
  }

  if (!route.allowConsoleErrors && consoleErrors.length > 0) {
    throw new Error(
      `Console errors on ${route.path}: ${consoleErrors.join(" | ")}`
    );
  }

  await page.close();
};

const run = async () => {
  if (!fs.existsSync(buildDir)) {
    throw new Error("Build directory is missing. Run `npm run build` first.");
  }

  const server = createStaticServer();
  let browser;

  try {
    await startServer(server);
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    for (const route of routes) {
      await verifyRoute(browser, route);
      console.log(`Verified ${route.path}`);
    }
  } finally {
    if (browser) {
      await browser.close();
    }

    await stopServer(server);
  }
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
