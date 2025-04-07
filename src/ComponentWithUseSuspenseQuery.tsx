import { useSuspenseQuery } from "@tanstack/react-query";
import { Post } from "./App";
import { Suspense } from "react";

function ComponentWithUseSuspenseQuery() {
  //Use this to make sure that the query always returns data.

  const { data: suspensedData } = useSuspenseQuery({
    // Unique Keys used for refetching and caching data.
    queryKey: ["todos"],
    // Async query function to fetch the data from an API
    queryFn: (): Promise<Post> =>
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
        response.json()
      ),
  });
  return (
    // Useful inside a react suspense Component.
    <Suspense fallback={<span>Loading...</span>}>
      {/* We can access a for sure data from useSuspense query. This data will never be undefined.  */}
      <h2>Suspended data:</h2>
      {JSON.stringify(suspensedData)}
    </Suspense>
  );
}

export default ComponentWithUseSuspenseQuery;