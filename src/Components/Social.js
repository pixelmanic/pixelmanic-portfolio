import React, { useEffect } from 'react'
import {
    FacebookFilled,
    GithubFilled,
    InstagramOutlined,
    TwitterOutlined,
  } from "@ant-design/icons";
import "../Styles/Social.css"
import { socialAnim } from '../Animations';

export default function Social() {
  useEffect(()=>{
    socialAnim()
  },[])
  return (
    <section className='social-section'>
        <h1 className='social-hero-text'><span>Stay in touch!</span><small>👋</small></h1>
        <p className='social-sub-title'>Check out my online profiles.</p>
        <div className='social-links'>
            <a href='https://www.instagram.com/pixel_manic/' rel='noreferrer' target='_blank'><InstagramOutlined /> Instagram</a>
            <a href='https://github.com/pixelmanic' rel='noreferrer' target='_blank'><GithubFilled /> Github</a>
            <a href='https://www.facebook.com/pixelmanic' rel='noreferrer' target='_blank'><FacebookFilled /> Facebook</a>
            <a href='https://twitter.com/Mustafa_nazari7' rel='noreferrer' target='_blank'><TwitterOutlined /> Twitter</a>
        </div>
    </section>
  )
}
