import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={styles.testi_con}>

            <h3 className={styles.testi_title}>Testimonials</h3>

            <div className={styles.testi_list}>

                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio recusandae unde iure nesciunt similique incidunt doloremque nisi. Nemo soluta voluptates inventore culpa quis odit corrupti, illo quaerat doloribus in!</p>
                    <img src="https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>

                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio recusandae unde iure nesciunt similique incidunt doloremque nisi. Nemo soluta voluptates inventore culpa quis odit corrupti, illo quaerat doloribus in!</p>
                    <img src="https://plus.unsplash.com/premium_photo-1679692887717-dc7f5d090271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8fDA%3D" alt="" />
                    <h4>Jone Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>

                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio recusandae unde iure nesciunt similique incidunt doloremque nisi. Nemo soluta voluptates inventore culpa quis odit corrupti, illo quaerat doloribus in!</p>
                    <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>Joe Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
