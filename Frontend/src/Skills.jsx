import SkillsSection from "./SkillsSection";

import cicon from "./assets/skillicons/technical/c.png";
import pythonicon from "./assets/skillicons/technical/python.png";
import javaicon from "./assets/skillicons/technical/java.png";
import jsicon from "./assets/skillicons/technical/js.png";
import reacticon from "./assets/skillicons/technical/react.png";
import figmaicon from "./assets/skillicons/technical/figma.png";

import blendericon from "./assets/skillicons/nontechnical/blender.png";
import davinciicon from "./assets/skillicons/nontechnical/davinci.png";
import contentWriting from "./assets/skillicons/nontechnical/content.png";
import editing from "./assets/skillicons/nontechnical/editingapp.png";
import leadership from "./assets/skillicons/nontechnical/leadership.png";
import motiongraphics from "./assets/skillicons/nontechnical/motiongraphics.png";

const technicalSkills = [
    { icon: pythonicon, name: "Python" },
    { icon: jsicon, name: "Javascript" },
    { icon: javaicon, name: "Java" },
    { icon: cicon, name: "C" },
    { icon: reacticon, name: "React JS" },
    { icon: figmaicon, name: "Figma" },
];

const nonTechnicalSkills = [
    { icon: leadership, name: "Leadership" },
    { icon: contentWriting, name: "Content Writing" },
    { icon: editing, name: "Video Editing" },
    { icon: motiongraphics, name: "Motion Graphics" },
    { icon: blendericon, name: "Blender" },
    { icon: davinciicon, name: "DaVinci Resolve" },
];

const set = [
    {
        sectionName: "Technical Skills",
        sectionContent: technicalSkills,
    },
    {
        sectionName: "Other Skills",
        sectionContent: nonTechnicalSkills,
    },
];

function Skills() {
    return (
        <>
            {set.map((s, i) => (
                <SkillsSection
                    key={i}
                    set={s.sectionContent}
                    header={s.sectionName}
                />
            ))}
        </>
    );
}

export default Skills;
