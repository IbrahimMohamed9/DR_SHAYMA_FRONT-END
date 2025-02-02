import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import routes from "../../routes";
import { Link } from "react-router-dom";
import HeaderButtons from "../molecules/HeaderButtons";
import { AnimatePresence, motion } from "framer-motion";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  const routeElements = routes.map(({ Icon, title, href }, index) => (
    <motion.li
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 + index / 10,
      }}
      key={index}
      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-white via-gray-100 to-gray-300"
    >
      <Link
        to={href}
        onClick={() => setOpen((prev) => !prev)}
        className={
          "flex items-center justify-between w-full p-5 rounded-xl bg-white"
        }
      >
        <span className="flex gap-1 text-lg">{title}</span>
        <Icon className="text-xl" />
      </Link>
    </motion.li>
  ));

  routeElements.push(
    <motion.li
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 + routeElements.length / 10,
      }}
      key="buttons"
    >
      <HeaderButtons className="flex justify-center" buttonClassName="mr-2" />
    </motion.li>
  );

  return (
    <div ref={ref} className="lg:hidden flex items-center">
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} color="white" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-20 p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2">{routeElements}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
