import { Button } from '@/components/ui/button'
import { SerializedError } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface IErrorComponent {
  data: SerializedError
}

const Error = ({ data }: IErrorComponent) => {
  const nav = useNavigate()

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="flex flex-col-reverse gap-5">
            <div>
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl dark:text-white">
                  {data ? data.message : 'Not found'}
                </h1>
                <p className="my-2 text-gray-800 dark:text-white">
                  Sorry about that! Please visit our hompage to get where you need to go.
                </p>
                <Button onClick={() => nav(-1)} size={'lg'} className="text-md mt-8 w-full sm:w-40">
                  Return
                </Button>
              </div>
            </div>
            <div>
              <h1 className="sm:text-9xl text-5xl font-bold">{data ? data.code : '404'}</h1>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  )
}

export default Error
