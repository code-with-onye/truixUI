import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Props } from '../src/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: 'Button',
  component: Button,

  argTypes: {
    onClick: {
      action: 'clicked',
    },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'i am button',
  onClick: action('secondary click'),
};
