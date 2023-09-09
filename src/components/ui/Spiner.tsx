interface ISpiner {
  isText?: boolean
  className?: string
}

const Spiner = ({ isText = false, className }: ISpiner) => {
  return (
    <div className={`${className} flex items-center flex-col`}>
      <div className="w-5 h-5 border-2 animate-spin border-main rounded-full border-l-2 border-l-mainDark border-t-2 border-t-[#020817]"></div>
      {!isText && <span className="mt-2">Lodaing...</span>}
    </div>
  )
}

export default Spiner
