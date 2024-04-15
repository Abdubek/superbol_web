import {Header} from "@/app/[locale]/_sections/Header";
import {Footer} from "@/app/[locale]/_sections/Footer";
import {SuperBol2024Banner} from "@/app/[locale]/super-bol-2024/_sections/SuperBol2024Banner";
import {Steps} from "@/app/[locale]/super-bol-2024/_sections/Steps";
import {CastingCities} from "@/app/[locale]/super-bol-2024/_sections/CastingCities";
import {Participants} from "@/app/[locale]/super-bol-2024/_sections/Participants";
import {Faq} from "@/app/[locale]/super-bol-2024/_sections/Faq";
import {SearchParams} from "nuqs/parsers";

type Props = {
  searchParams: SearchParams
}

export default function Home({ searchParams }: Props) {
  return (
    <main>
      <Header />
      <SuperBol2024Banner />
      <Steps />
      <CastingCities />
      <Participants searchParams={searchParams} />
      <Faq />
      <Footer />
    </main>
  );
}
