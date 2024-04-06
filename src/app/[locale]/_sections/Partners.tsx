import {Typography} from "@/shared/ui/Typography";
import Image from "next/image";


export const Partners = () => {
  return (
    <section className="container pt-20 pb-8">
      <Typography size="h1" variant="primary">Наши партнеры</Typography>
      <Typography size="body3" variant="grey" className="mb-5">Свяжитесь с нами, чтобы стать партнером проекта</Typography>
      <div className="flex items-center gap-14">
        <Image src="/partners/freedom.png" alt="Freedom" width={317} height={166} />
        <Image src="/partners/qazsport.png" alt="Freedom" width={350} height={75} />
      </div>
    </section>
  )
}