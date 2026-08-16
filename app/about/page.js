"use client";

import Image from "next/image";
import skytree from "../../public/about-images/Skytree.jpeg";
import my_life from "../../public/about-images/My_Life.jpeg";
import NavBar from "../../components/navbar";


export default function About() {

    return (
        <div>
            <NavBar />
            <main>
                <h1 className="text-title">Who is Kai DeVito?</h1>
                <div className="about-blurb">
                    <p className="text">
                        I am a senior at the University of Georgia in the College of Engineering. My major is in Computer Systems Engineering with a minor in Computer Science. I was inducted in the Morehead Honors College in 2023 and inducted into the Tau Beta Pi Engineering Honor Society in 2025. I am scheduled to graduate in 2027, afterwards I start my graduate research into microscale robotics that mimic wildlife to improve the precision and reliability of various molecule detection sensors to improve the lifespans of people... maybe.
                    </p>
                    <Image src={skytree} alt="Skytree" loading="eager"/>
                </div>

                <h1 className="text-title">My Life</h1>
                <div className="about-blurb">
                    <p className="text">
                        I am a Japanese-American born to parents of Eastern and Western cultures. I was born in Honolulu, Hawaii in 2005 and moved to Georgia a year later. I struggled to communicate in my native language, English, although I could read and spell. Through preschool and elementary school, my teachers helped me develop my speech and reading comprehension, which made it easier to make friends.<br></br><br></br>When I got accepted into the Magnet Program, I started to learn Japanese through language acquisition, but devoted my time into reading and writing kanji (漢字) characters. After months of studying for the SAT (I got a 790 on the Math section and I will brag about it forever), I researched how the brain retains new material, and learn academic subjects and skills.<br></br><br></br>While I focus on completing my undergraduate program, I continue to teach myself Japanese, programming, and drawing while training myself on memorization techniques for fun.
                    </p>
                    <Image src={my_life} alt="selfie" loading="eager"/>
                </div>
                
                <h1 className="text-title">Honors and Awards</h1>
                <div className="about-blurb">
                    <dl className="text">
                        <dt>&#9733; <b>Norfolk Southern Engineering Scholarship</b></dt>
                            <dd>2026-</dd>
                        <dt>&#9733; <b>Tau Beta Pi Engineering Honor Society</b></dt>
                            <dd>2025-</dd>
                        <dt>&#9733; <b>College of Engineering (formerly Intradiem) Scholarship</b></dt>
                            <dd>2024-2026</dd>
                        <dt>&#9733; <b>Presidential Scholar</b></dt>
                            <dd>2023-2024, Fall 2025</dd>
                        <dt>&#9733; <b>Zell Miller Scholarship</b></dt>
                            <dd>2023-</dd>
                        <dt>&#9733; <b>Hagan Scholarship</b></dt>
                            <dd>2023-</dd>
                    </dl>
                </div>
            </main>
        </div>
    );
}

//className="text"