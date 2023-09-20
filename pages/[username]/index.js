import { useRouter } from 'next/router'

const username = () => {
    const router = useRouter()
    const {username} = router.query
  return (
    <div>
        <h1 className='text-black text-3xl font-bold'>This Is user page named : {username}</h1>
    </div>
  )
}

export default username