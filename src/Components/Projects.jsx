import React, { useEffect, useRef, useState } from "react";
import GameImg from "../Assets/Game.png";
import CurrencyImg from "../Assets/CurrencyConverter.png";
import TourImg from "../Assets/Tour-planner.png";
import RazorImg from "../Assets/RazorPay.png";
import ShoppingImg from "../Assets/Shopping-app.png";
import Image from "../Assets/Portfolio.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {


  const projects = [
    {
      img: GameImg,
      title: "Rock-Paper-Scissor Game",
      link: "https://anubhav-0004.github.io/Rock-Paper-Scissors/",
      desc: "A Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. It features a responsive design, allowing seamless gameplay across devices, providing an interactive and engaging user experience.",
    },
    {
      img: CurrencyImg,
      title: "Currency Converter",
      link: "https://anubhav-0004.github.io/Currency-Converter/",
      desc: "A Currency Converter built with HTML, CSS, and JavaScript, utilizing a live API for real-time currency updates. It’s fully responsive, ensuring consistent performance across devices.",
    },
    {
      img: TourImg,
      title: "Tour Planner",
      link: "https://anubhav-tourplanner.netlify.app/",
      desc: "I developed a Tour Planner website using React and Tailwind. This project focused on practicing React, particularly the use of props. Users can mark destinations as \"Interested\" to add their prices or remove them by clicking \"Not Interested.\"",
    },
    {
      img: ShoppingImg,
      title: "Shopping App",
      link: "https://anubhav-shop-app.netlify.app/",
      desc: "\"Shopping app\" is a responsive e-commerce project built with React, Redux, and Tailwind CSS. It fetches products from an API, enabling users to manage their cart and view a responsive cart page with total items and price.",
    },
    {
      img: RazorImg,
      title: "RazorPay Clone",
      link: "https://anubhav-0004.github.io/RazorPay_Clone/",
      desc: "I created a clone of the Razorpay website using HTML and Tailwind CSS. This project is a static page, optimized for PC screens only, and was developed to practice Tailwind CSS, without focusing on responsiveness.",
    },
  ];


  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const totalProjects = projects.length;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    }, 2500);
    return () => {
      resetTimeout();
    };
  }, [index]);

 




  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize state on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTranslateValue = () => {
    if (screenWidth <= 760) {
      return `translateX(${-(index) * 100}%)`; // Example value for mobile
    } else if (screenWidth <= 1024) {
      return `translateX(${-(index) * 50}%)`; // Example value for tablet
    } else {
      return `translateX(${-(index - 1) * 35}%)`; // Example value for larger screens
    }
  };







  return (
    <div
      id="projects"
      className="text-white md:flex overflow-hidden md:flex-col items-center md:flex-wrap bg-[#0000005d] shadow-xl mx-auto md:mx-10 md:mb-10 mt-16 md:py-20 bg-opacity-30 rounded-lg p-5 md:justify-center"
    >
      <div className="mx-auto w-fit my-5">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider mx-auto">
          Projects
        </h1>
        <div className="w-[95%] h-1 bg-green-400 rounded-full"></div>
      </div>
      <div className="w-[90%] mx-auto overflow-x-hidden mt-8 relative max-lg:p-4">
        <div
          className="flex transition-transform duration-300 lg:my-3 lg:gap-[5%]"
          style={{
            transform: getTranslateValue(),
            gap: "5%",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`min-w-[96%] md:min-w-[45%] lg:min-w-[30%] h-auto p-4 border-2 rounded-md transition-transform duration-300 ${
                i === index && "scale-105 z-10"
              }`}
              style={{
                transform: i === index ? "scale(1.05)" : "scale(1)",
                backgroundColor: i === index ? "#1d1d4f" : "#101042",
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-96 mx-auto aspect-video object-cover rounded-md mt-5"
              />
              <h1 className="w-fit mx-auto font-bold text-2xl my-3">
                {project.title}
              </h1>
              <div className="hover:scale-110 transition-all text-sm underline underline-offset-2 duration-300 w-fit mx-auto flex justify-center items-center gap-2 mb-2 bg-blue-600 px-2 rounded-md bg-opacity-45 border py-0.5">
                <FaExternalLinkAlt />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </div>
              <p className="mb-4 text-slate-300">{project.desc}</p>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-green-400" : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
