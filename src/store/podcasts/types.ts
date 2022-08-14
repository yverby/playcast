export interface Podcast {
  id: number;
  name: string;
  genre: Genre;
  image: Image;
  owner?: Owner;
  artist: Artist;
  summary?: string;
  language?: string;
  episodes?: Episode[];
  description?: string;
}

export interface Image {
  30?: string;
  60?: string;
  100?: string;
  160?: string;
  600?: string;
}

export interface Owner {
  name: string;
  email: string;
}

export interface Genre {
  id: number | string;
  name: string;
}

export interface Artist {
  id: number;
  name: string;
}

export interface Collection {
  id: number;
  name: string;
}

export interface Episode {
  id?: number;
  name: string;
  guid: string;
  date: string;
  image: Image;
  genre?: Genre;
  source: Source;
  summary: string;
  content: string;
  collection?: Collection;
}

interface Source {
  url: string;
  time: number | string;
}
