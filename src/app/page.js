'use client'
import styles from './page.module.css'
import { useState } from "react";
import StyleSlider from './StyleSlider.js'
import Grid from './Grid'


export default function Home() {
    const [mode, setMode] = useState('Grid')
    const [gender, setGender] = useState('masc')

    const switchView = (view) => {
        setMode(view)
    }

    const switchGender = (gender) => {
        setGender(gender)
    }

    const SliderText = () => {
        return (
        <>
        <p>Toggle between gender styles below:</p>
        <div className={styles.gender}>
            <button onClick={() => switchGender('masc')} style={gender == 'masc' ? { backgroundColor: 'var(--heading-color)', color: 'white' } : {}}>masc</button>
            <button onClick={() => switchGender('them')} style={gender == 'them' ? { backgroundColor: 'var(--heading-color)', color: 'white' } : {}}>them</button>
            <button onClick={() => switchGender('femme')} style={gender == 'femme' ? { backgroundColor: 'var(--heading-color)', color: 'white' } : {}}>femme</button>
            </div>
        </>)
    }

  return (
    <>
        <div className={styles.main}>
            <div className={styles.header}>
            <h2>Steal the Show</h2>
            <div className={styles.buttons}>
                <button onClick={() => switchView('Grid')} style={mode == 'Grid' ? { backgroundColor: 'var(--heading-color)', color: 'white' } : {}}>Browse for inspo</button>
                <button onClick={() => switchView('Slider')} style={mode == 'Slider' ? { backgroundColor: 'var(--heading-color)', color: 'white' } : {}}>Extravaganza Scale</button>
            </div>
            {mode == 'Slider' ? SliderText() : (<p>Scroll through to browse our lookbook</p>)}
            </div>
            {mode == 'Slider' ? <StyleSlider gender={gender} /> : <Grid />}
        </div>
    </>
  )
}