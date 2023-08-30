import { TypeSetState } from "@/types/SetState.types";
import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, value: T): [T, TypeSetState<T>] {
    const localStorageGetValue = useCallback(() => {
        if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key) as string)

        return value
    }, [value, key])

    const [localStorageValue, setLocalStorageValue] = useState<T>(localStorageGetValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localStorageValue))
    }, [localStorageValue, localStorageGetValue])

    return [localStorageValue, setLocalStorageValue]
}