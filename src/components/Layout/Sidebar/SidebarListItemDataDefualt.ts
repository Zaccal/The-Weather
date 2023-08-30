import { LucideIcon } from 'lucide-react/dist/lucide-react'
import { CloudSun, List, Map, Settings } from 'lucide-react'

interface ISidebarListItemData {
    title: string,
    icon: LucideIcon,
    path: string,
    active: boolean,
    id: number 
}

export const SidebarListItemDataDefualt: ISidebarListItemData[] = [
    {
        title: 'Weather',
        icon: CloudSun,
        active: true,
        path: '/Weather',
        id: 1
    },
    {
        title: 'Cities',
        icon: List,
        active: false,
        path: '/Cities',
        id: 2
    },
    {
        title: 'Map',
        icon: Map,
        active: false,
        path: '/Map',
        id: 3
    },
    {
        title: 'Settings',
        icon: Settings,
        active: false,
        path: '/Settings',
        id: 4
    }
]