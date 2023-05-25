import style from '@/app/styles/loading.module.css'

const Loading = () => {
  return (
    <>
      <div className={style.center}>
        <div className={style.spinner}>
          <span>C</span>
          <span>A</span>
          <span>R</span>
          <span>G</span>
          <span>A</span>
          <span>N</span>
          <span>D</span>
          <span>O</span>
        </div>
      </div>
    </>
  )
}

export default Loading