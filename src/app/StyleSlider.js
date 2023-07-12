'use client'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './page.module.css'
import { useState } from 'react';

export default function StyleSlider() {
    const [sliderValue, setSliderValue] = useState(20)

    const sliderImages = {
        0: '/img/b978dbb489957487c91df56333aafe83.jpg',
        10: '/img/1b5bda63c673ca3a93f9cc685e4df9c1.jpg',
        20: '/img/2ae0638febc7c3e26d5783d399dffd3a.jpg',
        30: '/img/7a2a3827cf541ce8726039ecfaab2d9f.jpg',
        40: '/img/509efe0dc2d826834aa7864925420f23.jpg',
        50: '/img/997ebd26da67aeaaa06b92bc8c902180.jpg',
        60: '/img/7266bde20eee2e3e4485ea90f232fae6.jpg',
        70: '/img/ae4ff62ba5f9d5d77f27170f6fbcadb3.jpg',
        80: '/img/c2f83923272d6580c9bbad3132b12873.jpg',
        90: '/img/c56ed60bac2c49c4306ff0cca8d376ea.jpg',
        100: '/img/c4e9d1772f3657c02b9f41e139342a47.jpg'
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
        defaultValue={50}
        marks={
            {
                0: { label: 'Too little', style: labelStyleExtreme},
                10: { label: '10%', style: labelStyleInner},
                20: { label: '20%', style: labelStyleInner},
                30: { label: '30%', style: labelStyleInner},
                40: { label: '40%', style: labelStyleInner},
                50: { label: '50%', style: labelStyleInner},
                60: { label: '60%', style: labelStyleInner},
                70: { label: '70%', style: labelStyleInner},
                80: { label: '✨', style: labelStyleInner},
                90: { label: '🌈', style: labelStyleInner},
                100: { label: 'Too much', style: labelStyleExtreme}
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
            <img src={sliderImages[sliderValue]}/>
        </div>
      </div>
    )
}