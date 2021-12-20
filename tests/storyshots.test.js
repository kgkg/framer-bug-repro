const initStoryShots = require("@storybook/addon-storyshots").default;
const {multiSnapshotWithOptions} = require("@storybook/addon-storyshots");

initStoryShots({
    framework: "react",
    test: multiSnapshotWithOptions()
});
