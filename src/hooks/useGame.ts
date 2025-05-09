import { useInfiniteQuery } from "@tanstack/react-query";
import { apiRequest, fetchData} from "../services/apiBaseUrl";
import { gameQuery } from "../services/gameQuery";
export interface platform {
    id: number,
    name : string
}
export interface Game {
    id : number,
    name: string,
    background_image : string,
    platforms : {platform : platform} [],
    metacritic: number,
    rating_top : number,
    slug : string

}

const fetchApiRequestData = new apiRequest<Game>('/api/games');

export const useGame = (selectAction?: gameQuery) => {
  
  const gameQuery = useInfiniteQuery<fetchData<Game[]>, Error>({
    queryKey : ['game',selectAction],
    queryFn : ({pageParam = 1}) => 
    fetchApiRequestData.getWithParam({params : {
            genres : selectAction?.getGenresId,
            parent_platforms : selectAction?.getPlatformId,
            ordering : selectAction?.getRelevant,
            search : selectAction?.getSearchTerm,
            page : pageParam
          }}),
          staleTime : 60 * 60 * 24 * 1000,
          initialPageParam : 1,
          getNextPageParam : (lastPage,allPage) => {
          return lastPage.results.length > 0 ? allPage.length + 1 : undefined
          }

      
  })
  return gameQuery
}

