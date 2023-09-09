import { Cloud, Settings } from 'lucide-react'
import Logo from './Logo'
import List from '@/components/ui/List'
import ListItem from '@/components/ui/ListItem'
import { SidebarListItemData } from './SidebarListItemData'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import SettingsSheetContent from './SettingsSheetContent/SettingsSheetContent'

const Sidebar = () => {
  return (
    <Sheet>
      <div className="dark:bg-mainDark bg-white shadow-lg w-full h-full rounded-lg px-3 py-3">
        <Logo className="mb-10">
          <Cloud />
        </Logo>
        <nav>
          <List>
            {SidebarListItemData.map(listItemData => {
              return (
                <ListItem key={listItemData.id} icon={<listItemData.icon />} path={listItemData.path}>
                  {listItemData.title}
                </ListItem>
              )
            })}
            <SheetTrigger className="mx-auto block">
              <ListItem icon={<Settings />}>Settings</ListItem>
            </SheetTrigger>
          </List>
        </nav>
      </div>
      <SettingsSheetContent />
    </Sheet>
  )
}

export default Sidebar
