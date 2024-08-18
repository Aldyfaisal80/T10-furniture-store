/* eslint-disable react/prop-types */
const Navlink = ({ text , className}) => {
    return (
        <a className={`w-[100px] transition-all hover:font-bold ${className}`}>{text}</a>
    )
}

export default Navlink