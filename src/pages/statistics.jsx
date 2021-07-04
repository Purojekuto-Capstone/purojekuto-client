import React , {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { getStatistics, getUserInfo } from '../utils/services';
import {store, Store} from '../context/store';


const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '14px',
};

const grap = [
  {
      name: 'Proyecto 1',
      horas: 99,
      fill: '#8884d8',
  },
  
  {
      name: 'Proyecto 2',
      horas: 60,
      fill: '#82ca9d',
  },
  {
      name: 'Proyecto 3',
      horas: 40,
      fill: '#a4de6c',
  },
  {
      name: 'Proyecto 4',
      horas: 20,
      fill: '#d0ed57',
  },
  ];

// const data = [
// { 
//   name: 'Proyecto 1',
//   horas: 40
// }, 
// {
//   name: 'Proyecto 2',
//   horas: 30,
// },
// {
//   name: 'Proyecto 3',
//   horas: 20,
// },
// ];  

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
    .then(response => {
      console.log(response)
      setData(response)})
    .catch(Error => {})
    getUserInfo(config)
    .then(response => {
      console.log(response, "loop")
      })
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
        <Bar dataKey="horas" fill="#F89F29" barSize={30} />
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
            dataKey="horas"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
  </div>    
      </Layout>

    </>

  );

}


