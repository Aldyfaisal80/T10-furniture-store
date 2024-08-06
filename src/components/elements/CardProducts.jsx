const Card = ({ children }) => {
    return (
        <div className="flex flex-col justify-between items-center w-[370px] h-[450px]">
            {children}
        </div>
    )
}

const CardImg = ({ img, className }) => {
    return (
        <div className="flex justify-center items-center w-full h-[80%] bg-bg-card rounded-tl-[2vh] rounded-tr-[2vh] p-4">
            <img src={img} alt="" className={`h-[300px] ${className}`} />
        </div>
    )
}

const CardDesc = ({ title, price, icon }) => {
    return (
        <div className="flex w-full h-[20%] justify-between items-center bg-primary-brown text-font-color p-4 text-xl rounded-bl-[2vh] rounded-br-[2vh] font-semibold">
            <div>
                <h1>{title}</h1>
                <span>${price}</span>
            </div>
            {icon}
        </div>
    )
}

Card.CardImg = CardImg
Card.CardDesc = CardDesc
export default Card