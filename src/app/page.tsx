import {Header} from "@/app/_sections/Header";
import {Main} from "@/app/_sections/Main";
import {Info} from "@/app/_sections/Info";
import {SuperBol2024} from "@/app/_sections/SuperBol2024";
import {PreviousSuperBols} from "@/app/_sections/PreviousSuperBols";
import {Partners} from "@/app/_sections/Partners";
import {TiktokVideos} from "@/app/_sections/TiktokVideos";
import {Footer} from "@/app/_sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Info />
      <SuperBol2024 />
      <PreviousSuperBols />
      <Partners />
      <TiktokVideos />
      <Footer />
    </main>
  );
}
