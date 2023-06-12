import React,{lazy} from 'react'
import BugFixed from './components/BugFixed'
// import LazyComp from './components/LazyComp'

const LazyComp = lazy(() => import('./components/LazyComp'));


export default function App() {
  return (
    <div>App
      <BugFixed />
      <LazyComp />
    </div>
  )
}
