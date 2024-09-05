
import useData from "./useData";
import { Platform } from "./usePlatform";
import { GameQuery } from "../App";


 export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

const useGame = (gameQuery : GameQuery) => useData<Game>('/games', {params:{
  genres: gameQuery.genre?.id, 
  platform: gameQuery.platform?.id,
  ordering: gameQuery.sortOrder,
  search: gameQuery.searchText
} }, 
  [gameQuery]);

export default useGame