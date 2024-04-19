"use client"

import {Scanner} from '@yudiel/react-qr-scanner';
import {actions} from "@/actions";
import {toast} from "react-toastify";
import {useState} from "react";

const numberPattern = /\d+/g;

export const QrScanner = () => {
  const [fetching, setFetching] = useState(false)

  const handleScannerResult = async (result: string) => {
    const ids = result.match(numberPattern)
    if (ids && ids?.length) {
      const id = ids?.[0]
      if (id?.length && !fetching) {
        setFetching(true)
        const success = await actions.scan(id)
        setFetching(false)
        if (success) {
          toast("Сканирование успешно прошло")
        }
      }
    }
  }

  return (
    <div>
      <Scanner
        onResult={handleScannerResult}
        onError={(error: any) => console.log(error?.message)}
      />
    </div>
  )
}