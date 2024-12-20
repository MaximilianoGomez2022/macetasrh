import { useState } from 'react'
import '../public/css/bootstrap.min.css'
import '../public/css/estilos.css'

import Header from './components/Header'
import Banner from './components/Banner'
import Productos from './components/Productos'
import Footer from './components/Footer'
import Nosotros from './components/Nosotros'
import Pastillas from './components/Pastillas'

function App() {

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Productos></Productos>
    <Pastillas></Pastillas>
    <Nosotros></Nosotros>
    <Footer></Footer>
    </>
  )
}

export default App
