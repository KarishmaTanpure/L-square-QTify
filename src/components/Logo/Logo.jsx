import React from "react";
import LogoImage from '../../assets/Logo.png';
import styles from './Logo.module.css';

export default function Logo(){
    return <img src={LogoImage} alt="logo" className={styles.logo} />;
   
}