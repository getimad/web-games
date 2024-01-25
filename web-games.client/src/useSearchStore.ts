import { create } from 'zustand';

interface SearchStore {
  showSearchBox: boolean;
  isSearching: boolean;
  searchQuery: string;
  setShowSearchBox: (showSearchBox: boolean) => void;
  setIsSearching: (isSearching: boolean) => void;
  setSearchQuery: (searchQuery: string) => void;
}

const useSearchStore = create<SearchStore>(set => ({
  showSearchBox: false,
  isSearching: false,
  searchQuery: '',
  setShowSearchBox: (showSearchBox: boolean) => set(() => ({ showSearchBox })),
  setIsSearching: (isSearching: boolean) => set(() => ({ isSearching })),
  setSearchQuery: (searchQuery: string) => set(() => ({ searchQuery }))
}));

export default useSearchStore;
