import Image from "next/image";

type ButtonProps = {
    type: 'button',
    title: string,
    icon?: string,
    varnt: 'btn_dark_green'
}

const Button = ({ type, title, icon, varnt }: ButtonProps) => {
  return (
    <button 
      className={'flexCenter gap-3 rounded-full border btn_dark_green ${varnt}'}
        type={type}
    >
        {icon && <Image src={icon} alt={title} width={20} height={20} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button