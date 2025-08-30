import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

function Background() {

  const [particleCount, setParticleCount] = useState(150);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    })
  }, []);

  useEffect(() => {

    const handlePageClick = () => {
      setParticleCount(prev => prev + 1);
    }
    window.addEventListener('click', handlePageClick);

    return () => {
      window.removeEventListener('click', handlePageClick);
    }

  }, []);

  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "transparent", 
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // hover links highlight
          },
          onClick: {
            enable: true,
            mode: "push", // adds particles on click
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
            },
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            quantity: 3,
          },
        },
      },
      particles: {
        number: {
          value: particleCount,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1, // slower for calmer effect
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
      },
      detectRetina: true,
    };
  }, [particleCount]);


  return (
    <>
      {
        init && <Particles
          id="tsparticles"
          options={options}
          style={{top:0,left:0,position:'absolute',width:'100%' ,height:'100vh'}}
        />
      }
    </>
  )
}

export default Background