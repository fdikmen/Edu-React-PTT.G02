import React from 'react'
import {notFound} from 'next/navigation'


async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default async  function page() {
  await delay(4000);
  // throw new Error('About error!!')
  throw notFound();
  return (
    <div>About Page

        
    </div>
  )
}
