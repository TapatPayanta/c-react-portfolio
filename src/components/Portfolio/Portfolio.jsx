import React from 'react'
import styles from './portfolio.module.css'
import Title from 'react-parallax-tilt'

function Portfolio() {
    return (
        <div className={styles.port_con}>

            <h3 className={styles.port_title}>Portfolio</h3>

            <div className={styles.port_list}>

                <div className={styles.port_items}>
                    <Title><img src="https://images.unsplash.com/photo-1517134062979-e1234be8a085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" /></Title>
                    <p>Project Title</p>
                </div>

                <div className={styles.port_items}>
                    <Title><img src="https://images.unsplash.com/photo-1517134062979-e1234be8a085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" /></Title>
                    <p>Project Title</p>
                </div>

                <div className={styles.port_items}>
                    <Title><img src="https://images.unsplash.com/photo-1517134062979-e1234be8a085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" /></Title>
                    <p>Project Title</p>
                </div>

                <div className={styles.port_items}>
                    <Title><img src="https://images.unsplash.com/photo-1517134062979-e1234be8a085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" /></Title>
                    <p>Project Title</p>
                </div>

                <div className={styles.port_items}>
                    <Title><img src="https://images.unsplash.com/photo-1517134062979-e1234be8a085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" /></Title>
                    <p>Project Title</p>
                </div>

                <div className={styles.port_items}>
                    <Title><img src="https://images.unsplash.com/photo-1517134062979-e1234be8a085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" /></Title>
                    <p>Project Title</p>
                </div>

            </div>

        </div>
    )
}

export default Portfolio
