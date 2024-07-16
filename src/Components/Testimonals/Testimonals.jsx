import React, { useState, useEffect } from 'react'

import styles from './../Testimonals/Testimonals.module.css'

const Testimonals = () => {
    const testimonials = [
        {
            name: 'John Doe',
            title: 'CEO , CAWLI WIRELESS',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.',
            rating: 4,
        },
        {
            name: 'Maria Kate',
            title: 'CEO , ACUTE',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.',
            rating: 5,
        },
        {
            name: 'Anna Deynah',
            title: 'CEO , BUILDIFY',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.',
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