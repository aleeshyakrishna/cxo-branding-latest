import React, { useState, useEffect } from 'react'

import styles from './../Testimonals/Testimonals.module.css'

import Professional1 from "./Images/testimonialMen1.jpg"
import Professional2 from "./Images/testimonialWomen2.avif"
import Professional3 from "./Images/testimonialWomen1.avif"

const Testimonals = () => {
    const testimonials = [
        {
            name: 'John Doe',
            title: 'Confidential: Group Head – Marketing & Product Planning | Consumer Durables.',
            image: Professional1,
            quote: '“My experience with Mahesh of CXO Branding has exceeded my very high expectations. I appreciate the attention to detail; the ability to profile my career & compile my past and current career experiences into a wonderful summary & biography. I would highly recommend him to anyone looking for these types of services”.',
            rating: 4,
        },
        {
            name: 'Maria Kate',
            title: ' Confidential: IT Sales & Project Management Professional; Singapore.',
            image: Professional2,
            quote: '“It was a pleasure working with the people at CXO Branding. I am extremely happy with their work. I am sure they will have many success stories in the years ahead!” ',
            rating: 5,
        },
        {
            name: 'Anna Deynah',
            title: 'Confidential: Group CIO with experience in Telecom , Healthcare & Logistics,',
            image: Professional3,
            quote: '“Mahesh’s interactive skills and patience helps in creating individual brand value by probing and restructuring resume in unbelievable way”.',
            rating: 4,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    const { name, title, image, quote, rating } = testimonials[currentIndex];
    return (
        <div className={styles.MainTest}>
            <br/><br/>
        <h1>Testimonials</h1>
        <br/>
        
            <div className={styles.carousel_container}>


                <div className={styles.carousel_controls}>
                    <button className={styles.carousel_control_previous} onClick={handlePrevious}>
                        &lt;
                    </button>
                    <button className={styles.carousel_control_next} onClick={handleNext}>
                        &gt;
                    </button>
                </div>
                <div className={styles.carousel_item}>
                    <img src={image} alt="avatar" className={styles.avatar} />
                    <h5>{name}</h5>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.quote}>
                        <i className="fas fa-quote-left"></i> {quote}
                    </p>
                    <div className={styles.rating}>
                        {[...Array(5)].map((star, index) => (
                            <i
                                key={index}
                                className={`fa-star ${index < rating ? 'fas' : 'far'}`}
                            ></i>
                        ))}
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default Testimonals