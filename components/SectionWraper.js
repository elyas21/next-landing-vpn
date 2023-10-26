import { motion } from "framer-motion";


export default function SectionWrapper(Component, idName) {
  return function HOC() {
    return (
      <motion.section
      variants={staggerContainer(Component,1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
    )
  }
}
const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };