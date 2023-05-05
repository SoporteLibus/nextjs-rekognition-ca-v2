"use client"
import styles from '@/styles/page.module.css'
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

export default function FaceRegister() {
  // Referencia utilizada para el elemento Webcam
  const webcamRef = useRef<Webcam>(null)
  const [data, setData] = useState(null)
  const [legajo, setLegajo] = useState("")
  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    const imgBase64 = webcamRef.current?.getScreenshot()
    fetch('/api/index-face', {
      method: "POST",
      body: JSON.stringify({ docket: legajo, imageSrc: imgBase64 }),
    })
      .then((resp) => resp.json() )
      .then((data) => { 
        setData(data)
     })
  }

  return (
    <main className={styles.main}>
      {data ? JSON.stringify(data) : 'Data is empty'}
      <form onSubmit={sendForm}>
        <input type="text" value={legajo} onChange={e => setLegajo(e.target.value)}
          placeholder='N° de legajo' required />
        <button type='submit' >Registrar</button>
      </form>
      <>
    {/* Elemento de lectura de video */}
    <Webcam
      ref={webcamRef}
      mirrored={false}
      screenshotFormat="image/jpeg"
      style={{ width: "100%", height: "100%" }}
      />
    </>
    </main>
  )
}