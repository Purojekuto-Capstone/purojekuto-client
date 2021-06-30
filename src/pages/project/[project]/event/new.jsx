import React from 'react'
import Layout from '../../../../components/layout/layout'
import Link from 'next/link'

export default function NewEvent(props) {
  return (
    <>
      <Layout>
      <div className="container">
        <Link href="/" >
          <a>←Back</a>
          </Link>
          <h1 className="container__h1">New event</h1>
          <p>Name</p>
          <input
            className="login__container--input"
            placeholder="  Select a type of project"
          ></input>
          <p>Start</p>
          <input
            className="login__container--input"
            placeholder="  Enter a deadline"
          ></input>
          <p>End</p>
          <input
            className="login__container--input"
            placeholder="  Please, select a calendar"
          ></input>
          <button className="btn btn-primary">Create Project</button>
        </div>
      </Layout>
    </>
  )
}
