"use client";

import { useEffect } from "react";
import Image from "next/image";
import NavBar from "../../../components/navbar";
import Carosuel from "../../../components/carosuel";

const design_3dItems = [
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/3d_design-images/LEGO%20BandMaid.jpeg",
        alt: "LEGO Band-Maid",
        description:
            "I used LEGO BrickLink Studio to build my dad's favorite band, Band-Maid! It uses ~2500 pieces which I had to purchase myself from several vendors across the world. In the end, the budget was $300. I recommend listening to their music (believe me, there are a lot of great songs that make your neck hurt.",
    },
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/3d_design-images/Glasses%20Design.jpeg",
        alt: "CAD Glasses",
        description:
            "During the winter, I took up CAD as a hobby and purchased a Bambu Lab P1S 3D Printer. While I have been learning the basics of Fusion 360, I challenged myself to design my own glasses from scratch, which uses forms to create organic shapes not restricted to one plane. In the end, I got a real pair of glasses that have a similar lens shape to the frame I designed."
    },
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/3d_design-images/Georgia%20Coaster.jpeg",
        alt: "UGA Coaster",
        description:
            "I designed a UGA coaster that has parts that click and stay in place, meaning that no glue is required to build it. The logo is taken from from an .svg vector image which is converted into a sketch in Fusion 360, and all parts were designed as separate components."
    },
];

export default function Design3D() {
    return (
        <main className="design3D">
            <NavBar/>
            <h1 className="text-title">3D Design</h1>
            <Carosuel items={design_3dItems} />
        </main>
    );
}