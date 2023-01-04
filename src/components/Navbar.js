import React, { useContext, useState } from 'react'
import { Box } from '@mui/system'
import LOGO from '../assets/workplace logo.png'
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../context/ThemeProvider';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isNightMode, setIsNightMode] = useState(false);
    const {isDark, setIsDark, light, dark} = useContext(ThemeContext);

    console.log(isDark)    

  return (
    <Box style={{height: '3.5rem', width: '100vw', background: `${isDark?dark.navCol : light.navCol}`, boxShadow: '0px 10px 10px gray' }}>
        <Box style={{height: '5rem', width: '100vw', background: `${isDark?dark.navCol : light.navCol}`, position:'fixed' }}>
            <Box style={{width: '95%', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                
                
                <box>   
                    <img src={LOGO} style={{height: '4rem', marginTop: '0.8rem'}} />
                </box>  

                <ul style={{display: 'flex', width: '35%', justifyContent: 'space-between', fontWeight: '600', fontSize: '1.2rem', marginTop: '1.5rem'}}>
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link to='/signin'>
                        <li>FIND JOBS</li>
                    </Link>
                    <li>FIND CANDIDATES</li>
                    <li>ARTICLES</li>
                </ul>   

                <Box>   
                    <Box style={{paddingTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                        <Box style={{width: '3rem', height: '20px', background: `${isNightMode?'#5137a6' : 'gray'}`, borderRadius: '20px', border: '2px solid gray',}}
                            onClick={isDark?()=>setIsDark(false): ()=>setIsDark(true)}
                            >
                                <Box style={{width: '20px', height: '20px', background:'#351d85',
                                borderRadius: '20px', position: 'relative', left: `${isDark?'26px':'0px'}`, transition: 'all 0.3s ease'
                                }}>

                                </Box>
                        </Box>
                        <h3 style={{position: 'relative', bottom: '1.2rem', }}>Night Mode</h3>
                    </Box>
                </Box>


            </Box>
        </Box>
    </Box>
  )
}

export default Navbar