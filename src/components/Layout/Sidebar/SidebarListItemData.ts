import { LucideIcon } from 'lucide-react/dist/lucide-react'
import { CloudSun, List, Map, Settings } from 'lucide-react'

interface ISidebarListItemData {
    title: string,
    icon: LucideIcon,
    path: string,
    id: number 
}

export const SidebarListItemData: ISidebarListItemData[] = [
    {
        title: 'Weather',
        icon: CloudSun,
        path: '/Weather',
        id: 1
    },
    {
        title: 'Cities',
        icon: List,
        path: '/Cities',
        id: 2
    },
    {
        title: 'Map',
        icon: Map,
        path: '/Map',
        id: 3
    },
    {
        title: 'Settings',
        icon: Settings,
        path: '/Settings',
        id: 4
    }
]