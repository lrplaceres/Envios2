import { propsClientsHeaderInterface } from "@/components/interfaces/propsClientsHeader.interface";
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

const ClientsHeader = ({
  viewToRenderCustomSheet,
  textButtonNewCustomSheet,
  buttonSave,
  textHeaderCustomSheet,
  textDescriptionCustomSheet,
}: propsClientsHeaderInterface) => {
  return (
    <div className="h-16 flex items-center justify-between">
      <CustomSheet
        {...{
          viewToRenderCustomSheet,
          textButtonNewCustomSheet,
          buttonSave,
          textHeaderCustomSheet,
          textDescriptionCustomSheet
        }}
      />
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <MdMenu size={20} />
          </MenubarTrigger>
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
