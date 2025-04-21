import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "../../utilis/data";
import './Testimonials.css';

interface ProductItem {
    name: string;
    imageurl: string;
}

const Testimonials: React.FC = () => {
    const products = productData.map((item: ProductItem, index: number) => (
        <Product
            key={index}
            name={item.name}
            url={item.imageurl}
        />
    ));

    return (
        <div className="Testimonials-container">
            <div className="Testimonials">
                <div>
                    <h1 className="Testimonials-text">Point. Pick. Stay.</h1>
                </div>
                <Carousel
                    className="Carousel"
                    swipeable={true}
                    draggable={true}
                    // centerMode={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    // containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                // dotListClassName="custom-dot-list-style"
                >
                    {products}
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;
