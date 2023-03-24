import {FormattedMessage} from "react-intl";
import ItemContainer from "./ItemContainer";
import {Link} from "react-router-dom";
import brand from '../../assets/img/brand.png';

export default function Brand(): JSX.Element {
    return (
        <ItemContainer className={'from-gray-50 to-gray-300 border-gray-300'}>
            <Link to={'/'} >
                <span className="font-semibold text-gray-500 hover:text-black tracking-tight flex flex-row items-center">
                    <img src={brand} alt={'brand'} style={{height: '54px'}} />
                    <span className={'flex flex-col'}>
                        <p><FormattedMessage id="brand" /></p>
                        <p><FormattedMessage id="groupware" /></p>
                    </span>
                </span>
            </Link>
        </ItemContainer>
    );
}