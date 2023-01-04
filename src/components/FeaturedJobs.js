import React, { useContext } from 'react'
import { featuredJobs } from '../context/jobsData'
import { ThemeContext } from '../context/ThemeProvider'

const FeaturedJobs = () => {

    const {isDark, setIsDark, light, dark} = useContext(ThemeContext);
    // `${isDark?dark.main : light.main}`
  return (
    <>
    <div style={{width: '100vw', margin:'auto', display: 'grid', gridTemplateColumns:'1fr 1fr', paddingTop: '5rem', background:    `${isDark?dark.main : light.main}`}}>
        <div style={{width: '90vw', marginLeft:'8rem', display: 'grid', gridTemplateColumns:'1fr 1fr 1fr', paddingTop: '5rem', }}>
        {
            featuredJobs.map((elm, i)=>{
                return (
                    <div style={{width: '30rem', textAlign: 'left', border:'2px solid gray', 
                     borderRadius:'0.5rem' , padding: '2rem', margin:'2rem', boxShadow: '10px 20px 25px gray',color:`${isDark?dark.textCol : light.textCol}`, background: `${isDark?dark.secondary : light.secondary}`
                    }}>
                        <div style={{display: 'flex', gap: '2rem',}}>
                            <img src={elm.icon} style={{width: '8rem'}} />
                            <div>
                                <h4 style={{fontSize: '1.5rem'}}>{elm.companyName}</h4>
                                <h4 style={{fontSize: '0.8rem'}}>{elm.type}</h4>
                            </div>
                        </div>
                        <div style={{marginLeft: '1rem'}}>
                            <h2 style={{fontSize: '1.2rem'}}>{elm.position}</h2>
                            <h2 style={{fontSize: '0.8rem'}}>{elm.description}</h2>
                            <div style={{display:'flex', justifyContent: 'space-between'}}>
                                <h2 style={{color: '#2bba66'}}>{elm.salary}</h2>
                                <button style={{padding: '0.8rem', fontSize:'1.5rem', color:'white', border:'1px solid transparent', 
                                borderRadius:'0.5rem', height:'3.5rem', background: '#865edb', width: '8rem', marginTop: '1rem', cursor: 'pointer'
                                }}>Apply</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
    <div style={{width: '100vw',  background:    `${isDark?dark.main : light.main}`}}>
        <button style={{ marginBottom: '5rem',color:'white', width: '10rem', margin: 'auto', marginBottom: '2rem', background: '#865edb', padding: '0.8rem', borderRadius: '0.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Find More</button>
    </div>
    </>
  )
}

export default FeaturedJobs