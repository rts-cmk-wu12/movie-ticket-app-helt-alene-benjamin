import {  Suspense, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  useRoutes
} from 'react-router-dom'
import routes from '~react-pages'
import NavBar from './components/navBar'
import "./styles/style.scss"
import Footer from './components/Footer'
import fetcher from './functions/fetch'

 function App() {
  let hej = "";
 

  return (
    <>
    <NavBar></NavBar>
    <main>
     <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
