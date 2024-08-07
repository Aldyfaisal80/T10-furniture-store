const ButtonCategory = ({ text , className }) => {
    return (
        <span className="w-[200px] flex justify-center items-center bg-button-color rounded-full p-2 hover:bg-hover-color">{text}</span>
    )
}

export default ButtonCategory