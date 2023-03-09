import Carousel from "react-bootstrap/Carousel";
import poster1 from "../../assets/poster-1.jpg";
import poster2 from "../../assets/poster-2.jpg";
import poster3 from "../../assets/poster-3.jpg";
import poster4 from "../../assets/poster-4.jpg";
import poster5 from "../../assets/poster-5.png";
import poster6 from "../../assets/poster-6.jpg";

function IndividualIntervalsExample() {
  return (
    <Carousel className="carousel" variant="dark">
      <Carousel.Item interval={2500}>
        <img
          className=" w-100"
          src={poster1}
          alt="First slide"
          style={{ objectFit: "contain", objectPosition: "center top" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className=" w-100"
          src={poster2}
          alt="Second slide"
          style={{ objectFit: "contain", objectPosition: "center top" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className=" w-100"
          src={poster3}
          alt="Third slide"
          style={{ objectFit: "contain", objectPosition: "center top" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className=" w-100"
          src={poster4}
          alt="Third slide"
          style={{ objectFit: "contain", objectPosition: "center top" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className=" w-100"
          src={poster5}
          alt="Third slide"
          style={{ objectFit: "contain", objectPosition: "center top" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100"
          src={poster6}
          alt="Third slide"
          style={{ objectFit: "contain", objectPosition: "center top" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
