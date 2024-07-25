import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../Images/Resume/1.jpeg';
import Resume2 from '../../Images/Resume/2.jpeg'
import Resume3 from '../../Images/Resume/3.jpeg'
import Resume4 from '../../Images/Resume/4.jpeg'
import Resume5 from '../../Images/Resume/5.jpeg'
import Resume6 from '../../Images/Resume/6.jpeg'
import Resume7 from '../../Images/Resume/7.jpeg'
import Resume8 from '../../Images/Resume/8.jpeg'
import Resume9 from '../../Images/Resume/9.jpeg'
import Resume10 from '../../Images/Resume/10.jpeg'

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

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume4} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume5} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume6} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume7} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume8} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume9} alt="" />
        <Carousel.Caption className={styles.CarosalCaptions}>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Resume10} alt="" />
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