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
        <p className='gender'><a className='genderToggle' onClick={() => switchGender('masc')} style={gender == 'masc' ? { fontStyle: 'italic' } : {}}>masc</a> | <a onClick={() => switchGender('them')} style={gender == 'them' ? { fontStyle: 'italic' } : {}}>them</a> | <a onClick={() => switchGender('femme')} style={gender == 'femme' ? { fontStyle: 'italic' } : {}}>femme</a></p>
        </>)
    }

  return (
    <>
        <div className={styles.main}>
            <div className={styles.header}>
            <h2>Gilded Glamour Extravaganza</h2>
            <div className={styles.buttons}>
                <button onClick={() => switchView('Grid')} style={mode == 'Grid' ? { backgroundColor: 'var(--heading-color)', color: 'white' } : {}}>Browse for inspo</button>
                <button onClick={() => switchView('Slider')} style={mode == 'Slider' ? { backgroundColor: 'var(--heading-color)', color: 'white' } : {}}>Extravaganza Scale</button>
            </div>
            {mode == 'Slider' ? SliderText() : (<p>Scroll through to browse our lookbook</p>)}
            </div>
            {mode == 'Slider' ? <StyleSlider gender={gender}/> : <Grid />}
        </div>
    </>
  )
}
