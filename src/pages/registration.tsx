import { RegistComponent } from '@/components/registComponent';
import { NextPage } from 'next';
import Head from 'next/head';

const Registration: NextPage = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8266790494656135"
          crossOrigin="anonymous"
        ></script>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <RegistComponent />
      </div>
    </>
  );
};

export default Registration;
