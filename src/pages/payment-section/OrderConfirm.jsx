import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./payament.module.css"

const OrderConfirm = () => {
    // https://c.tenor.com/Mw__8SvDbi8AAAAC/checkmark-black.gif
    // https://i.pinimg.com/originals/84/a5/68/84a56867b5d5b6f7c2d672e783bf4729.gif
    //https://cdn.dribbble.com/users/2015153/screenshots/7442124/media/97681cd6ef4e896e8df157b1d1bdca06.gif
    //https://i.pinimg.com/originals/42/33/cf/4233cf24e463e818e4fe2f23244e47cc.gif

    const navigate=useNavigate()
    const myTimeout=setTimeout(home,12000)
    function home(){
        navigate('/allfruits')
        clearTimeout(myTimeout)
    }

  return (
    <img className={styles.order} src="https://i.pinimg.com/originals/42/33/cf/4233cf24e463e818e4fe2f23244e47cc.gif" alt="" />
  )
}

export default OrderConfirm