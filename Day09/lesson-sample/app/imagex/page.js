import React from 'react'
import Image from 'next/image'
import testImg from '../../assets/images/300.webp'

export default function page() {
  return (
    <div>Image page<hr/>
        <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={300}
        alt="Picture of the author"
        // placeholder='blur'
        // blurDataURL="https://picsum.photos/200/300"
/>
        <div style={{position:'relative',width:200,height:300}}>
        <Image
        fill
        quality={7}
        src="https://picsum.photos/200/300"
        alt="Picture of the author"
        />
        </div>
        <Image
        src={testImg}
        width={200}
        height={300}
        alt="Picture of the author"
        placeholder='blur'
        />
    </div>
  )
}
