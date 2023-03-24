import {FormattedMessage} from "react-intl";
import ItemContainer from "./ItemContainer";
import {Link} from "react-router-dom";

export default function Brand(): JSX.Element {
    return (
        <ItemContainer className={'from-gray-50 to-gray-300 border-gray-300'}>
            <Link to={'/'} >
                <span className="font-semibold text-xl tracking-tight">
                    <FormattedMessage id="brand" />
                </span>
            </Link>
        </ItemContainer>
    );
}