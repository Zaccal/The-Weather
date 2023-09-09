import { TypeReactElement } from '@/types/ReactElement.type'

interface IContainer {
  children: TypeReactElement
  className?: string
}

const Container = ({ children, className }: IContainer) => {
  return <div className={`${className || ''} max-w-[1900px] px-4 mx-auto`}>{children}</div>
}

export default Container
