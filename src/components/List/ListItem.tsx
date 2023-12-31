import { MouseEvent } from 'react'
import { TypeReactElement } from '@/types/ReactElement.type';
import { Link } from 'react-router-dom';

interface IList {
    icon: TypeReactElement;
    children?: string;
    active?: boolean;
    path?: string;
    onClick? (event?: MouseEvent<HTMLLIElement>): void
}

const ListItem = ({ children, icon, active, path, onClick }: IList) => {
    return (
        <li
            onClick={onClick}
            style={{ opacity: active ? 1 : 0.6 }}
            className="transition-colors rounded-lg  py-3 cursor-pointer"
        >
            <Link className='flex text-center flex-col items-center' to={path || ''}>
                <div className="flex justify-center items-center mb-1 w-5 h-5">
                    {icon}
                </div>
                <p
                    style={{
                        fontWeight: active ? 'bold' : 'normal'
                    }}
                    className="text-[12px]"
                >
                    {children}
                </p>
            </Link>
        </li>
    );
};

export default ListItem;
