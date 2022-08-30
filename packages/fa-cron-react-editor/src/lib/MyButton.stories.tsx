import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import CronEditor from './CronEditor';

const meta: ComponentMeta<typeof CronEditor> = {
    title: 'Design System/CronEditor',
    component: CronEditor,
};
export default meta;

export const Primary: ComponentStoryObj<typeof CronEditor> = {
    args: {
        // specify React component props here
        // children: 'Hello',
    },
};
