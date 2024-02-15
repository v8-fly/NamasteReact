import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const fetchRepoData = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)

export function useRepoData() {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: fetchRepoData,
    staleTime: 0,
    // gcTime: 500,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
