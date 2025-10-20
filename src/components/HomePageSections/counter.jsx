"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Briefcase, Smile, Users, Award } from "lucide-react";

const Counter = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // Count animation
  const useCountUp = (end, startAnimation, duration = 2) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!startAnimation) return;
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [end, startAnimation, duration]);
    return count;
  };

  const stats = [
    {
      id: 1,
      icon: <Briefcase className="w-10 h-10 text-blue-100" />,
      value: useCountUp(3562, startCount),
      label: "Total Projects",
    },
    {
      id: 2,
      icon: <Smile className="w-10 h-10 text-blue-100" />,
      value: useCountUp(1054, startCount),
      label: "Happy Clients",
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10 text-blue-100" />,
      value: useCountUp(400, startCount),
      label: "Active Members",
    },
    {
      id: 4,
      icon: <Award className="w-10 h-10 text-blue-100" />,
      value: useCountUp(67, startCount),
      label: "Won Awards",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 max-w-7xl mx-auto px-6 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="relative rounded-4xl text-white py-10 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-blue-600">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] bg-repeat"></div>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center z-10">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={startCount ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-blue-500 p-4 rounded-full shadow-lg shadow-blue-400/30 mb-4"
              >
                {item.icon}
              </motion.div>

              <motion.h3
                key={item.value}
                initial={{ scale: 0.9, opacity: 1 }}
                animate={
                  startCount
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.9, opacity: 1 }
                }
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                {item.value}
              </motion.h3>
              <p className="text-lg font-medium text-blue-100">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Subtle glow line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Counter;
