import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Post } from "./App";

function ComponentWithUseQuery() {
     // Id state
  const [id, setId] = useState<number>(1);
  /**
   * useQuery:
   *
   * It might be a good idea to have the query options stored separately inside another file.
   *
   * import {queryOptions} from "@tanstack/react-query"
   *
   * function createQueryOptions() {
   *  return queryOptions()
   * }
   */
  const { data, isPending, refetch, error } = useQuery({
    // Unique Keys used for refetching and caching data.
    queryKey: ["todos", id],
    // Async query function to fetch the data from an API
    queryFn: () => getTodos(id),
    // Boolean to enable or disable auto refetching of the query if the component re-renders.
    enabled: true,
  });

  
  return (
    <>
      <div>
        {/* We can access an error state */}
        {error && <span>Something went wrong!</span>}

        {/* We can access a loading state */}
        {isPending && <span>Loading...</span>}

        {/* We can access the data from the query */}
        {JSON.stringify(data)}
        
       
     
        {/* We can manually refetch the data from the query */}
        <div>
          <button onClick={() => refetch()}>Refetch</button>
        </div>

        {/* We can manually refetch the query by changing one of it's parameter values.*/}
        <div>
          <button onClick={() => setId(id + 1)}>setId</button>
        </div>
      </div>
    </>
  );
}



// async function to fetch the data from an API
async function getTodos(id: number): Promise<Post> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return await response.json();
  } catch (e) {
    console.log(e);
    throw new Error("Unable to fetch!");
  }
}

export default ComponentWithUseQuery