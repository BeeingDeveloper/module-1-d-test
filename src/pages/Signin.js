import React, { useContext } from 'react'
import {FcGoogle} from 'react-icons/fc';
import { ThemeContext } from '../context/ThemeProvider';


const Signin = () => {

    const {isDark, setIsDark, light, dark} = useContext(ThemeContext);

  return (
    <div style={{width: '100vw',height: '100vh', padding: 'rem',  alignItems: 'center', background: `${isDark?dark.main : light.main}`, color: `${isDark?dark.textCol : light.textCol}`}}>
        <h1 style={{paddingTop: '5rem'}}>WELCOME CANDIDATE</h1>
        <div style={{width: 'fit-content', margin: 'auto'}}>
            <h2>Sign In</h2>
            <div style={{display: 'flex', border:'1px solid gray', width:'fit-content', borderRadius: '100px', padding: '0.5rem', height:'2.2rem', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
                <FcGoogle style={{fontSize: '2rem'}} />
                <h4>Sign In with google</h4>
            </div>
        </div>
    </div>
  )
}

export default Signin