import React from 'react'

type Myprop = {
    classStyles: string;
    btnName: string;
    handleClick: () => void;
}

const Button = ({handleClick , classStyles,btnName}:Myprop) => {
  return (
    <button type='button' className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
    onClick={handleClick}
    >
     {btnName}
    </button>
  )
}

export default Button