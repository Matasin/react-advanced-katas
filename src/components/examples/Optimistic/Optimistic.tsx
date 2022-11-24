import * as React from 'react';
import axios from 'axios';

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const client = new QueryClient();

type Todos = {
  items: readonly {
    id: string;
    text: string;
  }[];
  ts: number;
};

async function fetchTodos(): Promise<Todos> {
  const res = await axios.get('http://localhost:8000/');
  return res.data;
}

function useTodos() {
  return useQuery(['todos'], fetchTodos);
}

export const Example = () => {
  const queryClient = useQueryClient();
  const [text, setText] = React.useState('');
  const { isFetching, ...queryInfo } = useTodos();

  const addTodoMutation = useMutation(
    (newTodo) => axios.post('http://localhost:8000/', { text: newTodo }),
    {
      onMutate: async (newTodo: string) => {
        setText('');
        await queryClient.cancelQueries(['todos']);

        const previousTodos = queryClient.getQueryData<Todos>(['todos']);

        if (previousTodos) {
          queryClient.setQueryData<Todos>(['todos'], {
            ...previousTodos,
            items: [
              ...previousTodos.items,
              { id: Math.random().toString(), text: newTodo },
            ],
          });
        }

        return { previousTodos };
      },
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData<Todos>(['todos'], context.previousTodos);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(['todos']);
      },
    },
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodoMutation.mutate(text);
        }}
      >
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button disabled={addTodoMutation.isLoading}>Create</button>
      </form>
      <br />
      {queryInfo.isSuccess && (
        <>
          <div>
            Updated At: {new Date(queryInfo.data.ts).toLocaleTimeString()}
          </div>
          <ul>
            {queryInfo.data.items.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
          {isFetching && <div>Updating in background...</div>}
        </>
      )}
      {queryInfo.isLoading && 'Loading'}
      {queryInfo.error instanceof Error && queryInfo.error.message}
    </div>
  );
};


export const Optimistic = () => {
  return (
    <QueryClientProvider client={client}>
      <Example />
    </QueryClientProvider>
  );
};
