module.exports = {

    entry: "./app-client.js",
    output: {
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    query: {
        presets: ["react", "es2015", "stage-0"]
    }
}

