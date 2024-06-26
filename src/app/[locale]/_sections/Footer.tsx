import Image from "next/image";
import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import InstagramIcon from "@/shared/icons/socials/instagram.svg";
import YoutubeIcon from "@/shared/icons/socials/youtube.svg";
import TiktokIcon from "@/shared/icons/socials/tiktok.svg";
import { Typography } from "@/shared/ui/Typography";

export const Footer = () => {
  return (
    <footer className="bg-bg-platinum">
      <div className="container pt-10 pb-14 flex justify-between">
        <div className="flex flex-col gap-3">
          <PrimaryLogo width={48} height={48} />
          <Image
            src="/partners/freedom.png"
            alt="Freedom"
            width={137}
            height={72}
            className="-ml-3"
          />
        </div>
        <div className="flex flex-col items-end">
          {/*<Typography size="caption2" variant="primary" className="text-right mb-3">*/}
          {/*  По вопросам сотрудничества и дополнительной<br/> информации свяжитесь с нами*/}
          {/*</Typography>*/}
          {/*<Typography size="body3" variant="grey">+ 7 7ХХ ХХХ ХХХХ</Typography>*/}
          {/*<Typography size="body3" variant="grey">+ 7 7ХХ ХХХ ХХХХ</Typography>*/}
          {/*<Typography size="body3" variant="grey">+ 7 7ХХ ХХХ ХХХХ</Typography>*/}
          {/*<Typography size="body3" variant="grey" className="mb-3">email@gmail.com</Typography>*/}
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@SuperBolKz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com/superbol.kz?igsh=MXQwdjlkcWhpeHNvbQ=="
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/@superbol.kz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <TiktokIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
