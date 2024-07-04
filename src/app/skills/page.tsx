import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import scss from "../../../public/scss.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import java from "../../../public/java.png";
import tailwind from "../../../public/tailwindcss.png";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import springboot from "../../../public/springboot.png";
import nodejs from "../../../public/nodejs.png";
import expressjs from "../../../public/expressjs.png";
import nestjs from "../../../public/nestjs.png";
import bootstrap from "../../../public/bootstrap.png";
import intellij from "../../../public/intellij.png";

const skillPage = () => {
  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "java", img: java },
  ];
  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "nodejs", img: nodejs },
    { alt: "express", img: expressjs },
    { alt: "nestjs", img: nestjs },
    { alt: "scss", img: scss },
    { alt: "tailwind", img: tailwind },
    { alt: "bootstrap", img: bootstrap },
    { alt: "springboot", img: springboot },
    { alt: "github", img: github },
    { alt: "vscode", img: vscode },
    { alt: "intellij", img: intellij },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          I bring a professional background with a strong foundation in HTML5,
          CSS3, JavaScript (JS), TypeScript (TS), and React, including
          responsive design principles. My expertise spans both frontend and
          backend development, specializing in building robust web applications
          and sites. On the frontend, I excel in JavaScript, TypeScript, React,
          and Next.js for creating intuitive user interfaces. In backend
          development, I am skilled in Node.js with frameworks such as
          Express.js and Nest.js, as well as Java and Spring Boot for
          implementing comprehensive server-side functionalities and ensuring
          seamless integration across the application.
        </p>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </div>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
