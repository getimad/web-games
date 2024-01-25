import { create } from "zustand";
import GameQuery from "./interfaces/GameQuery";

interface GameQueryStore {
  gameQuery: GameQuery;
  setInitgameQuery: () => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrderValue: (orderValue: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {} as GameQuery,
  setInitgameQuery: () => set(() => ({ gameQuery: {} })),
  setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setOrderValue: (orderValue) => set(store => ({ gameQuery: { ...store.gameQuery, orderValue } }))
}));

export default useGameQueryStore;
