import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/abhi28saha01')
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='flex flex-col gap-3 justify-center items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers : {data.followers} <br/>
        Github Total Repositries : {data.public_repos}
        <img src={data.avatar_url} width="200px"/>
    </div>
  )
}

export default Github