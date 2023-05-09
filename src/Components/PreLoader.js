import React, { useEffect } from 'react'
import { preLoaderAnim } from '../Animations'
import "../Styles/PreLoader.css"

export default function PreLoader() {
    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Designer,</span>
            <span>&</span>
            <span>Developer,</span>
        </div>
    </div>
  )
}
