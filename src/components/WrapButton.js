import React from 'react'
import DemoButton from './DemoButton'
import ButtonComponent from './ButtonComponent'
import './WrapButton.css';
const WrapButton = () => {
  return (
    <div className='wrap'>
        <ButtonComponent />
        <DemoButton />
    </div>
  )
}

export default WrapButton