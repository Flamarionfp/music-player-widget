import { Meta, StoryObj } from '@storybook/react';
import { TrackInfo } from './TrackInfo';
import { TrackInfoProps } from './TrackInfo.types';

export default {
  title: 'components/TrackerInfo',
  component: TrackInfo,
  args: {
    trackImagePath: 'song-image.png',
    trackName: 'Maura',
    artistName: 'Manoel Gomes',
    variant: 'normal',
  },
} as Meta<TrackInfoProps>;

export const Default: StoryObj = {};
