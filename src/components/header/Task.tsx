import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type TaskProps = {
    link: string;
    icon: IconProp;
    name: string;
}
export default function Task(props: TaskProps): JSX.Element {
    return (
        <Link to={props.link} className='block text-gray-500 hover:text-white flex flex-col p-1'>
            <FontAwesomeIcon icon={props.icon} className={'font-bold text-2xl'}/>
            <p>{props.name}</p>
        </Link>
    )
}