import { MouseEvent } from 'react'
import { TypeReactElement } from '@/types/ReactElement.type'
import { NavLink, TypeNavLinkFn } from 'react-router-dom'

interface IList {
  icon: TypeReactElement
  children?: string
  path?: string
  onClick?(event?: MouseEvent<HTMLLIElement>): void
}

const ListItem = ({ children, icon, path, onClick }: IList) => {
  const contentItem = (
    <>
      <div className="flex justify-center items-center mb-1 w-5 h-5">{icon}</div>
      <p className="text-[12px]">{children}</p>
    </>
  )

  const activeStyles: TypeNavLinkFn = ({ isActive }) => ({
    opacity: isActive ? '1' : '0.3',
    fontWeight: isActive ? 'bold' : 'normal'
  })

  return (
    <li onClick={onClick} className="transition-colors rounded-lg  py-3 cursor-pointer">
      {path ? (
        <NavLink style={activeStyles} className="transition-opacity flex text-center flex-col items-center" to={path}>
          {contentItem}
        </NavLink>
      ) : (
        <div className="opacity-30 flex flex-col items-center">{contentItem}</div>
      )}
    </li>
  )
}

export default ListItem
