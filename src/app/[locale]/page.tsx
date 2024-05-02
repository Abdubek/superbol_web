import { Header } from "./_sections/Header";
import { Main } from "./_sections/Main";
import { Info } from "./_sections/Info";
import { SuperBol2024 } from "./_sections/SuperBol2024";
import { PreviousSuperBols } from "./_sections/PreviousSuperBols";
import { Partners } from "./_sections/Partners";
import { TiktokVideos } from "./_sections/TiktokVideos";
import { Footer } from "./_sections/Footer";
import { useTranslations } from "next-intl";
import {Suspense} from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Info />
      <SuperBol2024 />
      <PreviousSuperBols />
      <Partners />
      <Suspense fallback={<div />}>
        <TiktokVideos />
      </Suspense>
      <Footer />
    </main>
  );
}
