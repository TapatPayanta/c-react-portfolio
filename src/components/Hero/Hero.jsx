import React from 'react'
import styles from './Hero.module.css'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'

function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>

                <div className={styles.hero_con}>

                    <div className={styles.hero_info}>

                        <p className={styles.text_1}>Hi, I'm</p>
                        <h3 className={styles.text_2}>Tapat Payanta</h3>

                        <p className={styles.text_3}>
                            <span style={{ marginRight: '10px' }}>I'm a</span>
                            <TypeAnimation
                                sequence={[
                                    'Front-end Developer From Thailand',
                                    1000,
                                    'Web Developer From Thailand',
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>

                        <p className={styles.text_4}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quam dolore laborum omnis natus distinctio praesentium, ab magni laboriosam! Cumque ex suscipit rerum animi eum illum ullam dicta maxime veritatis!</p>

                        <ul className={styles.hero_social}>
                            <div className={styles.button}>
                                <a href="#">About me</a>
                            </div>
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><FaGithub /></a></li>
                            <li><a href="#"><FaLinkedinIn /></a></li>
                        </ul>

                    </div>

                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.hero_img}><img src="https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg" alt="" /></div>
                    </Tilt>

                </div>

            </div>
        </div>
    )
}

export default Hero
