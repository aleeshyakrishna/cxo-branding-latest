import React, { useState, useEffect } from 'react'

import styles from './../Testimonals/Testimonals.module.css'

const Testimonals = () => {
    const testimonials = [
        {
            name: 'John Doe',
            title: 'Confidential: Group Head – Marketing & Product Planning | Consumer Durables.',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',
            quote: '“My experience with Mahesh of CXO Branding has exceeded my very high expectations. I appreciate the attention to detail; the ability to profile my career & compile my past and current career experiences into a wonderful summary & biography. I would highly recommend him to anyone looking for these types of services”.',
            rating: 4,
        },
        {
            name: 'Maria Kate',
            title: ' Confidential: IT Sales & Project Management Professional; Singapore.',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
            quote: '“It was a pleasure working with the people at CXO Branding. I am extremely happy with their work. I am sure they will have many success stories in the years ahead!” ',
            rating: 5,
        },
        {
            name: 'Anna Deynah',
            title: 'Confidential: Group CIO with experience in Telecom , Healthcare & Logistics,',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
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