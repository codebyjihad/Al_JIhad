import React, { Suspense } from 'react'
import Navbar from './Navbar'

const navItemsPromise = fetch("../navitems.json").then(res => res.json()).catch(eror => {
    console.log(eror)
})


function LeftNav() {
  return (
    <div>
        <Suspense fallback={<span>Loading...</span>}>
            <Navbar navItemsPromise={navItemsPromise}></Navbar>
        </Suspense>
    </div>
  )
}

export default LeftNav