import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  series: [
    {
      name: 'Profit',
      data:[100,200,30,100,30,50,100]
    }
  ]
};

export default function Statistics() {
  return (
    <>
      <Head>
        <title>Statistics | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
      
        <HighchartsReact highcharts={Highcharts} options={{options}} />
      
      </Layout>
    </>
  );
}

