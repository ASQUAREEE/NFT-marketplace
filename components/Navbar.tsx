import {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import images from "@/assets";
import MenuItems from "./helper/MenuItems";
import ButtonGroup from "./helper/ButtonGroup";

const Navbar = () => {
  
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const [active, setActive] = useState("Explore NFTs");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start" onClick={() => {}}>
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer">
            <Image
              src={images.logo02}
              alt="logo"
              objectFit="contain"
              width={32}
              height={36}
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
            AsquareCrypto
            </p>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={images.logo02}
              alt="logo"
              objectFit="contain"
              width={32}
              height={36}
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>

        <div className="md:hidden flex">
          <MenuItems isMobile={false} active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image src={images.cross} alt="X"
           objectFit="contain"
            width={20}
            height={20}
            onClick={() => {
              setIsOpen(false);
            }}
            className={theme === "light" ? "filter invert" : ""}
          />
        ) : (
          <Image
            src={images.menu}
            alt="^"
            objectFit="contain"
            width={25}
            height={25}
            onClick={() => {
              setIsOpen(true);
            }}
            className={theme === "light" ? "filter invert" : ""}
          />
        )}

        {isOpen && (
          <div
          className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col"
          >
            <div className="flex-1 p-4">
            <MenuItems active={active} setActive={setActive} isMobile />
            </div>

            <div
            className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1"
            >
              <ButtonGroup setActive={setActive} router={router} />

            </div>

          </div>
        ) }
      </div>
    </nav>
  );
};

export default Navbar;
