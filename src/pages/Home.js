import React, { useContext } from 'react'
import { jobs } from '../context/jobsData'
import FeaturedJobs from '../components/FeaturedJobs'
import '../utils/style.css'
import Footer from '../components/Footer'
import { ThemeContext } from '../context/ThemeProvider'


const Home = () => {

    const {isDark, setIsDark, light, dark} = useContext(ThemeContext);


  return (
    <div >
        <h1 style={{fontSize: '2.5rem', paddingTop: '5rem'}}>Get The <span style={{color: '#532adb', }}> Right Job</span> You Deserve</h1>
        <h4 style={{fontSize: '1.5rem', paddingTop: '2rem'}}>786 jobs & 110 candidates are registeresd</h4>
    
        <div style={{ background: `${isDark?dark.secondary : light.secondary}`, }}>
            <h1 style={{fontSize: '2.5rem', paddingTop: '5rem', color:  `${isDark?dark.textCol : light.textCol}`, }}>One Platform many <span style={{color: '#532adb', }}> Solution</span></h1>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width:'80%', margin: 'auto'}}>
                {
                    jobs.map((elm, i)=>{
                        return (
                            <div className='card' style={{background: `${isDark?dark.main : light.main}`, color: `${isDark?dark.textCol : light.textCol}`, border: '1px solid gray'}}>
                                <img src={elm.icon} />
                                <div stlyle={{alignItems: 'left'}}>
                                    <h2>{elm.position}</h2>
                                    <h3>{elm.availablePost}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <FeaturedJobs />
        <Footer />
    </div>
  )
}

export default Home