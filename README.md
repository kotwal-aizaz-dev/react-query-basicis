# React Query

## Why react query?

Access to hooks that have react state for data, loading, errors, etc. 

Caching queries 

Handling stale data 

performance optimizations 

Page focus re fetching

### Query options →

We need to provide various query options for react query. 

queryKey → It takes an array of “the query name”, and parameters to track for the query function.

queryFn(function) →  It takes in a query function (callback) that returns the data through an asynchronous operation. 

enabled: Boolean → Enable or disable the auto re fetching of the query. 

These are just basic options. There are many more options available in the docs. 

### Query results →

data → The data returned by the query function. 

isPending → The Boolean that tracks the loading state of the query. 

refetch → A function to manually re fetch the query. 

error → The error state for the query. 

These are just the basic results we get from the query hook. There are a lot more options available inside docs.

We can run multiple queries using useQueries hook. 

Suspense Query → 

We can get only the data instead of allowing an undefined using the useSuspenseQuery hook.

# `useMutation` Hook: 

The `useMutation` hook, simplifies performing **data-modifying operations** (Create, Update, Delete) on your backend.

**Key Uses & Features:**

* **Triggers Mutations:** Provides a function (e.g., `mutate`) to execute your API request (POST, PUT, DELETE, etc.).
* **Manages State:** Automatically tracks the mutation's status:
    * `isLoading` / `isPending`: Indicates if the request is in progress.
    * `isSuccess`: True on successful completion.
    * `isError`: True if the request failed.
    * `error`: Contains the error object on failure.
    * `data`: Holds the response data on success.
* **Handles Side Effects:** Offers callbacks like `onSuccess`, `onError`, and `onSettled` to run logic after the mutation finishes, such as:
    * Invalidating cached query data (`useQuery`).
    * Showing success/error notifications.
    * Redirecting users.
* **Reduces Boilerplate:** Abstracts away manual `Workspace`/`axios` calls, state tracking, and error handling logic.
* **Optimistic Updates:** Supports updating the UI instantly before server confirmation for a smoother UX (with rollback on failure).

In essence, `useMutation` provides a clean, structured way to handle asynchronous data changes and their associated states and side effects in your application.