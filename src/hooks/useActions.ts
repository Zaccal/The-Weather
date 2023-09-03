import { useMemo } from 'react'
import { actions as settingsActions } from '@/store/slices/Settings/Settings.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import * as WeatherActions from '@/store/slices/Weather/Weather.actions'

const rootActions = {
    ...settingsActions,
    ...WeatherActions,
}

const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions