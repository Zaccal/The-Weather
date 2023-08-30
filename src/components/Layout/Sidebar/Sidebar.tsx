import { Cloud } from 'lucide-react';
import Logo from './Logo';
import List from '@/components/List/List';
import ListItem from '@/components/List/ListItem';
import { SidebarListItemDataDefualt } from './SidebarListItemDataDefualt';
import useLocalStorage from '@/hooks/useLocalStorage';

const Sidebar = () => {
    const [SidebarListItemData, setSidebarListItemData] = useLocalStorage(
        'SidebarListItemData',
        SidebarListItemDataDefualt
    );

    const toggleSidebarListItemActive = (idList: number) => {
      setSidebarListItemData(SidebarListItemData.map(listItemData => {
        if (listItemData.id === idList) {
          return {
            ...listItemData,
            active: true
          }
        }

        return {
          ...listItemData,
          active: false
        }
      }))
    };

    return (
        <div className="dark:bg-mainDark w-full h-full rounded-lg px-3 py-3">
            <Logo className="mb-10">
                <Cloud />
            </Logo>
            <nav>
                <List>
                    {SidebarListItemData.map(listItemData => {
                        return (
                            <ListItem
                                onClick={() => toggleSidebarListItemActive(listItemData.id)}
                                key={listItemData.id}
                                icon={<listItemData.icon />}
                                path={listItemData.path}
                                active={listItemData.active}
                            >
                                {listItemData.title}
                            </ListItem>
                        );
                    })}
                </List>
            </nav>
        </div>
    );
};

export default Sidebar;
