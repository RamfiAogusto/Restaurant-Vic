import React from 'react'
import CardPlate from '../components/CardPlate'
import platecarne from "../assets/platecarne.png"
function MenuMeats() {
  return (
    <div className='py-20 px-4 flex flex-col gap-3 justify-center items-center'>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
    <CardPlate img={platecarne}/>
  </div>
  )
}

export default MenuMeats