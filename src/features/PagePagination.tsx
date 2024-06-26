"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem, PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/shared/ui/Pagination";
import {parseAsInteger, useQueryState} from "nuqs";
import {TransitionStartFunction, useEffect, useRef, useState} from "react";
import {Typography} from "@/shared/ui/Typography";

export const LIMIT = 10

type Props = {
  totalSize: number
  startTransition?: TransitionStartFunction
}

export const PagePagination = ({ totalSize, startTransition }: Props) => {
  const totalPage = Math.floor(totalSize / LIMIT) + 1
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger
      .withDefault(1)
      .withOptions({ startTransition })
  );
  const [arrayRange, setArrayRange] = useState<Array<number>>([]);

  useEffect(() => {
    const fillRangeArray = () => {
      const leftRange = page - 1;
      let rightRange = page + 1;

      if (rightRange >= totalPage) rightRange = totalPage;

      const arrayToFill = [];
      for (let i = leftRange; i <= rightRange; i++)
        i > 0 && arrayToFill.push(i);

      setArrayRange(arrayToFill);
    };

    fillRangeArray();
  }, [page, totalPage, setArrayRange]);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1, {shallow: false})
  }

  const handleNext = () => {
    if (page < totalPage) setPage(page + 1, {shallow: false})
  }

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} />
          </PaginationItem>
          {arrayRange.map((value, index) => (
            <PaginationItem key={index}>
              <PaginationLink isActive={page === value} onClick={() => setPage(value, { shallow: false })}>
                {value}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}