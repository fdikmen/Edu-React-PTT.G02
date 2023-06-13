import React from 'react'

export default function layout({ children,...res }) {
    return (
        <>
            <h3>About Page Header</h3><br />
            {children}<br />
            <h3>About Page Footer</h3><br />
        </>
    )
}
