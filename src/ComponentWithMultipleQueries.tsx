import { useQueries } from "@tanstack/react-query";

// Queries:
const query1 = {
  queryKey: ["users"],
  queryFn: async () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    );
  },
};

// Component:
function ComponentWithMultipleQueries() {
  /**How to handle multiple queries that might or might not be depended on each other?
   *
   * ?we can use the hook called useQueries.
   * ?There is an alternative as well called useSuspenseQueries for suspense functionality.
   *
   *
   * */
  const [{ data: query1Data }] = useQueries({
    queries: [query1],
  });

  //JSX
  return (
    <div>
      <h2>Running multiple Queries:</h2>
      <h3>Data from query 1: </h3>
      {JSON.stringify(query1Data)}
    </div>
  );
}

export default ComponentWithMultipleQueries;
