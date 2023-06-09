import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';

import Navbar from "../../../components/Navbar/Navbar.js";
import Footer from "../../../components/Footer/Footer.js";

import Circuit from '../../../assets/Circuit.jpg';

import Carousel from '../../../components/Carousel/Carousel.js';

import PreviewItem from '../../../components/Item/PreviewItem/PreviewItem.js';
import PreviewItemList from '../../../components/Item/PreviewItem/PreviewItemList.js';


function Main() {


  return (
  <div className={styles.container}>
    {/*className={styles.section}*/}
    <section id={styles.navbar}><Navbar/></section>
    <section className={styles.section} id={styles.headCaption}>
      <div className={styles.content}>
        <p className={styles.heading}>Awakening</p>
        <p className={styles.sideText}>Opening our eyes to a world we never knew existed.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={Circuit} alt="Your Image Description"/>
      </div>
    </section>
    {/*
    <section className={styles.section} id={styles.whatWeAreAbout}></section>
    <section className={styles.section} id={styles.products}><Carousel component={<PreviewItem />} theList={PreviewItemList}/></section>
  */}
    <section id={styles.footer}><Footer/></section>
  </div>
  );
}

export default Main;