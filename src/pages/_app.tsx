import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '@/components/navbar'; // Ensure the path is correct
import '../styles/globals.css'; // Import your global styles

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;