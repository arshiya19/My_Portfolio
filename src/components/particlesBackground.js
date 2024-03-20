import Particles from "react-tsparticles"
import React from "react";
import particlesConfig from "./particles"

const particlesBackground = () => {
    return (
        <Particles params={particlesConfig} />
    )
}

export default particlesBackground

