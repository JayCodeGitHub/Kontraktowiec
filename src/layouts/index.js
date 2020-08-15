import React from "react";
import Header from '../components/Header/Header'
import GlobalStyle from '../assets/styles/globalStyles'
import { Helmet } from "react-helmet"
import Fotter from "../components/Fotter/Fotter"



const MainLayout = ({ children }) => (
    <>
        <Helmet>
            <title>Kontraktowiec.pl</title>
        </Helmet>
        <GlobalStyle/>
        <Header/>
        {children}
        <Fotter/>
    </>   
)

export default MainLayout