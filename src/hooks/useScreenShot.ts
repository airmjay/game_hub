import { useQuery } from "@tanstack/react-query";
import { apiRequest, fetchData} from "../services/apiBaseUrl"

export interface GameScreenshootDetailsProps {
    id : number,
    image: string,
}



const useSelectScreenshootDetails = (id? : string | number) => {
    const fetchApiRequestData = new apiRequest<GameScreenshootDetailsProps>(`/api/games/${id}/screenshots`);
    const {data ,error,isLoading:loading } = useQuery<fetchData<GameScreenshootDetailsProps[]>, Error>({
        queryKey : ['gameScreenshoot',id],
        queryFn : fetchApiRequestData.get,
        refetchOnWindowFocus : false,
        staleTime : 10 * 24 * 1000 //24hours
        
      })
      return {screenshot :data,error,loading}

    
}

export default useSelectScreenshootDetails