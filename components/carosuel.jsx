import {useState} from "react";
import Image from "next/image";

export default function Carousel({items}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextImage = () => {
        setCurrentIndex((currentIndex) => 
        (currentIndex + 1) % items.length
        );
    };

    const previousImage = () => {
        setCurrentIndex((currentIndex) => 
        (currentIndex - 1 + items.length) % items.length
        );
    };

    const currentItem = items[currentIndex];

    return(
        <div className="carousel">
            <button className="carousel-button carousel-button-left"
                onClick={previousImage}
                aria-label="Previous image"
            >
            &#10094;
            </button>

            <div className="carousel-item">
                <img
                    className="carousel-image"
                    src={currentItem.image}
                    alt={currentItem.alt}
                />
                <div className="carousel-text">
                    <p className="title">{currentItem.title}<br></br></p>
                    <p>{currentItem.description}</p>
                </div>
                
            </div>
            <button className="carousel-button carousel-button-right"
                onClick={nextImage}
                aria-label="Next image"
            >
            &#10095;
            </button>
        </div>
    );
}