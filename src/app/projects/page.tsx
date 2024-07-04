import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Friendyol - An ecommerce website",
      description:
        "The e-commerce project is a user-friendly platform developed with modern technologies. It offers an intuitive interface, a secure payment system, and flexible management tools, providing an excellent shopping experience for users.",
      tags: ["Reactjs", "Spring Boot", "Javascript", "Tailwind CSS"],
      link: "https://github.com/Skaimarvas/ecommerce-project",
    },
    {
      title: "Lezizpizza - A food order website",
      description:
        "In this project, I developed a user-friendly and functional food ordering website that allows users to order from a variety of pizza options.",
      tags: ["Reactjs", "HTML", "Tailwind CSS", "Javascript"],
      link: "lezizpizza.vercel.app",
    },

    {
      title: "Personal Blog/Portfolio - A blog/portfolio",
      description:
        "I created a personal blog using React, designed as a flexible and user-friendly template for anyone to use. Hosted on Vercel, this project demonstrates my ability to build responsive and customizable web applications, making it easy for users to adapt and personalize it for their own blogging needs.",
      tags: ["Reactjs", "HTML", "Tailwind CSS", "Javascript"],
      link: "https://github.com/Skaimarvas/mypersonalblog",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          I am passionate about crafting innovative and balanced solutions.
          Here, you’ll discover a blend of my frontend and backend projects,
          each reflecting my dedication to full stack development. From dynamic
          interfaces in React and Next.js to robust backend systems using Java,
          Spring Boot, and Express.js, my portfolio showcases my journey of
          continuous learning and problem-solving. Explore this collection to
          see how I integrate creativity with technical prowess to bring ideas
          to life.
        </p>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
