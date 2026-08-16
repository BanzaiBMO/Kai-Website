"use client";

import { useEffect } from "react";
import Image from "next/image";
import NavBar from "../../../components/navbar";
import Carosuel from "../../../components/carosuel";

const artItems = [
    {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Sam and Mack.jpeg'),
        alt: "Sam and Mack",
        title: "\"Sam and Mack\" - 2010",
        description:
            "I started drawing at 5 years old. Not saying that drawing early is not required for any drawing experience because it is a skill and not a talent. But talent is an inherent characteristic that places people at a higher advantage to sharpen this skill faster than others..."
    },


    {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Barn Art.jpeg'),
        alt: "The Lonely Farm of the Sunlight",
        title: "\"The Lonely Farm of the Sunlight\" - 2014",
        description:
            "In 3rd grade, I started learning art concepts in school such as color theory and the 7 elements of art. I entered several school and county level art competitions up until 10th grade."
    },

        {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Self Portrait.jpeg'),
        alt: "Self-Portrait",
        title: "\"Self-Portrait\" - 2019",
        description:
            "As school got more busy, I drew less, but in 8th grade, I attempted a self-portrait in pencil, a medium I felt uncertain by. After weeks of progress, I felt more comfortable to draw using different tools and learn more about lighting and shading."
    },

    {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Rocket Drawings.jpeg'),
        alt: "Tokibunkatsu Rocket",
        title: "\"Tokibunkatsu Rocket\" - 2018",
        description:
            "Around the same time, my love for technology shined into my love of drawing. This is concept art for a research rocket designed to enter the exosphere using liquid hydrogen and an electrolysis engine."
    },

    {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Tarditroop.jpeg'),
        alt: "Tarditroop",
        title: "\"Tarditroop\" - 2021",
        description:
            "This is a design for a military humanoid robot, one of many technical drawings I presented to the Georgia's Governor's Honors Program (GHP). I ended up a semi-finalist (immediately before acceptance) in the program."
    },

    {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Marker Art Collage.jpeg'),
        alt: "A Bunch of Marker Art",
        title: "\"A Bunch of Marker Art\" - 2019-2020",
        description:
            "In the midst of my Japanese learning, I was inspired by many anime and drew with alcohol markers. I ran an Instagram account that grew to 250 followers before I became swamped with schoolwork, college applications, and real life."
    },

    {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Shin Godzilla Art.jpeg'),
        alt: "Shin Godzilla",
        title: "\"Shin Godzilla\" - 2020",
        description:
            "I feel obliged to show my Godzilla illustration as a kaiju (Japanese monsters) fan. I used Google Earth Pro to capture the angle for the drawing as if Godzilla is seen from the air."
    },

        {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/Maxwell and his Starite.jpeg'),
        alt: "Scribblenauts' Maxwell and a Starite",
        title: "\"Scribblenauts' Maxwell and a Starite\" - 2022",
        description:
            "Today, I still draw when I have the time (not much), but I adjusted to digital art and graphic design. I recently started learning to render using different light values to imitate still life."
    },

        {
        loading: "eager",
        image: require('../../../public/projects-images/art-images/BanzaiBMO Profile.jpeg'),
        alt: "BanzaiBMO",
        title: "\"BanzaiBMO\" - 2025",
        description:
            "My latest illustration shows Beemo from Adventure Time with a different look, as if she time-traveled from WWII's Pacific Theater and found her way into my desk."    },
];

export default function Art() {
    return (
        <main className="art">
            <NavBar/>
            <h1 className="text-title">Art</h1>
            <Carosuel items={artItems} />
        </main>
    );

}