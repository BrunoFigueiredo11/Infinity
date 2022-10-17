import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Login() {
    const [open, setOpen] = useState(false);
    let params = useNavigate();

    const handleLogin = async () => {
        setOpen(!open)
        setTimeout(function() {
            params("/home")
            setOpen(false)
        }, 1800)
    }

    return(
        <main id="login">
            <Header />
            <div className="login-content">
                <section className="login-form">
                    <h2>Log in</h2>
                    <form>
                        <p className="login-label-input">E-mail</p>
                        <input type="email" />
                        <p className="login-label-input">Senha</p>
                        <input type="password" />
                    </form>
                    <button onClick={() => handleLogin()}>Entrar</button>
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