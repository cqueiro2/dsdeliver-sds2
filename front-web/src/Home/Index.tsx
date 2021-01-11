import React from 'react'
import './styles.css'
import {ReactComponent as MainImage} from './main.svg'
import Footer from '../Footer/index';
import { Link } from 'react-router-dom';








const Home = () => {
    return(
     <>
      <div className="home-container">
        <div className="home-content">
           <div className="home-actions">
               <h1 className="home-title">Faça seu <br/> pedido que entregamos <br/> para você!!!
               </h1>
               <h3 className="home-subtitle">Escolha o seu pedido e em poucos minutos <br/>
                levaremoss na sua porta
                </h3>
                <Link to="/orders" className="home-btn-order">
                 FAZER PEDIDO
                </Link>                
           </div>
           <div className="home-image"></div>
           <MainImage/>
        </div>
       
      </div>
      <Footer/>
     </>
    )
}

export default Home