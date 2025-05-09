export interface GenresProps {
    id : number,
    name: string,
    image_background: string,
    slug : string,
    setUseStateGenres : (genres : GenresProps) => void

}
import { useQuery } from "@tanstack/react-query";

import { apiRequest, fetchData } from "../services/apiBaseUrl";
const fetchApiRequestData = new apiRequest<GenresProps>('/api/genres');
export const useGenres = () => {

  const {data , isError: error,isLoading:loading } = useQuery<fetchData<GenresProps[]>, Error>({
    queryKey : ['genres'],
    queryFn : fetchApiRequestData.get
    
  })
  return {genres :data,error,loading}
}