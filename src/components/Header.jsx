import React from 'react'
// import ActionAreaCard from '../components/Card'
import styles from "./style.module.css"

function Header() {
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Books</h1>
                <button className={styles.white_btn}>
                    LogOut
                </button>
            </nav>
            {/* <ActionAreaCard /> */}
        </div>
    )
}

export default Header