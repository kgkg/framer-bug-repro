module.exports = {
    typescript: {
        check: false,
        checkOptions: {}
    },
    stories: ["../src/**/*.stories.tsx"], //relative in project's directory
    addons: ["@storybook/addon-essentials", "storybook-addon-designs"],
    previewHead: (head) => `
        ${head}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet">

        <style>
            * {
                font-family: 'Open Sans', sans-serif;
            }
        </style>
    `,
    webpackFinal: async (config) => {
        const fileLoaderRuleIndex = config.module.rules.findIndex((rule) => rule.test.test(".svg"));
        config.module.rules[fileLoaderRuleIndex] = Object.assign(
            config.module.rules[fileLoaderRuleIndex],
            {
                test: new RegExp(
                    config.module.rules[fileLoaderRuleIndex].test.toString().replace("svg|", "") //remove svg from this rule
                )
            }
        );

        config.module.rules.push(
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            }
        );

        return config;
    }
};
