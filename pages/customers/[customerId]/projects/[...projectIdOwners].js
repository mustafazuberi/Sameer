import { useRouter } from 'next/router'
import React from 'react'

const projectOwners = () => {
    const router = useRouter()
  console.log(router.query)
    return (
    <div>projectOwners</div>   
  )
}

export default projectOwners