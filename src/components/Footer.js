import React from 'react'
import {BiCloudUpload} from 'react-icons/bi';
import STAFFING from '../assets/Group 334.png'


const Footer = () => {
  return (
    <div  style={{width: '100vw', margin:'auto', color: 'white', paddingTop: '5rem',background: '#17151c', paddingBottom: '5rem'}}>
        <div style={{width: '100%',  margin: 'auto'}}>
            <h2>Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing Solutions</h2>
            <h4>In the subject line of email, write your name, the description of the position you want to apply</h4>
            <button style={{display: 'flex', width: 'fit-content',cursor:'pointer', margin: 'auto', background: '#7a45ed', borderRadius: '0.5rem'}}><BiCloudUpload style={{fontSize: '4rem', color:'white'}} /> <h4 style={{fontSize: '1.2rem',color: 'white' }}>Upload your Resume</h4> </button>
        </div>
        <div style={{width: '100%',  margin: 'auto', marginTop: '2.5rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto'}}>
                <h1>Never want to miss<br/> any <span style={{color:'#865edb'}}>Job News?</span></h1>
                <div style={{display: 'flex', width: '50%', gap: '0.5rem', marginTop: '3rem', marginLeft: '5rem'}}>
                    <input placeholder='Enter your email...' style={{height: '2rem', backrgound: 'gray', width:'50%', borderRadius: '0.25rem', outline:'none'}} />
                    <button style={{height: '2.3rem', background: '#865edb', color:'white', fontWeight: 600, fontSize: '1.5rem', borderRadius: '0.25rem' }}>Subscribe</button>
                </div>
            </div>
            <div style={{ width: '100%', background: 'white', }}>
                <div style={{display:'flex',justifyContent: 'space-evenly', margin: 'auto', marginTop: '5rem', width: '80%', margin: 'auto'}}>
                    <div>
                        <img src={STAFFING} style={{height: '5rem'}} /> 
                    </div>
                    <ul style={{display: 'flex', width: '75%', gap:'5rem', marginLeft: '5rem', fontWeight:600, color: 'black', fontSize: '1.2rem'}}>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <h5 style={{color: 'gray'}}>© Staffing Solution All Right Reserved</h5>
        </div>
    </div>
  )
}

export default Footer