module.exports = {
  app: "App.js",
  appRoot: "src/components",
  bundle: "main.js",
  bundleRoot: "dist",
  bundler: "webpack",
  author: "marlon",
  preset: "react",
  resolve_templates: ['src/templates'],
  rules: { css: "internal", view: "html", images: { prefetchImg: false } },
  dependencies: [
    "babel-loader",
    "@babel/preset-env",
    "@babel/preset-react",
    "purify-css",
    "react-redux",
    "redux",
    "react"
  ],
  webpackSettings: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }
      ]
    }
  }
};
