import { LucideIcon } from 'lucide-react/dist/lucide-react'
import { CloudSun, List, Map } from 'lucide-react'

interface ISidebarListItemData {
  title: string
  icon: LucideIcon
  path: string
  id: number
}

export const SidebarListItemData: ISidebarListItemData[] = [
  {
    title: 'Weather',
    icon: CloudSun,
    path: '/',
    id: 1
  },
  {
    title: 'Cities',
    icon: List,
    path: '/Cites',
    id: 2
  },
  {
    title: 'Map',
    icon: Map,
    path: '/Map',
    id: 3
  }
]
