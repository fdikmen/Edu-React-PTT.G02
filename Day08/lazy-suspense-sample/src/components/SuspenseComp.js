import React, { Suspense, lazy } from 'react'

const LazyComp = lazy(() => import('./LazyComp'));

const Profile = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./Profile')), 3000);
    });
});

export default function SuspenseComp() {
  return (
    <div>SuspenseComp
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Suspense fallback={<Loading/>}>
            <LazyComp />
            <Profile />
        </Suspense>
    </div>
  )
}

const Loading = () => <div>Loading...</div>;
