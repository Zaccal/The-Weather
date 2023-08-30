import { TypeReactElement } from "@/types/ReactElement.type"

interface IList {
    className?: string,
    children?: TypeReactElement,
}

const List = ({className, children}: IList) => {
  return (
    <ul className={`${className} w-full`}>
        {children}
    </ul>
  )
}

export default List