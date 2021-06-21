import React from 'react'
import { Loader } from 'react-bulma-components'
 

const loading = () => {
    return (
        <Loader className='columns is-centered' style= {{
            with: 100,
            height: 100,
        }}
        
        > Cargando... </Loader>
    )
}

export default loading
