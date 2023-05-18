import style from './style/auth.loading.module.css'

const Loading = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.loadingspinner}>
          <div id={style.square1}></div>
          <div id={style.square2}></div>
          <div id={style.square3}></div>
          <div id={style.square4}></div>
          <div id={style.square5}></div>
        </div>
      </div>
    </>
  )
}
export default Loading