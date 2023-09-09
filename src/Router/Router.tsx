import Layout from '@/components/Layout/Layout'
import useTypedSelector from '@/hooks/useTypedSelector'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Home from '@/pages/Home/Home'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Error from '@/pages/Error/Error'

const childrenRoutes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <Dashboard />
  },
  {
    path: '/Cites',
    element: <div>Citis</div>
  },
  {
    path: '/Map',
    element: <div>Map</div>
  },
  {
    path: '*',
    element: <Error />
  }
]

export const router = createBrowserRouter([
  {
    path: '/',
    Component() {
      const { location } = useTypedSelector(state => state.settings)

      return location ? <Layout /> : <Home />
    },
    children: childrenRoutes
  }
])
