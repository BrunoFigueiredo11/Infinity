import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Panel from "../../Components/Panel";
import Table from "../../Components/Table";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Home() {
    const [ mode, setMode ] = useState("sure")
    const [ data, setData ] = useState([])

    useEffect(() => {
        setData(...data, "")
    }, [])
    return(
        <main id="home">
            <Header />
            <Panel mode={mode} setMode={setMode} />
            <div className={ mode === "dark" ? "home-content home-dark" : "home-content home-sure" }>
                <section className="home-table">
                    <Table mode={mode} />
                </section>
            </div>
            <Footer />
        </main>
    )
}
