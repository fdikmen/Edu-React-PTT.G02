import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../components/About';
import Contact from '../components/Contact';
import Address from '../components/Address';
import User from '../components/User';
import UserClass from '../components/UserClass';

export default function RootRooter() {
    return (

        <>
            <Routes>
                {/* <Route path="/" element={<h1>HOME PAGE</h1>} /> */}
                <Route index element={<h1>HOME PAGE</h1>} />
                {/* Any Text */}
                <Route path="/Other/*" element={<h1>OTHER PAGE</h1>} />


                <Route path="/About" element={<About />} />
                {/* <Route path="/About" element={<Contact/>} /> */}
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Address" element={<Address />} />

                <Route path="/User/:userId/:profileName" element={<User />} />
                {/* <Route path="/UserClass/:userId"
                    element={<UserClass />} /> */}

                <Route path="/UserClass" element={<UserClass />} >
                    <Route path=":userId" element={<UserClass />} />
                </Route>
                {/* /State
/State/Old
/State/New */}
                <Route path="/State">
                    <Route index element={<h1>State PAGE</h1>} />
                    <Route path="Old" element={<h1>Old PAGE</h1>} />
                    <Route path="New" element={<h1>New PAGE</h1>} />
                </Route>
                {/* No Match */}
                <Route path="*" element={<h1>404 NOT FOUND!</h1>} />
            </Routes>



            {/* <Routes>
        <Route path="/Product" element={<h1>Product PAGE</h1>} />
      </Routes> */}
        </>
    )
}
