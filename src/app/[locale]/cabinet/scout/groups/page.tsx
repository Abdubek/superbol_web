import {Typography} from "@/shared/ui/Typography";
import {SearchParams} from "nuqs/parsers";
import {getTranslations} from "next-intl/server";
import {groupsApi} from "@/shared/api/groups";

type Props = {
  searchParams: SearchParams;
};

export default async function CabinetScoutCastingPage({ searchParams }: Props) {

  const res = await groupsApi.getGroups()
  const t = await getTranslations("casting");

  console.log(res)

  return (
    <main>
      <Typography size="h3" className="mb-10">{t('title')}</Typography>

    </main>
  )
}
