import Image from 'next/image'
import styles from './page.module.css'
import { LinkButton } from '@/components/link-button/LinkButton'
import GithubButton from '@/components/link-button/GithubButton'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <div className={styles.buttonBox}>
          <LinkButton route={'/experience'}buttonType={'experience'} label={'Experience'}/>
          <LinkButton route={'/education'} buttonType={'education'}label={'Education'}/>
          <GithubButton />
        </div>
        <Footer />
      </div>
    </main>
  )
}
