import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {

    return(
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>Relevant Coursework</h1>
            </div>

            <Link href={'..'}>
                <div className={styles.backButton}>
                    <p>Back</p>
                </div>
            </Link>
        </main>
        
    )
}