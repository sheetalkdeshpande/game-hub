import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { StepDescription } from "@chakra-ui/react";

interface FetchGameResponse {
    count: number;
    results: Game[];
  }

 export interface Platform{
    id: number;
    name: string;
    slug: string;
    
  }
  
 export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

const useGame = (selectedGenre: Genre | null) => useData<Game>('/games', {params:{genres: selectedGenre?.id} }, [selectedGenre?.id]);

export default useGame