module.exports = {
    "presets": [
        "@babel/preset-env",
		[
			"@babel/preset-react",
			{
				development: process.env.BABEL_ENV === "development",
			},
		],
		"@babel/preset-typescript",
    ],
    "plugins": [
        "react-hot-loader/babel",
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "lib",
                "style": true
            },
            "antd"
        ],
		[
			"@babel/plugin-proposal-decorators",
			{
				legacy: true
			}
		]
    ]
}
