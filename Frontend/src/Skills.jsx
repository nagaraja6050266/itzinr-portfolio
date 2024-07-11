import SkillCard from "./SkillCard";

import cicon from "./assets/skillicons/c.png";
import pythonicon from "./assets/skillicons/python.png";
import javaicon from "./assets/skillicons/java.png";
import jsicon from "./assets/skillicons/js.png";
import reacticon from "./assets/skillicons/react.png";
import figmaicon from "./assets/skillicons/figma.png";
import blendericon from "./assets/skillicons/blender.png";
import davinciicon from "./assets/skillicons/davinci.png";

const set = [
    { icon: pythonicon, name: "Python" },
    { icon: jsicon, name: "Javascript" },
    { icon: javaicon, name: "Java" },
    { icon: cicon, name: "C" },
    { icon: reacticon, name: "React JS" },
    { icon: blendericon, name: "Blender" },
    { icon: davinciicon, name: "DaVinci Resolve" },
    { icon: figmaicon, name: "figma" },
];

function Skills() {
    return (
        <section id="skills">
            <div>
                <h1 className="section-header">Skills</h1>
                <div className="skill-cards-container">
                    {set.map((s, i) => (
                        <SkillCard
                            key={i}
                            iconSource={s.icon}
                            skillName={s.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Skills;
