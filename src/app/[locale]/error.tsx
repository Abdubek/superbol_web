"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { ContactToWhatsapp } from "@/features/ContactToWhatsapp";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center flex-col text-center">
      <Typography size="h3" variant="primary" className="mb-6">
        Что то пошло
        <br /> не так
      </Typography>
      <Typography size="body1" variant="primary" className="mb-6">
        {error?.message}
      </Typography>
      <Button type="submit" variant="primary" className="mb-6" onClick={reset}>
        Попробовать заново
      </Button>
      {process.env.NEXT_PUBLIC_IS_ACTIVE === "true" && <ContactToWhatsapp />}
    </div>
  );
}
