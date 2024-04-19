
import React, { useContext } from 'react'
import images from '../assets'
import Link from 'next/link';
import Image from 'next/image';
import { NFTContext } from '@/context/NFTContext';

// Define the interface for the NFT object
type NFT = {
  i: number;  
  name: string;
  seller: string;
  owner: string;
  description: string;
  price: string;
}

// Define the props interface for the NFTCard component
type NFTCardProps = {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {

  const {nftCurrency} = useContext(NFTContext);

  const { i, name, seller, owner, description, price } = nft;

  const nftImageKey = `nft${i}` as keyof typeof images;
  const nftImage = images[nftImageKey];

  return (
    
     <Link href={{ pathname: '/nft-details', query:nft}}>
     

      <div className='flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md'>       

    <div className="relative w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
        <Image
        layout='fill'
        objectFit='cover'
        src={nftImage}
        alt={`nft${i}`}

        />
    </div>
       
       <div className='mt-3 flex flex-col'>

        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">{name}</p>


        <div className='flexBetween mt-1 minlg:mt-3 fllex-row xs:flex-col xs:items-start xs:mt-3'>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">{price} <span className="normal">{nftCurrency}</span></p>

            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">{seller}</p>
        </div>

       </div>

      </div>

 

     </Link>


  );
};

export default NFTCard;
