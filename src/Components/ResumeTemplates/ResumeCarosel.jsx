import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../Images/resume1.jpg';
import Resume2 from '../../Images/resume2.png'
import Resume3 from '../../Images/resume3.webp'
import styles from './ResumeCarosel.module.css'
function IndividualIntervalsExample() {
  return (
    <Carousel className={styles.imageResume}>
      <Carousel.Item interval={1000} >
        <img  src={ExampleCarouselImage} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={Resume2} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume3} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;