import ActivityCard from "./ActivityCard";


import profile from './assets/profile.jpg';
import React from "react";
import Slider from "react-slick";
import Comments from './Comments'


const set=[{
    image: profile,
    name: 'Project',
    description: "Description"
},{
    image: profile,
    name: 'Project',
    description: "Description"
},{
    image: profile,
    name: 'Project',
    description: "Description"
},
]

function Projects() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section id="projects">
            <div className="slider-container">
            <Slider {...settings}>
                {set.map((s, i) => (
                        <ActivityCard
                            key={i}
                            image={s.image}
                            name={s.name}
                            description={s.description}
                        />
                    ))}
            </Slider>
        </div>
        </section>
    );
}

export default Projects