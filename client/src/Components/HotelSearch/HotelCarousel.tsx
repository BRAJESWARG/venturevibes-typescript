import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface ControlledCarouselProps {
    val?: {
        Image1?: string;
        Image2?: string;
        Image3?: string;
    };
}

const ControlledCarousel: React.FC<ControlledCarouselProps> = ({ val }) => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number, e: unknown) => {
        setIndex(selectedIndex);
    };

    const Image1 = val?.Image1;
    const Image2 = val?.Image2;
    const Image3 = val?.Image3;

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={Image1} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Image2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Image3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ControlledCarousel;