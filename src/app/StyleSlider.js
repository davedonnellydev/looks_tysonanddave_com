'use client'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './page.module.css'
import { useState } from 'react';

export default function StyleSlider(props) {
    const [sliderValue, setSliderValue] = useState(20)

    const sliderImagesMasc = {
        0: '/assets/outer_scale/masc0.jpg',
        20: '/img/masc1.jpeg',
        40: '/img/masc2.jpeg',
        60: '/img/masc3.jpeg',
        80: '/img/masc4.jpeg',
        100: '/assets/outer_scale/masc5.jpeg'
    }

    const sliderImagesThem = {
        0: '/assets/outer_scale/them0.jpeg',
        20: '/img/them1.jpg',
        40: '/img/them2.jpg',
        60: '/img/them3.jpg',
        80: '/img/them4.jpg',
        100: '/assets/outer_scale/them5.jpg',
    }

    const sliderImagesFemme = {
        0: '/assets/outer_scale/femme0.jpeg',
        20: '/img/femme1.jpeg',
        40: '/img/femme2.jpg',
        60: '/img/femme3.jpeg',
        80: '/img/femme4.jpeg',
        100: '/assets/outer_scale/femme5.jpeg',
    }

    const changeImage = (value) => {
        setSliderValue(value)
    }

    const labelStyleInner = {
        'color': 'white',
        'font-weight': '800',
        'font-size': '1rem',
        'font-family': 'var(--section-font-family)'
    }

    const labelStyleExtreme = {
        'color': 'red',
        'font-weight': '800',
        'font-size': '1rem',
        'font-family': 'var(--section-font-family)'
    }

    return(
        <div className={styles.slider}>
        <Slider min={0}
        max={100}
        defaultValue={20}
        marks={
            {
                0: { label: <span>Not<br/>Enough</span>, style: labelStyleExtreme},
                20: { label: '😊', style: labelStyleInner},
                40: { label: '🤩', style: labelStyleInner},
                60: { label: '✨', style: labelStyleInner},
                80: { label: '🌈', style: labelStyleInner},
                100: { label: <span>Too<br/>Much</span>, style: labelStyleExtreme}
            }
        }
        step={null}
        railStyle={{ backgroundColor: 'var(--heading-color)'}}
        trackStyle={(sliderValue == 0 || sliderValue == 100) ? { background: 'red' } : { background: 'var(--gold-gradient-light)' }}
        dotStyle={{ backgroundColor: 'var(--heading-color)', borderColor: 'var(--heading-color)' }}
        activeDotStyle={(sliderValue == 0 || sliderValue == 100) ? {borderColor: 'red', backgroundColor: 'red'} : {backgroundColor: 'var(--section-color)', borderColor: 'var(--section-color)'}}
        handleStyle={(sliderValue == 0 || sliderValue == 100) ? {borderColor: 'red', backgroundColor: 'red'} : {backgroundColor: 'var(--section-color)', borderColor: 'var(--section-color)' }}
        keyboard={true}
        onChange={(value) => changeImage(value)}
        />
        <div className={styles.sliderImage}>
            {props.gender == 'masc' ? <img src={sliderImagesMasc[sliderValue]}/> : ''}
            {props.gender == 'them' ? <img src={sliderImagesThem[sliderValue]}/> : ''}
            {props.gender == 'femme' ? <img src={sliderImagesFemme[sliderValue]}/> : ''}
        </div>
      </div>
    )
}