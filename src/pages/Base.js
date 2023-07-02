import React from 'react'
import '../asset/css/style.css'
import Project from '../component/Project'
import Form from '../component/Form'
import BricksResell from '../component/BricksResell'
export default function Base() {



  
  return (
    <>
    <div className='main'>
      <Project/>

      <BricksResell/>
      <Form></Form>
    </div>
    </>
  )
}
