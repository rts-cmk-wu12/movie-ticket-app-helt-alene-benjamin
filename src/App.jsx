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
import { CinemaInfoContext } from './Context'


 function App() {
  let hej = "";
 const [cinemaInfo, setCinemaInfo] = useState({});
  

  return (
    <>
      <CinemaInfoContext.Provider value={[cinemaInfo, setCinemaInfo]} >
   
     <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
    </CinemaInfoContext.Provider>
   
    <Footer></Footer>
    </>
  )
}

export default App
