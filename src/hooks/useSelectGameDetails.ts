import { useQuery } from "@tanstack/react-query";
import { apiRequest} from "../services/apiBaseUrl"
interface platform {
id: number,
slug: string,
name: string
}
export interface GameDetailsProps {
    id : number,
    name: string,
    slug : string, 
    description : string,
    description_raw : string,
    metacritic : number
    platforms : {platform : platform  }[],
    rating : number,
    website : string

}


const useSelectGameDetails = (slug? : string) => {
    const fetchApiRequestData = new apiRequest<GameDetailsProps>(`/api/games/${slug}`);
    const {data ,error,isLoading:loading } = useQuery<GameDetailsProps, Error>({
        queryKey : ['gameDetail',slug],
        queryFn : fetchApiRequestData.getGameDetail,
        refetchOnWindowFocus : false,
        staleTime : 10 * 24 * 1000 //24hours
        
      })
      return {games :data,error,loading}

    
}

export default useSelectGameDetails