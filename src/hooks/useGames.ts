import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchGameResponse>("/games", {signal: controller.signal})
        .then((res) => {
          setGames(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
            
          });

        return () => controller.abort();
    }, []);
    return{ games, error, isLoading};
}

export default useGame