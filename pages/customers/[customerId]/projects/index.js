import { useRouter } from 'next/router'
import React from 'react'

const CustomerProject = () => {
    const router = useRouter()
    const {customerId} = router.query
  return (
    <div>this is projects of customer having id {customerId}</div>
  )
}

export default CustomerProject