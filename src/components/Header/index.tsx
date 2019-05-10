import React from 'react';
import { Formik } from 'formik';
import { 
  FormControl, 
  TextField,
  Button,
  //Checkbox,
  //FormControlLabel
} from '@material-ui/core';

import  logoHeader  from '../../assets/imgs/header/logo-header.png';

export default function Header() {
    return <div className='header'>
        <div className="container clear">

            <img src={logoHeader} className="logo" alt="Odonto Now" />

            <ul className="links">
                <li><a href="#">Início</a></li>
                <li><a href="#">Lívros</a></li>
                <li><a href="#">Vídeos</a></li>
                <li><a href="#">Crusos</a></li>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Minha Lista</a></li>
            </ul>
        </div>
    </div>;
}

