# React Query

## Why react query?

Access to hooks that have react state for data, loading, errors, etc. 

Caching queries 

Handling stale data 

performance optimizations 

Page focus re fetching

# `useQuery` Hook Summary

The `useQuery` hook, a core feature of libraries like TanStack Query and Apollo Client, simplifies **fetching, caching, and synchronizing server-side data** (Read operations) in your application.

**Key Uses & Features:**

* **Declarative Data Fetching:** You declare *what* data you need (using a query key and a fetcher function), and the hook handles *when* and *how* to fetch it.
* **Automatic Fetching:** Typically fetches data automatically when the component mounts, dependencies change, or the window is refocused.
* **Manages State:** Automatically tracks the query's status:
    * `isLoading`: True during the *initial* data load (no cached data available).
    * `isFetching`: True whenever *any* fetch is in progress (including background re fetches).
    * `isSuccess`: True when data has been successfully fetched.
    * `isError`: True if the data fetch failed.
    * `error`: Contains the error object on failure.
    * `data`: Holds the successfully fetched data.
* **Caching:** Automatically caches query results in memory. Subsequent requests for the same data (identified by the query key) can return cached data instantly, improving performance.
* **Background Updates & Stale-While-Revalidate:** Can show cached ("stale") data immediately while automatically re-fetching fresh data in the background, keeping the UI responsive and eventually consistent.
* **Reduces Boilerplate:** Abstracts away manual `Workspace`/`axios` calls, state management for loading/error states, caching logic, and re-fetching strategies.

In essence, `useQuery` provides a robust and efficient way to manage asynchronous data fetching, handle loading/error states, leverage caching, and keep your UI synchronized with server data with minimal effort.

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