import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { StepDescription } from "@chakra-ui/react";
import { Platform } from "./usePlatform";

interface FetchGameResponse {
    count: number;
    results: Game[];
  }

 
  
 export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

const useGame = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {params:{
  genres: selectedGenre?.id, 
  platform: selectedPlatform?.id} }, 
  [selectedGenre?.id, selectedPlatform?.id]);

export default useGame