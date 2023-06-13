import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>Main - Home Page <br />
      <Link href="/about" replace={false}>About</Link> <br />
      <Link href="/product/mobile" prefetch>Mobile Product</Link> <br />
      <Link href={
        { pathname: '/product/laptop', query: { name: 'macos',price:123 },prefetch:true }
      }
      >Laptop Product</Link> <br />
    </div>
  )
}
