import { useQuery } from "@tanstack/react-query";
import Screenshot from "../interfaces/Screenshot";
import APIClient from "../services/api-client";

const useScreeshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screeshots', gameId],
    queryFn: apiClient.getAll,
    staleTime: 0,
    gcTime: 0
  });
};

export default useScreeshots;
