import SkillsSection from "./SkillsSection";

import cicon from "./assets/skillicons/c.png";
import pythonicon from "./assets/skillicons/python.png";
import javaicon from "./assets/skillicons/java.png";
import jsicon from "./assets/skillicons/js.png";
import reacticon from "./assets/skillicons/react.png";
import figmaicon from "./assets/skillicons/figma.png";
import blendericon from "./assets/skillicons/blender.png";
import davinciicon from "./assets/skillicons/davinci.png";

const technicalSkills = [
    { icon: pythonicon, name: "Python" },
    { icon: jsicon, name: "Javascript" },
    { icon: javaicon, name: "Java" },
    { icon: cicon, name: "C" },
    { icon: reacticon, name: "React JS" },
    { icon: blendericon, name: "Blender" },
    { icon: davinciicon, name: "DaVinci Resolve" },
    { icon: figmaicon, name: "figma" },
];

const set=[{
    sectionName: 'Technical Skills',
    sectionContent: technicalSkills
}]

function Skills(){
    return <>
    {
        set.map((s,i) => <SkillsSection key={i} set={s.sectionContent} header={s.sectionName} />)   
    }
    </>
}

export default Skills