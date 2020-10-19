import Head from 'next/head';
import Link from "next/link";
import Layout from './components/layout';
import { gsap } from "gsap";
import React, { useState, useEffect, useRef } from 'react';


const Home = () => {
  const grid0 = useRef(0);
  const grid1 = useRef(0);
  const grid2 = useRef(0);

  useEffect(() => {
    gsap.to(grid0.current, { duration: 0.377, opacity: 1, ease:"expo"})
    gsap.to(grid1.current, { duration: 0.557, opacity: 1, ease:"expo"})
    gsap.to(grid2.current, { duration: 0.877, opacity: 1, ease:"expo"})
  }, []); // crap requirement for hooks


  return (
    <Layout>
      <Head>
        <title>nidai studios</title>
      </Head>
      <section className="row">

        <a ref={grid0} href="https://nidnogg.github.io/mood-drone/" className="column">
          <img className="line-square" src="./assets/main/top0.png" alt="mood drone"/>
        </a>

        <a ref={grid1} href="https://papuracadernos.com/" className="column">
          <img className="line-square" src="./assets/main/top1.png" alt="papura"/>
        </a>

        <a ref={grid2} href="https://appliedbio.com.br/" className="column">
          <img className="line-square" src="./assets/main/top2.png" alt="appliedBio"/>
        </a>
        


      </section>
    </Layout>
  );
}

export default Home;