import React from 'react';
import './footer.scss';
import {InstagramOutlined} from '@ant-design/icons';
import {GithubOutlined} from '@ant-design/icons';
import {TwitterOutlined} from '@ant-design/icons';
import {FacebookOutlined} from '@ant-design/icons';
const Footer = () => {
    return (
        <footer className="footer">
          <div className="Letras" >
        <p className='sobreMi' >ABOUT ME</p> 
        <p className='contacto'  >CONTACT</p> 
        <p className='home'  >HOME</p> 
          </div>
          <div className='Copy'>
         <p className='copyright'> @Copyright Company Antony Gomez Carrasco 
         <InstagramOutlined />
         <GithubOutlined />
         <TwitterOutlined />
         <FacebookOutlined /> 
         </p> 
        
          </div>
        </footer>
    )
}
export default Footer;