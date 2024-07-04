import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Software Development" },
    { hobby: "Interface Design using Figma" },
    { hobby: "Acquiring proficiency in new programming languages" },
    { hobby: "Engaging in video games" },
    { hobby: "Illustration and sketching" },
    { hobby: "Technology-focused blog authoring" },
    { hobby: "Developing innovative projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Software Engineer And Web <br /> Developer, Based In Turkey.
        </Heading>

        <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          I am an aspiring full-stack developer driven to acquire new skills and
          thrive through challenging opportunities. I have actively cultivated
          my skills in the field and undertaken numerous projects
          professionally. My current focus is on enhancing proficiency in
          front-end and back-end development, while deepening my understanding
          of computer science.
        </p>
      </div>
      <div className="w-full flex flex-row justify-between max-lg:flex-col ">
        <Aboutfooter />
      </div>
      <div className="block">
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
