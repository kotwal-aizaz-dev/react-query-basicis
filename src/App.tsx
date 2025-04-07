import "./App.css";
import ComponentWithMultipleQueries from "./ComponentWithMultipleQueries";

import ComponentWithUseQuery from "./ComponentWithUseQuery";
import ComponentWithUseSuspenseQuery from "./ComponentWithUseSuspenseQuery";

//TODO: Suspense part of React query is still confusing to me.

// Make sure to add the type for the data returned by your query.
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  return (
    <>
      <ComponentWithUseQuery />
      <ComponentWithUseSuspenseQuery />
      <ComponentWithMultipleQueries />
    </>
  );
}
export default App;
