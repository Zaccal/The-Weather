import Layout from "@/components/Layout/Layout";
import useTypedSelector from "@/hooks/useTypedSelector";
import Home from "@/pages/Home/Home";
import SelectLocation from "@/pages/SelectLocation/SelectLocation";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const childrenRoutes: RouteObject[] = [
    {
        path: '/',
        index: true,
        element:  <Home />, 
    },
    {
        path: '/Cites',
        element: <div>Citis</div>    
    },
    {
        path: '/Map',
        element: <div>Map</div>
    }
]

export const router = createBrowserRouter([
    {
      path: '/',
      Component() {
        const {location} = useTypedSelector(state => state.settings)
  
        return location ? <Layout /> : <SelectLocation />
      },
      children: childrenRoutes
    }
  ])