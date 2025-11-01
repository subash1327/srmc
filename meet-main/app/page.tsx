'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const room = searchParams?.get('room');
    const id = searchParams?.get('id'); // passphrase or token

    if (room) {
      // If an id/passphrase exists, add it as hash
      const target = id ? `/rooms/${room}?id=${id}` : `/rooms/${room}`;
      router.replace(target);
    }
  }, [searchParams, router]);

  return (
    <>
      <main className={styles.main} data-lk-theme="default">
        {/* ...the rest of your component stays the same */}
      </main>
      <footer data-lk-theme="default">{/* ... */}</footer>
    </>
  );
}