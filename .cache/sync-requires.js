const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\NathanDuff\\Sources\\Repos\\serverless-cms\\blog\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\NathanDuff\\Sources\\Repos\\serverless-cms\\blog\\src\\pages\\index.js"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("C:\\Users\\NathanDuff\\Sources\\Repos\\serverless-cms\\blog\\src\\pages\\page-2.tsx")))
}

