import React from 'react'
import Loader from "react-loader-spinner";

export default function LoaderComponent(props) {
  return (
    <>
      <Loader
        type="Rings"
        color={props.color ? props.color : "#F89F26"}
        height={100}
        width={100}
      />
    </>
  )
}
