import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { getStatistics, getUserInfo } from '../utils/services';
import { store, Store } from '../context/store';

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '14px',
};

const grap = [
  {
    name: 'Proyecto 1',
    hours: 20,
    fill: '#8884d8',
  },

  {
    name: 'Proyecto 2',
    hours: 15,
    fill: '#82ca9d',
  },
  {
    name: 'Proyecto 3',
    horas: 40,
    fill: '#a4de6c',
  },
  {
    name: 'Proyecto 4',
    hours: 20,
    fill: '#d0ed57',
  },
];

const dataK = [
{
  name: 'Proyecto 1',
  hours: 40
},
{
  name: 'Proyecto 2',
  hours: 30,
},
{
  name: 'Proyecto 3',
  hours: 20,
},
];

export default function Statistics() {
  const { state } = useContext(store);
  const { token } = state;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    getStatistics(config)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((Error) => {});

  }, []);
  return (
    <>
      <Head>
        <title>Statistics | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <div className='grap__container'>
        <h1 className='title'>Projects Statistics</h1>

          <ResponsiveContainer width="100%" aspect={1}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#F89F29" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
              <Legend
                width={100}
                wrapperStyle={{
                  top: 40,
                  right: 20,
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #d5d5d5',
                  borderRadius: 3,
                  lineHeight: '40px',
                }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="hours" fill="#F89F29" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* <>
          <ResponsiveContainer width="95%" aspect={1}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="30%"
              barSize={20}
              data={data}
            >
              <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="hours"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </> */}
      </Layout>
    </>
  );
}
