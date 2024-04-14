import Link from "next/link";

type MenuProps = { 
    isMobile: boolean;
    active: string;
    setActive: React.Dispatch<React.SetStateAction<any>>;
  };
  
  const MenuItems = ({ isMobile, active, setActive }: MenuProps) =>{
    const generateLink = (i: number) =>{
     switch (i) {
      case 0:
        return '/';
      case 1:
        return '/created-nfts';
      case 2:
        return '/my-nft';
      default:  
         return '/';
     }
    }
  
    return (
      <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
  
       {['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((item,i)=> (
        <li
        key={i}
        onClick={()=>{
             setActive(item)
        }}
        className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
        ${active === item ? 'dark:text-white text-nft-black-1': 'dark:text-nft-gray-3 text-nft-gray-2'}
        `}
        >
     <Link href={generateLink(i)}>{item}</Link>
        </li>
       ) )}
  
      </ul>
    )
  }

  export default MenuItems