import { motion } from "framer-motion";
import Link from "next/link";

export default function Index() {
  return (
    <div className="app">
      <div className="atelier" id="atelier">
        <motion.div className="title">
          <Link href={"/"}>emptea studios</Link>
        </motion.div>
        <motion.div
          className="navbar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.6,
          }}
        >
          <Link href={"/atelier"}>ateliér</Link>
          <Link href={"/atelier"}>services</Link>
          <Link href={"/atelier"}>contact</Link>
        </motion.div>

        <div className="gallery-fade-container">
          <div className="gallery-container">
            <div className="gallery">
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
