export type IPlaylist = {
  id: number;
  name: string;
};

export type IStorePlaylist = {
  playlists: IPlaylist[];
  playing?: {
    playlist: number | null;
    song: number | null;
  };
};