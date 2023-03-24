import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type TaskProps = {
    link: string;
    icon: IconProp;
}
export default function Task(props: TaskProps): JSX.Element {
    console.log(props);
    return (
        <Link to={props.link} className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
            <FontAwesomeIcon icon={props.icon} />
        </Link>
    )
}