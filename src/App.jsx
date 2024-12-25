import { useState } from 'react'
import '../public/css/bootstrap.min.css'
import '../public/css/estilos.css'

import Header from './components/Header'
import Banner from './components/Banner'
import Productos from './components/Productos'
import Footer from './components/Footer'
import Nosotros from './components/Nosotros'
import Pastillas from './components/Pastillas'
import Envios from './components/Envio'

function App() {

  return (
    <>
    <div class="logo-wsp">
      <a href="https://api.whatsapp.com/send?phone=3518011125" target="_blank">
        <img src="./wspp.png" alt="WhatsApp"/>
      </a>
    </div>
    <Header></Header>
    <Banner></Banner>
    <Envios></Envios>
    <Productos></Productos>
    <Pastillas></Pastillas>
    <Nosotros></Nosotros>
    <Footer></Footer>
    </>
  )
}

export default App
