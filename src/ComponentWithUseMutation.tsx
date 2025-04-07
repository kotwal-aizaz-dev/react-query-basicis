import { useMutation } from "@tanstack/react-query";
import { Post } from "./App";

function ComponentWithUseMutation() {
  const post = {
    id: 22,
    title: "foo",
    body: "bar",
    userId: 1,
  };

  /**
   * useMutation:
   * This custom hook is used to handle the data modifying operations.
   */
  const {
    mutateAsync: addPostMutation, // A function returned by useMutation hook that can be used to mutate the state.
    isPending, // A pending state for the mutation operation
    error, // Error state for the query
    reset, // A function to reset the query state
  } = useMutation({
    mutationFn: addPost, // mutation function to update or create
  });
  return (
    <div>
      ComponentWithUseMutation
      {isPending && <span>Loading...</span>}
      {error && <span>{error.message}</span>}
      <button onClick={() => reset()}>reset</button>
      <button onClick={() => addPostMutation(post)}>add post</button>
    </div>
  );
}

async function addPost(post: Post) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      ...post,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return await response.json();
}

export default ComponentWithUseMutation;
