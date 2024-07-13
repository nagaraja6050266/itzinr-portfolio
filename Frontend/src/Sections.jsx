import CardsAndHeader from "./CardsAndHeader";

import crud from "./assets/Projects/crud.jpg";
import discover from "./assets/Projects/discover.png";
import searchautomation from "./assets/Projects/searchautomation.jpg";

const projectsSection = [
    {
        image: discover,
        name: "Discover-Me Quiz App",
        description:
            "A Personalized Quiz app to conduct quiz, and can see their rankings.",
            link: 'https://discover-inr.vercel.app/'
    },
    {
        image: crud,
        name: "Product Management API",
        description:
            "API to manage product data from database and can handle all kind of HTTP requests",
        link: ''
    },
    {
        image: searchautomation,
        name: "Search Automation",
        description:
            "Automated the process of searching in google with keywords and storing search history with single click",
    },
    {
        image: ui,
        name: "UI Designs",
        description:
            "Designed appealing UI designs for both mobiles and desktop using Figma",
    },
];

import betaaddict from "./assets/Internship/betaaddict.png";
import hig from "./assets/Internship/hig.jpg";
import ui from "./assets/Projects/ui.webp";

const internshipSection = [
    {
        image: betaaddict,
        name: "Creative Video Editor Intern - BetaAddict Aquarium, Namakkal",
        description:
            "Used Retention Editing techniques to showcase product and advertisement videos in social media",
    },
    {
        image: ui,
        name: "UI UX Intern - Exposys Data Labs, Bangalore",
        description:
            "Designed visually appealing UI designs and prototypes for mobile designing.",
    },
    {
        image: hig,
        name: "Marketing",
        description:
            "Approaching Business Clients and Explaining services of company",
    },
];

import fx from "./assets/technical/fx.jpg";
import leetcode from "./assets/technical/leetcode.png";
import nec from "./assets/technical/nec.jpg";
import problemsolving from "./assets/technical/problemsolving.webp";

const technicalAchivementsSection = [
    {
        image: leetcode,
        name: "LeetCode Track Record",
        description:
            "Found Optimal Solutions for 60+ problems with various Data Structures",
            id: 'achievements'
    },
    {
        image: problemsolving,
        name: "Problem Solving Classes",
        description:
            "Conducted problem solving classes on optimal approaches of problem solving.",
    },
    {
        image: fx,
        name: "Paper Presentation",
        description:
            "Winner of Xtreme FXEC Symposium in Code Debugging and Paper Presentation",
    },
    {
        image: nec,
        name: "TrickedBug - Winner",
        description:
            "Participated and won NEC Symposium events like TrickedBug, Paper Presentation and Connexion.",
    },
];

import placement from "./assets/leadership/placement.png";
import rep from "./assets/leadership/rep.jpg";
import coordination from "./assets/leadership/coordination.jpg";

const leadershipSections = [
    {
        image: placement,
        name: "College Placement Representative",
        description:
            "Spearheded the activities of Placement and Training Cell and Managing social college pages.",
    },
    {
        image: rep,
        name: "Class Representative",
        description: "Served as Class Representative for two consecutive years",
    },
    {
        image: coordination,
        name: "Event Coordinator- CSE Association",
        description:
            "Spearheaded the coordination of numerous department events",
    },
];

import dance from "./assets/Achievements/dance.jpg";
import independenceday from "./assets/Achievements/independenceday.jpg";
import pattimandram from "./assets/Achievements/pattimandram.jpg";
import titlewinner from "./assets/Achievements/titlewinner.jpg";

const otherAchivementsSection = [
    {
        image: titlewinner,
        name: "Title Winner - Tamil Mandram 2023",
        description:
            "Title Winner of tamil elocuation competition conducted by Tamil Mandram GCE, Tirunelveli",
    },
    {
        image: independenceday,
        name: "Consecutive Winning in Independence day Speech Competition",
        description: "Title winner of Tamil Elocution for consecutive 2 years",
    },
    {
        image: dance,
        name: "Extra Curricular Activities",
        description:
            "Participated and Won many extra curricular activites like singing and dancing.",
    },
    {
        image: pattimandram,
        name: "Tamil Pattimandram",
        description:
            "Notable participant in Tamil Pattimandram conducted by Tamil Mandram 2023",
    },
];

import hukum from "./assets/creative-works/hukum.png";
import inaguration from "./assets/creative-works/inaguration.jpg";
import beastthunivu from "./assets/creative-works/beast-thunivu.jpg";


const creativeWorksSection = [
    {
        image: hukum,
        name: "HUKUM - Cinematic Fusion - Video Edit",
        description:
            "Crafted a short story made from reference of multiple stars, exploring a new Cinematic Universe",
    },
    {
        image: inaguration,
        name: "Association Inaguration - Video Edit",
        description:
            "Crafted a attractive presentation video in Association inaguration 2023",
    },
    {
        image: beastthunivu,
        name: "Beast x Thunivu - Imaginary Crossover",
        description: "Presented a Imaginary story based on different movies",
    },
];

const sections = [
    {
        sectionName: projectsSection,
        sectionHeader: "Projects",
    },
    {
        sectionName: internshipSection,
        sectionHeader: "Internships",
    },
    {
        sectionName: technicalAchivementsSection,
        sectionHeader: "Technical Achievements",
    },
    {
        sectionName: leadershipSections,
        sectionHeader: "Leadership",
    },
    {
        sectionName: otherAchivementsSection,
        sectionHeader: "Achievements",
    },
    {
        sectionName: creativeWorksSection,
        sectionHeader: "Creative Works",
    },
];

function Sections() {
    return (
        <>
            {sections.map((s, i) => (
                <CardsAndHeader
                    key={i}
                    set={s.sectionName}
                    headerName={s.sectionHeader}
                />
            ))}
        </>
    );
}

export default Sections;
