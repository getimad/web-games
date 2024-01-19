import { create } from "zustand";
import GameQuery from "./interfaces/GameQuery";
import Order from "./interfaces/Order";

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrder: (order: Order) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {} as GameQuery,
  setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setOrder: (order) => set(store => ({ gameQuery: { ...store.gameQuery, order } }))
}));

export default useGameQueryStore;
