import Link from "next/link"
import styles from './page.module.css'
import { LeidosBox } from "@/components/experience/LeidosBox"
import DRTBox from "@/components/experience/DRTBox"
import Footer from "@/components/footer/Footer"

export default function Home(){

    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>Relevant Software Experience</h1>
            </div>
            <div className={styles.infoBox}>
                <LeidosBox />
                <DRTBox />
            </div>
            
            <Link href={'..'}>
                <div className={styles.backButton}>
                    <p>Back</p>
                </div>
            </Link>
            <Footer />
        </main>
    )
}