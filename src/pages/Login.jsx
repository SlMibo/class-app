import { useState } from 'react';
import { motion } from "framer-motion"

export const Login = () => {
    const [login, setLogin] = useState(true)
 
    {items.map(item => (
      <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
      </motion.div>
    ))}
    
    <AnimatePresence>
      {selectedId && (
        <motion.div layoutId={login}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
          <motion.button onClick={() => setSelectedId(!login)} />
        </motion.div>
      )}
    </AnimatePresence>
}
