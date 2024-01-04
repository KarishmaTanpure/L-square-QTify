import React, { useEffect } from "react";
import styles from "./Section.module.css";
import { useState } from 'react';
import { Tooltip, Chip } from "@mui/material"; 
import Card from "../Card/Card.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Filters from "../Filters/Filters.jsx"


export default function Section({title,data,filterSource,type}){
    const [carouselToggle,setcarouselToggle] = useState(true);
    const [filters,setFilters] = useState([{key:"all",label:"All"}])
    const [selectedFilterIndex,setselectedFilterIndex] = useState(0);

    const handleToggle = () =>{
        setcarouselToggle((prevState) => !prevState);
    }

    useEffect(() => {
        if(filterSource){
            filterSource().then((response) => {
                const {data} = response;
                setFilters([...filters,...data]);
            })
        }

    },[]);

    const showFilters = filters.length > 1;
    const cardsToRender = data.filter((card) => 
        showFilters && selectedFilterIndex!==0 ? card.genre.key === filters[selectedFilterIndex].key : card
        );

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All ": "Show All"}</h4>
            </div>
            {
                showFilters && (
                    <div className={styles.filterWrapper}>
                        <Filters
                        filters={filters}
                        selectedFilterIndex={selectedFilterIndex}
                        setselectedFilterIndex={setselectedFilterIndex}
                        />
                        </div>
                )
            }
            
            {data.length ==0 ? (
                <p>No data available</p>
            ):(
                < div className={styles.cardWraper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele)=>(
                                <Card key={ele.id} data={ele} type={type} />
                            ))}
                            </div>
                    ):(
                        <Carousel
                        data={cardsToRender}
                        renderComponent={(data) => <Card data={data} type={type}/>} 
                    />)}
                    </div>
            )}
        </div>
    )
}