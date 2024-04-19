import React, { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';
import axios from 'axios';

import {MarketAddress, MarketAddressABI} from './constants';

export const NFTContext = React.createContext();    //great alternative to redux;

export const NFTProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('');

   const nftCurrency = 'ETH';

   const checkIfWalletIsConnected = async () => {
    
    if(!window.ethereum) return alert('Please install Metamask')
 
    const accounts = await window.ethereum.request({method: 'eth_accounts'})

    if(accounts.length > 0) {
        setCurrentAccount(accounts[0]);
    }

    else {
        console.log('No Accounts Found')
    }

   }

   useEffect(() => {

    checkIfWalletIsConnected();
     
   },[]);

  
   const connectWallet = async() => {

    console.log('call ho rha')

    if(!window.ethereum) return alert('Please install Metamask');

    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
      
    setCurrentAccount(accounts[0]);

    window.location.reload();

   }


   return (
    
      <NFTContext.Provider value={{nftCurrency, connectWallet, currentAccount}}>
        {children}
      </NFTContext.Provider>

   )

};