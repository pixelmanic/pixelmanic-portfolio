import { GithubFilled } from '@ant-design/icons'
import React from 'react'
import "../Styles/Footer.css"

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-div'>
            <div className='footer-one-div'>
            <img src='Logo.png' alt='Pixel Manic' />
            <span>Design & Development</span>
            </div>
            <div className='footer-two-div'>
                <a href='https://github.com/pixelmanic' rel='noreferrer' target='_blank'><GithubFilled /></a>
            </div>
        </div>
    </footer>
  )
}
