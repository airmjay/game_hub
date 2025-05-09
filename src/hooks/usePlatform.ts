import { useQuery } from "@tanstack/react-query"
import { apiRequest, fetchData} from "../services/apiBaseUrl"

export interface PlatformProps {
    id : number,
    name: string,
    slug : string,   

}

const fetchApiRequestData = new apiRequest<PlatformProps>('/api/platforms/lists/parents');

export const UsePlatforms = () => {

  const {data , isError: error,isLoading:loading } = useQuery<fetchData<PlatformProps[]>, Error>({
    queryKey : ['platform'],
    queryFn : fetchApiRequestData.get,
    staleTime : 60 * 60 * 24 * 1000
  })
  return {platform :data,error,loading}
}