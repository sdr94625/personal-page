import Link from 'next/link'
import styles from './page.module.css'
import ClassBox from '@/components/education/ClassBox'
import Footer from '@/components/footer/Footer'

export default function Home() {

    return(
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>Relevant Coursework</h1>
            </div>
            <div className={styles.classes}>
                <ClassBox courseName='Software Engineering' />
                <ClassBox courseName='Algorithms & Analysis' />
                <ClassBox courseName='Programming Languages' />
                <ClassBox courseName='Database Design' />
                <ClassBox courseName='Data Structures' />
                <ClassBox courseName='Mobile App Dev.' />
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