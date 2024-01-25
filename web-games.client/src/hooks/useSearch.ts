import { useQuery } from '@tanstack/react-query';
import Game from '../interfaces/Game';
import FetchResponse from '../interfaces/FetchResponse';
import APIClient from '../services/api-client';
import useSearchStore from '../useSearchStore';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useState } from 'react';

const limit = 9;
const apiClient = new APIClient<Game>('/games');

const useSearch = () => {
  const { searchQuery, setIsSearching } = useSearchStore(s => ({ searchQuery: s.searchQuery, setIsSearching: s.setIsSearching }));
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  const debounceCallback = useDebouncedCallback((query: string) => {
    setDebouncedSearchQuery(query);
  }, 500);

  useEffect(() => {
    debounceCallback(searchQuery);
    setIsSearching(true);
  }, [searchQuery, debounceCallback]);

  return useQuery<FetchResponse<Game>>({
    queryKey: ['searchGames', debouncedSearchQuery],
    queryFn: () => {
      if (debouncedSearchQuery.trim() === "") {
        return { count: 0, next: null, results: [] } as FetchResponse<Game>;
      }

      return apiClient.getAll({
        params: {
          search: debouncedSearchQuery,
          page_size: limit
        }
      });
    },
    staleTime: 0,
    gcTime: 0
  })
};

export default useSearch;
