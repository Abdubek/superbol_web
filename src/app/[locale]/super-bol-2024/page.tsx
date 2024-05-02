import {Header} from "@/app/[locale]/_sections/Header";
import {Footer} from "@/app/[locale]/_sections/Footer";
import {SuperBol2024Banner} from "@/app/[locale]/super-bol-2024/_sections/SuperBol2024Banner";
import {Steps} from "@/app/[locale]/super-bol-2024/_sections/Steps";
import {CastingCities} from "@/app/[locale]/super-bol-2024/_sections/CastingCities";
import {Participants} from "@/app/[locale]/super-bol-2024/_sections/Participants";
import {Faq} from "@/app/[locale]/super-bol-2024/_sections/Faq";
import {SearchParams} from "nuqs/parsers";
import {Suspense} from "react";
import {ParticipantsSkeleton} from "@/app/[locale]/super-bol-2024/_sections/ParticipantsSkeleton";

type Props = {
  searchParams: SearchParams
}

export default function Home({ searchParams }: Props) {
  return (
    <main key={Math.random()}>
      <Header />
      <SuperBol2024Banner />
      <Steps />
      <CastingCities />
      <Suspense fallback={<ParticipantsSkeleton searchParams={searchParams} />}>
        <Participants searchParams={searchParams} />
      </Suspense>
      <Faq />
      <Footer />
    </main>
  );
}
