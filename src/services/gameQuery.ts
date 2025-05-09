import { create } from "zustand"

export interface gameQuery{
    getGenresId?: number,
    getPlatformId?: number,
    getRelevant?: string,
    getSearchTerm?: string,
    
}
interface zustandInterfaceGameQuery{
    gameQuery : gameQuery,
    searchGame : ( getSearchTerm : string) => void,
    setGenres : ( getGenresId : number) => void,
    setPlatform : (getPlatformId : number) => void,
    setRelevant : (getRelevant : string ) => void
}

const Gamestore = create<zustandInterfaceGameQuery>(set => ({
  gameQuery : {},
  searchGame : (getSearchTerm) => set(() => ({ gameQuery : { getSearchTerm }})),
  setGenres : (getGenresId) => set((store) => ({gameQuery : {...store.gameQuery, getGenresId}})),
  setPlatform : (getPlatformId) => set((store) => ({gameQuery : {...store.gameQuery, getPlatformId}})),
  setRelevant : (getRelevant) => set((store) => ({gameQuery : {...store.gameQuery, getRelevant}}))
})
)
export default Gamestore