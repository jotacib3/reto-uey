import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'

function Home() {
  return (
    <main className={styles.main}>
      <h1>Bienvenido al Reto</h1>
      <p>
      Para que halla paz y equilibrio en la humanidad, solo un candidato debe aprobar el reto.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Demuéstrale a thanos que eres digno
        </p>
      </div>
    </main>
  )
}

export default Home
