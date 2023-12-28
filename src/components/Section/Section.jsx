import React from "react";
import styles from "./Section.module.css";
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Tooltip, Chip } from "@mui/material"; 
import Card from "../Card/Card.jsx";


export default function Section({title,data,type}){
    const [carouselToggle,setcarouselToggle] = useState(false);

    const handleToggle = () =>{
        setcarouselToggle((prevState) => !prevState);
    }

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All ": "Show All"}</h4>
            </div>
            
            {data.length ==0 ? (
                <p>No data available</p>
            ):(
                < div className={styles.cardWraper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {data.map((ele)=>(
                                <Card key={ele.id} data={ele} type={type} />
                            ))}
                            </div>
                    ):(
                        //carousel
                        null
                    )}
                    </div>
            )}
        </div>
    )
}