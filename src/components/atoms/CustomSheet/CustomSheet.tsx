import { CustomSheetInterface } from "@/components/interfaces/CustomSheet.interface";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ui/sheet";
import { CustomButton } from "../CustomButton";

const CustomSheet = ({
  textButtonNewCustomSheet,
  textHeaderCustomSheet,
  textDescriptionCustomSheet,
  viewToRenderCustomSheet,
  buttonSave,
}: CustomSheetInterface) => {
  return (
    <Sheet>
      <SheetTrigger className="flex h-9 items-center space-x-1 rounded-md border p-1 shadow-sm text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground">
        {textButtonNewCustomSheet}
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{textHeaderCustomSheet}</SheetTitle>
          <SheetDescription>{textDescriptionCustomSheet}</SheetDescription>
        </SheetHeader>
        {viewToRenderCustomSheet}
        <SheetFooter>
          <SheetClose asChild>
            <CustomButton {...buttonSave} />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
