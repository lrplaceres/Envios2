//ATOMS
import { NavBar } from "@organisms/NavBar";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="mt-12">{children}</div>
    </>
  );
};

export default Template;
