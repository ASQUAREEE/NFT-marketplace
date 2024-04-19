import React, { useContext } from "react";
import Button from "./Button";
import { NextRouter } from "next/router";
import { NFTContext } from "@/context/NFTContext";

type Myprop = {
    setActive: React.Dispatch<React.SetStateAction<any>>;
    router: NextRouter;
    connectWallet?:()=>void;
    currentAccount?:any;
}

const ButtonGroup = ({setActive, router}:Myprop) => {
  
  const {connectWallet, currentAccount} = useContext(NFTContext);
  
  return currentAccount ? (
    <Button btnName="Create" classStyles="mx-2 rounded-xl" 
    handleClick={()=>{
        setActive('');
        router.push('/create-nft')
    }}
    />
  ) : (
    <Button btnName="Connect" classStyles="mx-2 rounded-xl" 
    handleClick={()=>{
      connectWallet();
    }}
    />
  );
};

export default ButtonGroup;
