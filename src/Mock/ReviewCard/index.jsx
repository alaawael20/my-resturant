import React from 'react'
import './style.css'
import star from '../../assets/star.png'

const ReviewCard = ({ personImage, personName, personReview }) => {
    return (
        <div className='reviewCard'>
            <div className='personInfo'>
                <img src={personImage} alt='PersonImage' />
                <div>
                    <span>{personName}</span>
                    <div>
                        <span><img src={star} alt='star' /></span>
                        <span><img src={star} alt='star' /></span>
                        <span><img src={star} alt='star' /></span>
                        <span><img src={star} alt='star' /></span>
                        <span><img src={star} alt='star' /></span>
                    </div>
                </div>
            </div>
            <p>{personReview}</p>
        </div>
    )
}

export default ReviewCard
