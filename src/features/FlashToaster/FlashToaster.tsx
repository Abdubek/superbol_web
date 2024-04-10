
import { cookies } from 'next/headers';
import FlashToasterClient from "./FlashToasterClient";

export function FlashToaster() {
  const flash = cookies().get('flash');
  return (
    <>
      <FlashToasterClient flash={flash?.value} />
    </>
  );
}

export function setFlash(flash: { type: 'success' | 'error'; message: string }) {
  cookies().set('flash', JSON.stringify(flash), { path: '/', expires: new Date(Date.now() + 2 * 1000) });
}