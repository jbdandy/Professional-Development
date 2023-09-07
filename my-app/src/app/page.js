import Image from 'next/image'
import styles from './page.module.css'

//https://react.dev/learn/tutorial-tic-tac-toe

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Jeremy Dandy</h1>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <img
              src="https://images.pexels.com/photos/2607423/pexels-photo-2607423.jpeg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>


{/* either use CSS or grid  */}
      <p>Hello, my name is Jeremy, im struggling to become a developer!</p>

      <div style={{ display: 'flex', direction: 'column' }}>
        <div style={{ display: 'flex', direction: 'row' }}>
          <button className="square">X</button>
          <button className="square">X</button>
          <button className="square">X</button>
        </div>
        <div style={{ display: 'flex', direction: 'row' }}>
          <button className="square">X</button>
          <button className="square">X</button>
          <button className="square">X</button>
        </div>
        <div style={{ display: 'flex', direction: 'row' }}>
          <button className="square">X</button>
          <button className="square">X</button>
          <button className="square">X</button>
        </div>

      </div>
    </main>
  )
}
