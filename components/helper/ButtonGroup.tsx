import React from "react";
import Button from "./Button";
import { NextRouter } from "next/router";

type Myprop = {
    setActive: React.Dispatch<React.SetStateAction<any>>;
    router: NextRouter;
}

const ButtonGroup = ({setActive, router}:Myprop) => {
  const hasConnected = true;
  return hasConnected ? (
    <Button btnName="Create" classStyles="mx-2 rounded-xl" 
    handleClick={()=>{
        setActive('');
        router.push('/create-nft')
    }}
    />
  ) : (
    <Button btnName="Connect" classStyles="mx-2 rounded-xl" 
    handleClick={()=>{
        setActive('');
    }}
    />
  );
};

export default ButtonGroup;
