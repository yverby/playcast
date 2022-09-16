import { PodcastDetails } from 'src/screens/Podcast/PodcastDetails';
import { EpisodeDetails } from 'src/screens/Episode/EpisodeDetails';

export enum DRAWER {
  EPISODE = 'EPISODE',
  PODCAST = 'PODCAST',
}

export const DRAWER_REGISTER = {
  [DRAWER.PODCAST]: PodcastDetails,
  [DRAWER.EPISODE]: EpisodeDetails,
};
