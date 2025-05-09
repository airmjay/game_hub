import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from './components/ui/provider.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.tsx'
const queryClient = new QueryClient({
  defaultOptions :{
    queries : {
      staleTime : 20 * 1000,
      refetchOnMount : false
    }
  }
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools/>
    </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
