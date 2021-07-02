import React , {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { getStatistics } from '../utils/services';
import {store, Store} from '../context/store';


const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const grap = [
  {
    name: '18-24',
    uv: 12,
    pv: 2400,
    fill: '#8884d8',
  },
  
  {
    name: '35-39',
    uv: 10.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 9,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 11,
    pv: 4800,
    fill: '#d0ed57',
  },
];

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
  
  const {state} = useContext(store)
  const {token} = state
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [
      data, setData 
  ] = useState([]) 
  useEffect( () => {
    getStatistics(config)
    .then(response => {console.log(response)})
    .catch(Error => {})
    }, [])
    return (
    <>
      <Head>
        <title>Statistics | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
      <div className="box__container--description"> 
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" stroke="#F89F29" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#F89F29" barSize={30} />
  </BarChart>
      </div>
  <div className="box__container--calendar"> 
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={grap}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
  </div>    
      </Layout>

    </>

  );

}


