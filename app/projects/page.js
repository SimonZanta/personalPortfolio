import MainTitle from "../components/UI/headerText";
import Section from "../components/UI/section";
import TextLink from "../components/UI/Link/textLink";
import ProjectBlock from "../components/projectDesc";

const projectLinks = {
  "Computer graphics 1":{link: "https://github.com/SimonZanta/PGRF1", technologies: ["Java"], linkDesc: ["github"], img: "PGRF1.png", desc: "School project investigating the practical application of fundamental computer graphics algorithms by implementing them in Java. From implementing Bresenham algorithm throught clip algorithms to creating simple 3D application."},
  "Personal portfolio":{link: "https://github.com/SimonZanta/personalPortfolio", technologies: ["Next.js", "TailwindCSS", "JS"], linkDesc: ["github"], img: "personalProject.png", desc: "Personal portfolio build as a showcase of my development skills and experience. Main focus was on frontend with Next.js and styled using TailwindCSS."},
  "GGS":{link: "https://github.com/SimonZanta/GGS", technologies: ["HTML", "CSS", "JS"], linkDesc: ["github"], img: "GGS.png", desc: "School project replicating a game e-shop design and functionality using HTML, CSS and JS. Explored web development fundamentals of structure, styling and programming."},
  "Spike path game":{link: "https://github.com/SimonZanta/SpikePath/", technologies: ["C#", "Unity"], img: "spikePath.png", linkDesc: ["github"], desc: "Developed a challenging 2D platformer using Unity and C#. Focused on core gameplay mechanics, level design, and implementing various lighting techniques to enhance the game's atmosphere."}
}

export default function Page() {
    return (
    <Section>
      <div className="pt-10"><div className="relative left-full w-fit"><TextLink text={"home"} isUppercase={true} link="../personalPortfolio" /></div></div>
      <div className="pt-5"><MainTitle text={"projects"}/></div>
      <div className="flex flex-col pt-24 pb-20 gap-20">
        {
        Object.entries(projectLinks).map(([key, value]) => (
          <ProjectBlock tileValue={value} title={key}/>
        ))
        }
      </div>
        <div className="pb-14 text-center"><TextLink text="more projects" link="https://github.com/simonZanta" isUppercase={true}/></div>
    </Section>
    )
  }