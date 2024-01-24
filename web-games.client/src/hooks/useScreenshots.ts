import { useQuery } from '@tanstack/react-query';
import Screenshot from '../interfaces/Screenshot';
import APIClient from '../services/api-client';

const useScreeshots = (gameSlug: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameSlug}/screenshots`);

  return useQuery({
    queryKey: ['screeshots', gameSlug],
    queryFn: apiClient.getAll,
    staleTime: 0,
    gcTime: 0
  });
};

export default useScreeshots;
