import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Task from "../components/header/Task";
import {useIntl} from 'react-intl';
import ItemContainer from "../components/header/ItemContainer";
import Brand from "../components/header/Brand";

export default function Header() {
    const { formatMessage } = useIntl();
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap items-stretch">
                <Brand />
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <ItemContainer className={'from-orange-50 to-orange-300 border-orange-300'}>
                        <Task link="/hr" icon={faUser} name={formatMessage({id: 'header.human-resources'})} />
                        <Task link="/report" icon={faPenToSquare} name={formatMessage({id: 'header.report'})} />
                        <Task link="/assdf" icon={faUser} name={formatMessage({id: 'header.report'})} />
                    </ItemContainer>
                    <ItemContainer className={'from-gray-50 to-gray-300 border-gray-300'}>
                        <Task link="/assdf" icon={faUser} name={formatMessage({id: 'header.report'})} />
                        <Task link="/assdf" icon={faUser} name={formatMessage({id: 'header.report'})} />
                        <Task link="/assdf" icon={faUser} name={formatMessage({id: 'header.report'})} />
                    </ItemContainer>
                </div>
            </nav>
        </header>
    )
}