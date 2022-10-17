import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Registration() {
    const [open, setOpen] = useState(false);
    let params = useNavigate();
    
    const handleRegistration = async () => {
        setOpen(!open)
        setTimeout(function() {
            setOpen(false)
            params("/login")
        }, 1800)
    }

    return(
        <main id="registration">
            <Header />
            <div className="registration-content">
                <section className="registration-form">
                    <h2>Cadastro</h2>
                    <form>
                        <p className="registration-label-input">E-mail</p>
                        <input type="email" />
                        <p className="registration-label-input">Crie uma nova senha</p>
                        <input type="password" />
                        <p className="registration-label-input">Token</p>
                        <input type="number" />
                    </form>
                    <button onClick={() => handleRegistration()}>Entrar</button>
                </section>
            </div>
            <Footer />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </main>
    )
}