import style from '@/app/styles/loading.module.css'

const Loading = () => {
  return (
    <>
      <div className={style.center}>
        <div className={style.loader}>
          <div className={style.jimuPrimaryLoading}></div>
        </div>
      </div>
    </>
  )
}

export default Loading