import * as React from "react";
import { motion } from "framer-motion";
import image from './assets/logo.png'

function App() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  return (

    <div className="container" style={{position: 'relative'}} >
      <motion.svg
        width="100%"
        height="100%"
        xmlns="../src/assets/hexagon-slice-6.svg"
        viewBox="0 0 24 24"
        className="item"
      >
        
        <motion.path
          d="m12 5.32 6 3.37v6.62l-6 3.37-6-3.37v-6.62z"
          style={{scale:2}}
          variants={icon}
          initial="hidden"
          animate="visible"
          strokeWidth="0.3"
          // backgroundImage={`url(${image})`}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}>
          </motion.path>
      </motion.svg>
      <motion.img
          key={image}
          src={image}
          width="64"
          height="60"
          style={{ zIndex:'1', position:'absolute', top: 48}}
          transition={{delay: 1, default: {duration: 3, ease: "easeInOut"}}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        
    </div>
  )
};

export default App
