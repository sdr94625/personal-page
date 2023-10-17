import Image from 'next/image'
import styles from './page.module.css'
import { LinkButton } from '@/components/link-button/LinkButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Hello, my name is Sam Rasgorshek.</h1>
        <p>I am a senior computer science student at Creighton University. </p>
      </div>
      <div className={styles.buttonBox}>
        <LinkButton label={'Experience'}/>
        <LinkButton label={'Education'}/>
      </div>
    </main>
  )
}
