import { createContext } from 'react';

type Episode = {
    id: string;
    title: string;
    thumbnail: string;
    duration: number;
    members: string;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    togglePlay: () => void;
    play: (episode: Episode) => void;
    setPlayingState: (state:boolean) => void;


};

export const PlayerContext = createContext({} as PlayerContextData);


