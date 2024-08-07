/* eslint-disable react/prop-types */
const ButtonPrimary = ({ text , className }) => {
  return (
    <button className={`px-4 py-2 rounded-lg w-[130px] flex justify-center items-center text-[1.1rem] ${className}`}>{text}</button>
  )
}

export default ButtonPrimary