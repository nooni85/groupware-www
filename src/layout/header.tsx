import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Task from "../components/header/Task";
import {useIntl} from 'react-intl';
import ItemContainer from "../components/header/ItemContainer";
import Brand from "../components/header/Brand";
import {useAuth} from "../components/auth/AuthProvider";

export default function Header() {
    const { formatMessage } = useIntl();
    const { user, login } = useAuth();

    return (
        <header>
            <nav className="flex flex-row">
                <Brand />
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
            </nav>
        </header>
    )
}