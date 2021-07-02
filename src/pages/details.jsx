import React from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link';



export default function Login() {
    return (
<Layout>
    <div className="container__details">
        <h1>Project Detail</h1>
        <h4>Projecto 1</h4>
        <p>Descripcion detallada del proyecto</p>
        <p>Fecha de inicio   /   Fecha final</p>
        <button className="btn__btn-primary"><Link href="/" >
            <a>←Back</a>
        </Link></button>
    </div>
</Layout>
  );
}
