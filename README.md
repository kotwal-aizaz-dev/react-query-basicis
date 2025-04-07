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