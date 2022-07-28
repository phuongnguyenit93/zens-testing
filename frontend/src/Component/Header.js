import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import React from 'react'

function Header() {
  return (
    <>
        <h1 className="text-center">Welcome to JokeJS</h1>
        <div className="container-fluid bg-success p-5">
            <div className="container text-white text-center">
                <p className="h2">A joke a day keeps the doctor away</p>
                <p className="h6">If you joke wrong way, your teeth have to pay. (Serious)</p>
            </div>
        </div>
    </>
  )
}

export default Header