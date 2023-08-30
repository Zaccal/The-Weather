import { useMemo } from 'react'
import { actions as settingsActions } from '@/store/slices/Settings/Settings.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const rootActions = {
    ...settingsActions
}

const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions