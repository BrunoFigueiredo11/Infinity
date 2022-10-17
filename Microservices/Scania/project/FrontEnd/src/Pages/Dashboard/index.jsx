import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Item from "../../Components/Items";
import Footer from "../../Components/Footer";

import "./style.css";
import api from "../../Services/api";

export default function Dashboard() {
    let navigate = useNavigate()
    let location = useLocation()

    const handleItemLink = async () => {
        window.location.href = location.state.edital_link
    }

    const handleParticipate = async () => {
        api.put(`/licitacao/${location.state.cd_licitacao}/1`).then((response) => {
            console.log(response.data);
        })
        navigate('/home')
    }

    const handleDescarte = async () => {
        api.put(`/licitacao/${location.state.cd_licitacao}/3`).then((response) => {
            console.log(response.data);
        })
        navigate('/home')
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
        </main>
    )
}
