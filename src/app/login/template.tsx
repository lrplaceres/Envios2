import Designer from "@public/Designer.png";
import Image from "next/image";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid sm:grid-cols-2 gap-0 max-w-screen-md flex-col items-center justify-center rounded-xl border-2 border-slate-300 border-solid shadow-md shadow-slate-300">
        <div className="hidden sm:block">
          <Image
            aria-hidden
            src={Designer}
            alt="my picture"
            style={{
              width: "100%",
              height: "auto",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            priority={true}
            quality={100}
            layout="responsive"
            
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Template;
