"use client";
import { useRouter } from "next/navigation";
//ICONS
import { MdLocalShipping } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdHeadsetMic } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 bg-slate-600 w-full min-h-12 text-white flex items-center flex-row px-2">
      <div className="font-sans font-bold text-2xl basis-1/4 flex items-center gap-1">
        <MdMenu />
        <h3 className="hidden md:block font-semibold">La Cubana</h3>
      </div>

      <div className="flex justify-center gap-5 basis-1/2">
        <MdLocalShipping
          size={30}
          className="hover:cursor-pointer hover:scale-90"
          onClick={() => router.push("/envios")}
        />
        <MdGroups
          size={30}
          className="hover:cursor-pointer hover:scale-90"
          onClick={() => router.push("/clients")}
        />
        <MdHeadsetMic
          size={30}
          className="hover:cursor-pointer hover:scale-90"
          onClick={() => router.push("/crm")}
        />
        <MdShoppingCart
          size={30}
          className="hover:cursor-pointer hover:scale-90"
          onClick={() => router.push("/tienda")}
        />
      </div>

      <h3 className="font-sans text-end basis-1/4">Lazaro</h3>
    </div>
  );
};

export default NavBar;
