'use client'
import styles from './page.module.css'
import { useState } from "react";
import StyleSlider from './StyleSlider.js'
import Grid from './Grid'


export default function Home() {
    const [mode, setMode] = useState('Slider')

    const switchView = (view) => {
        setMode(view)
    }

  return (
    <>
        <div className={styles.main}>
            <div className={styles.header}>
            <h2>Style</h2>
            <button onClick={() => switchView('Grid')}>Browse for inspo</button>
            <button onClick={() => switchView('Slider')}>Scale of Extravaganza</button>
            <p>Welcome to the jungle</p>
            </div>
            {mode == 'Slider' ? <StyleSlider /> : <Grid />}
        </div>
    </>
  )
}
