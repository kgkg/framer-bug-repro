import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import ReorderTiles from "./ReorderTiles";

export default {
    title: `components/${ReorderTiles.name}`,
    component: ReorderTiles,
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/iUzuPCnepUbKkOz4G1y7cQ/URL-Builder?node-id=458%3A4566"
        }
    },
    args: {
    }
} as ComponentMeta<typeof ReorderTiles>;

const Template: ComponentStory<typeof ReorderTiles> = (args) => (
    <ReorderTiles {...args} />
);

export const Default = Template.bind({});
