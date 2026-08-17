"use client";

import { useEffect } from "react";
import Image from "next/image";
import NavBar from "../components/navbar";


export default function Home() {

    useEffect(() => {
        const me = document.querySelector(".me");
        const quoteBubble = document.getElementById("quote");
        const okButton = document.getElementById("ok");

        if (!me || !quoteBubble || !okButton) {
            return;
        }

        function quoteShow() {
            quoteBubble.classList.add("visible");
        }

        function meDisappear() {
            me.classList.add("disappearing");
        }

        function quoteDisappear() {
            quoteBubble.classList.add("disappearing");
        }

        function handleAnimationEnd(event) {
            if (event.animationName === "spin-and-fall") {
                quoteShow();
            }
        }

        me.addEventListener("animationend", handleAnimationEnd);
        okButton.addEventListener("click", meDisappear);
        okButton.addEventListener("click", quoteDisappear);

        // Cleanup when the component is removed
        return () => {
            me.removeEventListener("animationend", handleAnimationEnd);
            okButton.removeEventListener("click", meDisappear);
            okButton.removeEventListener("click", quoteDisappear);
        };
    }, []);

    return (
        <main>
            <NavBar />

            <div className="homepage">
                <div className="intro">

                    <image
                        className="me"
                        src="/profile.jpeg"
                        alt="It's me"
                        loading="eager"
                        width={200}
                        height={200}
                    />

                    <div id="quote" className="quote">
                        <p>
                            Hi, I am <b>Kai DeVito</b>. This is my portfolio.
                            Feel free to explore!
                        </p>

                        <button id="ok">
                            OK, I will!
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}