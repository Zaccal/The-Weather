import { TypeReactElement } from '@/types/ReactElement.type'

interface ILogo {
  children: TypeReactElement
  className?: string
}

const Logo = ({ children, className }: ILogo) => {
  return (
    <div
      className={`${className} w-full rounded-lg py-5 flex justify-center items-center shadow-lg bg-main text-slate-800  dark:bg-slate-400`}
    >
      <div className="w-6 h-6">{children}</div>
    </div>
  )
}

export default Logo
