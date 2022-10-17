import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Content from "../../Contents/welcome.json";

import "./style.css";

export default function Welcome() {
    let params = useNavigate();

    const handleInitApplication = async (result) => {
        if (result === "registration") {
            params("/registration")
        } else {
            params("/login")
        }
    }
      
    return(
        <main id="welcome">
            <Header />
            <article className="welcome-section">
                <div className="welcome-content">
                    <h2>{Content.title}</h2>
                    <p>{Content.content}</p>
                    <section className="welcome-init">
                        <button className="welcome-left-button" onClick={() => handleInitApplication("registration")}>
                            {Content.registration}
                        </button>
                        <button className="welcome-right-button" onClick={() => handleInitApplication("login")}>
                            {Content.login}
                        </button>
                    </section>
                </div>
            </article>
            <Footer />
        </main>
    )
}
