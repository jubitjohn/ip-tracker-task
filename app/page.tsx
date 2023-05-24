import React from 'react';
import Image from 'next/image';

export interface HomeProps {
  ipAddress: string;
}

export default function Home({ ipAddress }: HomeProps) {
  return (
    <div>
      <p>Hello</p>
      <p>Your IP address: {ipAddress}</p>
    </div>
  );
}

