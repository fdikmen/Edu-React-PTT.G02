import React from 'react'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1'
        , {
            next: {
                revalidate: 1000
            }
        }
    )
    const data = await res.json()
    return data
}

async function getPost(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    return data
}

export default async function page() {
    /*const data = await getData();
    const post = await getPost();*/

    //const allData = Promise.all(getData(), getPost())
const [data, post] = Promise.all([getData(), getPost()])
    console.log(data)
    console.log(post)

    return (
        <div>Team page
            <p>name: {data.name}</p>
        </div>
    )
}
