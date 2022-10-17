import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Item from "../../Components/Items";
import Footer from "../../Components/Footer";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import "./style.css";
import api from "../../Services/api";

export default function Dashboard() {
    const [ open, setOpen ] = useState(false)
    let navigate = useNavigate()
    let location = useLocation()

    const handleItemLink = async () => {
        window.location.href = location.state.edital_link
    }

    const handleParticipate = async () => {
        setOpen(true)
        api.put(`/licitacao/${location.state.cd_licitacao}/1`).then((response) => {
            setTimeout(function() {
                navigate('/home')
                setOpen(false)
            }, 500)
        })
    }

    const handleDescarte = async () => {
        setOpen(true)
        api.put(`/licitacao/${location.state.cd_licitacao}/3`).then((response) => {
            console.log(response)
            setTimeout(function() {
                navigate('/home')
                setOpen(false)
            }, 500)
        })
    }

    useEffect(() => {
        console.log(location.state)
    }, [])
    return(
        <main id="dashboard">
            <Header />
            <div className="dashboard-container">
                <section className="dashboard-card-section">
                    	<article className="dashboard-card">
                            <h2>Página de detalhamento</h2>
                            <section className="card-content">
                                <section className="card-left">
                                    <p><b>Edital: </b>{location.state.cd_edital}</p>
                                    <p><b>Orgão: </b>{location.state.orgao}</p>
                                    <p><b>Data de Acolhimento: </b>{location.state.dt_acolhimento}</p>
                                    <p><b>Data de Disputa: </b>{location.state.dt_disputa}</p>
                                    <p><b>Descrição: </b>{location.state.texto}</p>
                                </section>
                                <section className="card-right">
                                    <p><b>Status: </b>{location.state.tipo}</p>
                                    <button onClick={() => handleItemLink()}>Link de licitação</button>
                                </section>
                            </section>
                        </article>
                        <article className="dashboard-buttons">
                            <button onClick={() => handleParticipate()} className="button-green">Participar</button>
                            <button onClick={() => handleDescarte()} className="button-red">Descartar</button>
                        </article>
                </section>
                <section className="dashboard-items">
                    <Item data={location.state} />
                </section>
            </div>
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
