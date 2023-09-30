import { motion } from "framer-motion";
import Link from "next/link";

export default function Index() {
  return (
    <div className="app">
      <div className="home" id="home">
        <motion.div
          className="title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.4,
          }}
        >
          emptea studios
        </motion.div>
        <motion.div
          className="slogan"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.8,
          }}
        >
          Elevating <span className="slogan-highlight">webscapes.</span>
        </motion.div>
        <div className="navbar-container">
          <motion.div
            className="navbar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.6,
            }}
          >
            <Link href={"/atelier"} onClick={()=>{}}>ateliér</Link>
            <Link href={"/atelier"}>services</Link>
            <Link href={"/atelier"}>contact</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
