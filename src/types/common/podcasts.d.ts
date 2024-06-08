interface Podcasts {
  id: string | number;
  title: string;
  description: string;
  sourceImageUrl: string;
  sourceVidioUrl: string;
  sourceAudioUrl: string;
  timestamp: Date;
}

type Playlist = {
  id: string | number;
  podcastId: string;
  Podcasts: Podcasts[];
  timestamp: Date;
};

type PodcastsDetails = Podcasts;
