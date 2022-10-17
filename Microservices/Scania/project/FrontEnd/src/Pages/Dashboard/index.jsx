import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Panel from "../../Components/Panel";
import Item from "../../Components/Items";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Dashboard() {
    let location = useLocation()

    const handleItemLink = async () => {
        window.location.href = location.state.link
    }

    useEffect(() => {
        console.log(location.state)
    }, [])
    return(
        <main id="dashboard">
            <Header />
            <Panel />
            <div className="dashboard-content">
                <section className="dashboard-card-section">
                    	<article className="dashboard-card">
                            <h2>Página de detalhamento</h2>
                            <section className="card-content">
                                <section className="card-left">
                                    <p><b>Edital: </b>{location.state.edital}</p>
                                    <p><b>Orgão: </b>{location.state.organ}</p>
                                    <p><b>Data de Acolhimento: </b>{location.state.date_reception}</p>
                                    <p><b>Data de Disputa: </b>{location.state.date_dispute}</p>
                                    <p><b>Descrição: </b>{location.state.description}</p>
                                </section>
                                <section className="card-right">
                                    <p><b>Status: </b>{location.state.status}</p>
                                    <button onClick={() => handleItemLink()}>Link de licitação</button>
                                    <p><b>Valor de Referência: R$ </b>{location.state.value}</p>
                                </section>
                            </section>
                        </article>
                        <article className="dashboard-buttons">
                            <button className="button-green">Participar</button>
                            <button className="button-red">Descartar</button>
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
