import React from 'react'
import './style.css'
import Button from './../../Mock/Button';

const AddSubscribe = () => {
    return (
        <div className='addSubscribe'>
            <div className='email'><i class="fas fa-envelope"><span>Subscribe to our Newsletter</span></i></div>
            <div className='inputSubscribe'>
                    <input type='text' placeholder='Your Email id'/>
                    <Button btn='Subscribe'/>
            </div>
        </div>
    )
}

export default AddSubscribe
