"use client";

import NavBar from "../../components/navbar";

export default function Contact() {

    return (
        <div>
            <NavBar />
            <h1 className="text-title">Contact Me Here!</h1>
            <main className="contact">
                <div className="text">
                    <p>Email: krd55610@uga.edu</p>
                    <p>Handshake: ???</p>
                </div>

                <section>
                    <form
                        className="one-col"
                        method="POST"
                        action="https://formsubmit.co/krd55610@uga.edu"
                    >
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            required
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="email address"
                            required
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="message"
                        />

                        <input
                            className="send-button"
                            type="submit"
                            value="Send"
                        />
                    </form>
                </section>
            </main>
        </div>
    );
}