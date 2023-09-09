import { useEffect, useState } from 'react'
import useActions from '@/hooks/useActions'
import useTypedSelector from '@/hooks/useTypedSelector'
import Container from '@/components/ui/Container'
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { CommandGroup } from 'cmdk'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Error from '../Error/Error'

const Home = () => {
  const { fetchWeatherSearch, changeLocation } = useActions()
  const { data, isLoading, isSuccess, error } = useTypedSelector(state => state.searchedWeatherData)
  const [searchValue, setSearchValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [searchValueError, setSearchValueError] = useState(false)

  const searchHandler = (search: string) => {
    setSearchValue(search)
    if (search) {
      setIsOpen(true)
      fetchWeatherSearch(search)
    }
  }

  const selectLocationHandler = () => {
    if (isSuccess && searchValue) {
      setSearchValueError(false)
      changeLocation(searchValue)
    } else setSearchValueError(true)
  }

  useEffect(() => {
    if (!searchValue) {
      setIsOpen(false)
    }
  }, [searchValue])

  if (error) return <Error data={error} />

  return (
    <Container className="py-5 flex items-center h-[70vh] justify-center">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center pb-10">Welcome the weather 👋</h1>
        {searchValueError && (
          <Label className="text-red-400" htmlFor="searchInput">
            Search input must contain the value
          </Label>
        )}
        <Command className="mt-2 rounded-lg border shadow-lg">
          <CommandInput
            id="searchInput"
            value={searchValue}
            onValueChange={searchHandler}
            placeholder="Enter your location..."
          />
          <CommandList>
            {!isLoading && isOpen ? <CommandEmpty>Loaction not found.</CommandEmpty> : <></>}
            {isLoading && isOpen ? <CommandEmpty>Loading...</CommandEmpty> : <></>}
            {isSuccess && isOpen ? (
              <CommandGroup>
                {data.map(countryData => {
                  return (
                    <CommandItem
                      key={countryData.id}
                      onSelect={currentValue => {
                        setIsOpen(false)
                        setSearchValue(
                          currentValue
                            .split(' ')
                            .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
                            .join(' ')
                        )
                      }}
                    >
                      {`${countryData.country} (${countryData.name})`}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            ) : (
              <></>
            )}
          </CommandList>
        </Command>
        <Button onClick={selectLocationHandler} className="mt-3 w-full">
          Select
        </Button>
      </div>
    </Container>
  )
}

export default Home
