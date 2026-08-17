"use client";

import { useEffect } from "react";
import Image from "next/image";
import NavBar from "../../../components/navbar";
import Carosuel from "../../../components/carosuel";

//there is history here with the image files...
const electronicsItems = [
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/electronics-images/Charging%20Block%20Electronics.jpeg",
        alt: "Charging Block",
        description:
            "I worked on a USB-C phone charger that transforms AC wall power into a steady DC input for safe wattage for the phone. It uses a step-down transformer and a full-wave rectifier for an easier AC to DC conversion, as well as a heat sink to bear excess heat without burning the charger or the connected device."
    },
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/electronics-images/Electric%20Workbench.jpeg",
        alt: "Electronic Workbench",
        description:
            "When I took an intensive design course that divided the class into smaller teams, we worked on an electric workbench (from scratch!) that runs from Raspberry Pi OS and implements a voltmeter, ohmmeter, DC reference, and a sinewave + square wave generator. For my team, I worked on the ohmmeter program, the SAR ADC circuit design, and oversought the file structure and code readability. Moreover, I wrote the user manual and the software portion of the technical document. We were one of 13/20 teams that passed all requirements for the project."
    },
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/electronics-images/Sensors%20Robot.jpeg",
        alt: "Sensors Robot",
        description:
            "During the summer, I built a robotic interactive pet that uses sensors to respond to the environment, specifically the room brightness, object proximity, and capacitive touch (petting). It responds by changing its emotions to become uncomfortable, scared, or excited from the change in environment. It is also an Internet of Things application because it transfers emotional data via WiFi to be outputted onto a webpage of live data."
    },
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/electronics-images/PCB%20Design.png",
        alt: "Sensors PCB",
        description:
            "Relating to the robotic pet project, I learned how to use KiCad for the first time and achieved a two-layer PCB design if my pet used one instead of breadboards. It uses two ground planes with all componented grounded to them through vias and signal and power connections at different widths to withstand surrounding electromagnetic noise, however it is not an optimal design due to its large surface area; in the future, I will learn to do less common PCB designs such as an 'L' shaped design that would have better suited the pet."
    },
];

export default function Electronics() {
    return (
        <main className="electronics">
            <NavBar/>
            <h1 className="text-title">Electronics</h1>
            <Carosuel items={electronicsItems} />
        </main>
    );

}