import Container from '../ui/Container'
import Sidebar from '@/components/Layout/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container className="h-screen py-5">
      <div className="h-full grid gap-5 grid-cols-sidebar/content">
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </Container>
  )
}

export default Layout
