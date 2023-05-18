import style from '@/styles/loading.module.css'

const Loading = () => {
  return (
    <>
    <div className={style.container}>
      <span className={style.loader}></span>
    </div>
    </>
  )
}

export default Loading