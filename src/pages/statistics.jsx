import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [{name: 'Proyecto 1', uv: 40, pv: 2400, amt: 2400}, 
{
  name: 'Proyecto 2',
  uv: 30,
  pv: 1398,
  amt: 2210,
},
{
  name: 'Proyecto 3',
  uv: 20,
  pv: 9800,
  amt: 2290,
},];

export default function Statistics() {
  return (
    <>
      <Head>
        <title>Statistics | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#F89F29" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#F89F29" barSize={30} />
  </BarChart>
      </Layout>
    </>
  );
}


