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
        <div className={styles.bio}>
          <p>
            My name is Sam Rasgorshek. I am a senior Computer Science student at Creighton University. 
            I am currently looking for either a Frontend/Web developer position or a Full Stack developer position.
            Please navigate through my site to learn more about my experience and education, as well as my github page for projects I have completed.
            The code is available in github repository, but please check out a website I created: <a href='https://countrystatfinder.com' target='_blank'><b>countrystatfinder.com</b></a>
          </p>
        </div>
        <Footer />
      </div>
    </main>
  )
}
