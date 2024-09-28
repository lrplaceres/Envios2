import { CustomSheet } from "@atoms/CustomSheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@ui/menubar";

import { MdMenu } from "react-icons/md";

//ATOMS

const ClientsHeader = () => {
  return (
    <div className="h-16 flex items-center justify-between">
      <CustomSheet />
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger><MdMenu size={20}/></MenubarTrigger>
          <MenubarContent>                      
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default ClientsHeader;
