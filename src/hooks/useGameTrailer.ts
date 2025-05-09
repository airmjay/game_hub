import { useQuery } from "@tanstack/react-query";
import { apiRequest} from "../services/apiBaseUrl"
interface platform {
id: number,
slug: string,
name: string
}
export interface GameTrailerProps {
    id : number,
    name: string,
    preview : string, 
    results : {data : {480 : string}}[],
    description_raw : string,
    metacritic : number
    platforms : {platform : platform  }[],
    rating : number,
    website : string

}


const useSelectGameTrailer = (slug? : string) => {
    const fetchApiRequestData = new apiRequest<GameTrailerProps>(`api/games/${slug}/movies`);
    const {data ,error,isLoading:loading } = useQuery<GameTrailerProps, Error>({
        queryKey : ['trailer',slug],
        queryFn : fetchApiRequestData.getGameDetail,
        refetchOnWindowFocus : false,
        staleTime : 10 * 24 * 1000 //24hours
        
      })
      return {trailer :data,error,loading}

    
}

export default useSelectGameTrailer