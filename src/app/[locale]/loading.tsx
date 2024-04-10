import {Typography} from "@/shared/ui/Typography";
import Image from "next/image";

export default function CabinetLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        className="animate-spin"
        alt="loader"
        src={"/loader.png"}
        width={32}
        height={32}
      />
    </div>
  );
}