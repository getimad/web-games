import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../interfaces/Game";

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery({
  queryKey: ['games', slug],
  queryFn: () => apiClient.get(slug),
  staleTime: 0,
  gcTime: 60 * 1000  // 1 minute
});

export default useGame;
