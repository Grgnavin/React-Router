import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Grgnavin')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);
  return (
    <div className='text-center m-4 bg-gray-500 py-5 text-white text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/Grgnavin');
    return res.json();
}
