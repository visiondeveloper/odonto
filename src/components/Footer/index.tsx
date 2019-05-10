import React from 'react';
import { Formik } from 'formik';
import { 
  FormControl, 
  TextField,
  Button,
  //Checkbox,
  //FormControlLabel
} from '@material-ui/core';

/*IMAGENS
**/
import  logoAgency  from '../../assets/imgs/footer/logo-agency.png';
import  logoFooter  from '../../assets/imgs/footer/logo-footer.png';
import  icoFacebook  from '../../assets/imgs/footer/facebook-footer-icon.png';
import  icoInstagram  from '../../assets/imgs/footer/instagram-footer-icon.png';
import  icoYoutube  from '../../assets/imgs/footer/youtube-footer-icon.png';
import  icoGoogle  from '../../assets/imgs/footer/google-footer-icon.png';

export default function Footer() {
    return <div>
        <div className='footer'>

                      <div className="menu clear">
                      
                      <img src={logoFooter} alt="Odonto Now" />
 
                        <div className="footer-info">
                            <ul className="menu">
                                <li><a href="#"><img src={icoFacebook} /></a></li>
                                <li><a href="#"><img src={icoInstagram} /></a></li>
                                <li><a href="#"><img src={icoYoutube} /></a></li>
                                <li><a href="#"><img src={icoGoogle} /></a></li>
                            </ul>

                            <ul className="links">
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Lívros</a></li>
                            <li><a href="#">Vídeos</a></li>
                            <li><a href="#">Crusos</a></li>
                            <li><a href="#">Novidades</a></li>
                            <li><a href="#">Minha Lista</a></li>
                            <li><a href="#">Privacidade</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Central de Ajuda</a></li>
                            <li><a href="#">Fale Conosco</a></li>

                            </ul>
                        </div>

                      </div>  
                  
                        



                <div className="copy clear">
                    <div className="content">
                        <p className="info">2018 Odono Now - Todos os direitos reservados</p>
                        <p className="by">Desenvolvido por <a href="#">
                            <img src={logoAgency} alt="Agência" /></a>
                        </p>
                    </div>
                </div>
        </div>
    </div>;
}

