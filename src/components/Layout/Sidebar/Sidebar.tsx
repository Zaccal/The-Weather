import { Cloud } from 'lucide-react';
import Logo from './Logo';
import List from '@/components/List/List';
import ListItem from '@/components/List/ListItem';
import { SidebarListItemData } from './SidebarListItemData';

const Sidebar = () => {
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
                                key={listItemData.id}
                                icon={<listItemData.icon />}
                                path={listItemData.path}
                                active={false}
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
