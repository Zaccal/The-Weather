import Layout from '@/components/Layout/Layout'
import useTypedSelector from '@/hooks/useTypedSelector'
import WeatherMenu from '@/pages/WeatherMenu/WeatherMenu'
import SelectLocation from '@/pages/SelectLocation/SelectLocation'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Error from '@/pages/Error/Error'

const childrenRoutes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <WeatherMenu />
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
      const { location } = useTypedSelector((state) => state.settings)

      return location ? <Layout /> : <SelectLocation />
    },
    children: childrenRoutes
  }
])
