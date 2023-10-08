import { TypeReactElement } from '@/types/ReactElement.type'
import { ScrollArea } from './scroll-area'

interface IBoard {
  children?: TypeReactElement
  className?: string
  title?: string
}

const Board = ({ children, className, title }: IBoard) => {
  return (
    <div className={`${className} bg-muted rounded-lg px-5 py-3 shadow-lg`}>
      {title && <h4 className="text-muted-foreground font-bold mb-3">{title.toLocaleUpperCase()}</h4>}
      <ScrollArea className="z-20 h-32">{children}</ScrollArea>
    </div>
  )
}

export default Board
