import { TypeReactElement } from "@/types/ReactElement.type"
import Container from "../ui/Container";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

interface ILayout {
    children: TypeReactElement; 
}

const Layout = ({children}: ILayout) => {  
  return (
    <Container className="h-screen py-5">
        <div className="h-full grid gap-5 grid-cols-sidebar/content">
          <div className="">
            <Sidebar />
          </div>
          <div className="">
            {children}
          </div>
        </div>
    </Container>
  )
}

export default Layout