import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const CustomSwitch = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export default CustomSwitch;
