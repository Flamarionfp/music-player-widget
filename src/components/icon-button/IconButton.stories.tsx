import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { IconButtonProps } from './IconButton.types';
import { ReactComponent as Play } from '../../assets/play.svg';

export default {
  title: 'components/IconButtonProps',
  component: IconButton,
  args: {
    title: 'Tocar',
    icon: <Play />,
  },
} as Meta<IconButtonProps>;

export const Default: StoryObj = {};
