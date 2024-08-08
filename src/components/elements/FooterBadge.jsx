/* eslint-disable react/prop-types */

const FooterBadge = ({ children }) => {
    return (
        <ul className="flex flex-col gap-2">
            {children}
        </ul>
    )
}
const FooterTitle = ({ title }) => {
    return (
        <li className="font-bold text-font-color text-[2rem]">{title}</li>
    )
}

const FooterDescription = ({ text , icon , className}) => {
    return (
        <li className={`text-[1.1rem] font-medium ${className}`}>{icon} {text} </li>
    )
}

export default FooterBadge
FooterBadge.FooterTitle = FooterTitle
FooterBadge.FooterDescription = FooterDescription


// FooterBadge.FooterDescription = FooterDescription
