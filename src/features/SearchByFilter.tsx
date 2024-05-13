"use client";

import { Input } from "@/shared/ui/Input";
import { parseAsString, useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/Select";
import { ChangeEvent, TransitionStartFunction, useState } from "react";
import { Replacement } from "@react-input/mask";
import { CustomInputMask } from "@/shared/ui/InputMask";
import { PhoneInput } from "react-international-phone";
import { useTranslations } from "next-intl";
import "react-international-phone/style.css";
import { usePathname } from "next/navigation";

type Props = {
  startTransition: TransitionStartFunction;
};
type TSearchTypes = "date" | "name" | "code" | "phone";

enum ESearchType {
  "DATE" = "date",
  "NAME" = "name",
  "CODE" = "code",
  "PHONE" = "phone",
}

const maskVariants: Record<Exclude<TSearchTypes, "phone">, IMaskAttrs> = {
  [ESearchType.DATE]: {
    mask: "yyyy-mm-dd",
    replacement: { y: /\d/, m: /\d/, d: /\d/ },
    placeholder: "yyyy-mm-dd",
  },
  [ESearchType.CODE]: {
    mask: "aaddd",
    replacement: { a: /[A-Z]/, d: /\d/ },
    placeholder: "AL999",
  },
  [ESearchType.NAME]: {
    mask: "________________________________________________",
    replacement: { _: /[\W\S_]/ },
    placeholder: "Имя участника",
  },
};

interface IMaskAttrs {
  mask: string;
  placeholder: string;
  replacement?: string | Replacement;
}

const filterTypes: { name: string; value: TSearchTypes }[] = [
  { name: "Дата рождения", value: "date" },
  { name: "Код участника", value: "code" },
  { name: "Имя участника", value: "name" },
  { name: "Номер телефона", value: "phone" },
];

export const SearchByFilter = ({ startTransition }: Props) => {
  const [, setValue] = useQueryState(
    "search",
    parseAsString
      .withDefault("")
      .withOptions({ startTransition, throttleMs: 1000 })
  );

  const [selectedFilter, setSelectedFilter] = useState<TSearchTypes>(
    ESearchType.NAME
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value, {
      shallow: false,
      throttleMs: 1000,
    });
  };
  const handlePhoneChange = (phone: string) => {
    setValue(phone, {
      shallow: false,
      throttleMs: 1000,
    });
  };

  const handleFilterChange = (value: TSearchTypes) => {
    setSelectedFilter(value);
    setValue(null, {
      shallow: false,
      throttleMs: 1000,
    });
  };

  return (
    <div className="flex flex-row gap-3 justify-stretch">
      <div className="shrink basis-56">
        <Select value={selectedFilter} onValueChange={handleFilterChange}>
          <SelectTrigger className="mb-1.5">
            <SelectValue placeholder={"Фильтр"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filterTypes.map((type, index) => (
                <>
                  {
                    <SelectItem key={index} value={String(type.value)}>
                      {type.name}
                    </SelectItem>
                  }
                </>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grow shrink-0">
        {selectedFilter === ESearchType.PHONE ? (
          <PhoneInput
            defaultCountry="kz"
            onChange={(phone) => handlePhoneChange(phone)}
          />
        ) : (
          selectedFilter && (
            <CustomInputMask
              component={Input}
              mask={maskVariants[selectedFilter].mask}
              replacement={maskVariants[selectedFilter].replacement}
              placeholder={maskVariants[selectedFilter].placeholder}
              onChange={handleChange}
            />
          )
        )}
      </div>
    </div>
  );
};
