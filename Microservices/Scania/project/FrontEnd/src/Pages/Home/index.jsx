import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Table from "../../Components/Table";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Home() {

    return(
        <main id="home">
            <Header />
            <div className="home-content">
                <section className="home-table">
                    <Table />
                </section>
            </div>
            <Footer />
        </main>
    )
}
