import {PropsWithChildren} from "react";

export type ItemContainerType = PropsWithChildren & {
    className: string;
}
export default function ItemContainer({children, className}: ItemContainerType) {
    return <div className={`flex flex-row bg-gradient-to-b border-2 rounded-b-md shadow-md mr-3 items-center pl-2 pr-2 ${className}`}>{children}</div>
}