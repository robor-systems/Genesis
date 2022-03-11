import Head from 'next/head';

export default function Home() {
  const landingVideo = 'https://genesis-landing-page.s3.eu-west-1.amazonaws.com/Token+v1+-+City_Token+V4+web+use+2.mp4';
  return (
    <div className='translate-y-1/2'>
      <div className='flex justify-center items-center'>
        <Head>
          <title>Genesis</title>
          <meta name='description' content='Genesis Landing Page' />
        </Head>
        <video autoPlay loop muted width={230} height={280}>
          <source src={landingVideo} type='video/mp4' />
        </video>
        <div className='ml-12'>
          <span className='flex'>
            <h2 className='text-center text-5xl text-regal-blue'>REAL</h2>
            <h1 className='text-center text-5xl text-white ml-3'>WEALTH</h1>
          </span>
          <span className='flex mt-5'>
            <h2 className='text-center text-5xl text-white'>WITH</h2>
            <h1 className='text-center text-5xl text-regal-blue ml-3'>
              VIRTUAL
            </h1>
          </span>
          <span className='flex flex-start mt-5'>
            <h1 className='text-center text-5xl text-white'>ASSETS</h1>
          </span>
        </div>
      </div>
      <div className='flex justify-center translate-y-32'>
        <h2 className='text-regal-dark-blue text-2xl'>COMING SOON...</h2>
      </div>
    </div>
  );
}
