import { Typography } from "@/shared/ui/Typography";
import { getTranslations } from "next-intl/server";
import * as React from "react";
import {EnterPhoneForm} from "@/features/EnterPhoneForm";

export default async function CabinetPhonePage() {
  const t = await getTranslations("phone");
  return (
    <main>
      <Typography size="h3" className="mb-10">
        {t("title")}
      </Typography>
      <EnterPhoneForm />
    </main>
  );
}
