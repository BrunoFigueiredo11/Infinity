import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Content from "../../Contents/welcome.json";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import "./style.css";

export default function Welcome() {
    const [ open, setOpen ] = useState(false)
    let params = useNavigate();

    const handleInitApplication = async () => {
        setOpen(true)
        setTimeout(function() {
            setOpen(false)
            params("/home")
        }, 1500)
    }
      
    return(
        <main id="welcome">
            <Header />
            <article className="welcome-section">
                <div className="welcome-content">
                    <h2>{Content.title}</h2>
                    <p>{Content.content}</p>
                    <section className="welcome-init">
                        <button className="welcome-right-button" onClick={() => handleInitApplication("login")}>
                            Começar
                        </button>
                    </section>
                </div>
            </article>
            <Footer />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Footer />
        </main>
    )
}
