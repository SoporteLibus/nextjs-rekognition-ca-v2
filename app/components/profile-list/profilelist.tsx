import style from '@/styles/list.module.css'

const ProfileList = () => {
  return (
    <div className={style.recentCustomers}>
        <div className={style.cardHeader}>
            <h2>Recent Customers</h2>
        </div>

        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
        <div className={style.divBox}>
            <div className={style.imgBx}><img src="/logo2.png" alt="" /></div>
            <h4>David <br/> <span>Italy</span></h4>
        </div>
    </div>
  )
}

export default ProfileList;