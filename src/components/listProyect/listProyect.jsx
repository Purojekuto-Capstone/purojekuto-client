import React from 'react'
import ProyectsJson from '../../data/proyects.json'

const listProyect = ({proyects}) => {
    
    return (
            <>
                  
                      {
                          ProyectsJson.map(({id,name,deahtline}) => (
                            
                             <div className='container__content'id={id} key={id}>
                                <div className='container__deahtline'>
                                    <div></div>
                                </div>
                                <div className='container__name'>{name}</div>
                                <div className='container__deahtline'>{deahtline}</div>
                                <div className='container__more'>..</div> 
                             </div>  
                           
                         
                          ))
                      }
                   
                 
                </>  
        
    )
}

export default listProyect
