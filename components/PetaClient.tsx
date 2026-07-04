"use client";
import dynamic from 'next/dynamic';

const PetaMap = dynamic(() => import('./Peta'), { ssr: false });

export default function PetaClient() {
  return <PetaMap />;
}
