"use client";

import { useEffect } from "react";
import Image from "next/image";
import NavBar from "../../../components/navbar";
import Carosuel from "../../../components/carosuel";

const programmingItems = [
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/programming-images/Minecraft%20Color%20Picker.jpeg",
        alt: "Minecraft Color Picker",
        description:
            "My first \"real\" program I did was in 2024 with a Minecraft Color-to-Block Matcher for color-matching for pixel art or real-life (inspired) builds. It uses an enum of blocks, each with unique RGB values, to find the 10 closest blocks to the desired color."
    },
    {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/programming-images/English%20Chinese%20Dictionary%20App.jpeg",
        alt: "Chinese Dictionary",
        description:
            "When I learned how to use Java APIs and JavaFX in UGA, I made a Chinese-English Dictionary App allowing the user to translate sentences with the Wiktionary API and look up individual characters with the Chinese Character Web API. It is compatible with both traditional and simplified characters."
    },
        {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/programming-images/ASCII%20Code.jpeg",
        alt: "Unicode Painter",
        description:
            "I practiced with Java data structures by creating my own array API that treats 1D arrays as 2D arrays with easy-to-change indices. An example of this in action is with a Unicode character painter tool, and the user can copy and paste the final painting."
    },
        {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/programming-images/Onyomi%20Code.jpeg",
        alt: "Onyomi Game",
        description:
            "While I was in Japan, I made a game that quizzes one type of Japanese character readings, onyomi (used in compound words). I made a linked list data structure of nodes where each reading is sorted in dictionary order and have \"chains\" of those that share that reading. This is used to give feedback to the user on correct/incorrect answers, especially for those with more than one reading. If the user enters the correct answer, the character is suspended for 60 rounds before it can be drawn at random again."
    },
        {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/programming-images/Diagonal%20Sums.png",
        alt: "Diagonal Sums",
        description:
            "My favorite class at UGA is Systems Programming, which teaches the C language and the fundamentals of coding. This is a multi-threaded program that takes a .txt file with a square grid of #s 0-9 and finds the horizontal, vertical, and diagonal sums for a desired number. Because the size of the grid can vary, it uses dynamic memory to copy the grid #s into the heap for the sums to be evaluated."
    },
        {
        loading: "eager",
        image: "https://banzaibmo.github.io/Kai-Website/projects-images/programming-images/Server%20Client.jpeg",
        alt: "Server Client",
        description:
            "Also with C, I built a server-client without library call functions and using system calls instead. Once I connect the server program to a free port in a machine, a client program can try to connect to the server so messages can be sent from both programs."
    },
];

export default function Programming() {
    return (
        <main className="programming">
            <NavBar/>
            <h1 className="text-title">Programming</h1>
            <Carosuel items={programmingItems} />
        </main>
    );

}