"use client";

import { useEffect } from "react";
import Image from "next/image";
import NavBar from "../../../components/navbar";
import Carosuel from "../../../components/carosuel";

const japaneseItems = [
    {
        loading: "eager",
        image: require('../../../public/projects-images/japanese-images/Guidebook Japanese.jpeg'),
        alt: "Guidebook Japanese",
        description:
            "Back in middle school, I wrote a guidebook of basic vocabulary taken from YouTube videos. I quickly picked up the most elementary topics such as numbers, pronouns, and demonstratives (e.g. this, that). Even at that age, I knew I had to learn Japanese kanji characters to learn vocabulary words in full."
    },
    {
        loading: "eager",
        image: require('../../../public/projects-images/japanese-images/Kanji by Grade Japanese.jpeg'),
        alt: "Kanji by Grade Japanese",
        description:
            "At the same time, I began learning kanji characters by the grades they are taught in Japanese schools (I learned 1st-6th grade kanji; ~1000 kanji). I used to think writing them over and over was enough, but I realized early on that I could use my imagination to have them stick easier."
    },
        {
        loading: "eager",
        image: require('../../../public/projects-images/japanese-images/Anki Japanese.jpeg'),
        alt: "Anki Japanese",
        description:
            "During lockdown, I started reviewing Anki cards and the Remembering the Kanji 1 book (containing 2200 kanji). I loved the use of mnenomics to affix English words to a character by breaking it down into smaller components, or characters of a made-up story. In 6 months, I recognized over 1500 characters."
    },
        {
        loading: "eager",
        image: require('../../../public/projects-images/japanese-images/Monolingual Transition Japanese.png'),
        alt: "Monolingual Transition Japanese",
        description:
            "I then started the \"monolingual transition\", ditching bilingual (E-J) dictionaries for monolingual (J-J) ones. Again, I was copying sentences I did not understand, and eventually I burned out of vocabulary and took a hiatus."
    },
        {
        loading: "eager",
        image: require('../../../public/projects-images/japanese-images/Onyomi Japanese.jpeg'),
        alt: "Onyomi Japanese",
        description:
            "I also started to focus on kanji readings. My approach was to learn them by reading, where each reading was a themed memory palace where each kanji's English keyword fit in with its theme. This had limited success in language immersion."
    },
        {
        loading: "eager",
        image: require('../../../public/projects-images/japanese-images/Onyomi Game.jpeg'),
        alt: "Onyomi Game",
        description:
            "In college, I programmed a Java game quizzing the onyomi (Chinese readings) of the kanji, taking into account those with many readings. There, my scope of kanji characters to learn has increased from 2200 to 3000 characters."
    },
        {
        loading: "eager",
        image: require('../../../public/projects-images/japanese-images/Today Japanese.jpeg'),
        alt: "Today Japanese",
        description:
            "Today, I am revising basic Japanese grammar with Japanese explanations and I am relearning basic words in Japanese. I am also drawing pictures capturing the meaning/feeling of the target word/phrase for when I hear it in real conversation. I am using the memorization techniques I have learned recently to better recall grammar concepts and kanji with identical components."
    },
];

export default function Japanese() {
    return (
        <main className="japanese">
            <NavBar/>
            <h1 className="text-title">Japanese</h1>
            <div className="about-blurb">
                <p className="text">My parents and teachers pressed hard on my English ability through my childhood, so learning Japanese was only a fantasy (To this day, my parents do not speak Japanese to me.) But, after 8th grade, when I felt confident with my English, I began to learn Japanese. Besides the break I took during college admissions, I have never stopped learning the language. I am proud to present all that I have been doing to improve my Japanese.</p>
            </div>
            <Carosuel items={japaneseItems} />
        </main>
    );

}