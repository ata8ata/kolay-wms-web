import React from 'react'

const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>Welcome</nav>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default Hero
