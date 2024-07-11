import ActivityCard from "./ActivityCard";

import fx from './assets/technical/fx.jpg'
import leetcode from './assets/technical/leetcode.png'
import nec from './assets/technical/nec.jpg'
import problemsolving from './assets/technical/problemsolving.webp'


const set = [
    {
        image: leetcode,
        name: "LeetCode Track Record",
        description: 'Found Optimal Solutions for 60+ problems with various Data Structures'
    },
    {
        image: problemsolving,
        name: "Problem Solving Classes",
        description: 'Conducted problem solving classes on optimal approaches of problem solving.'
    },
    {
        image: fx,
        name: "Paper Presentation",
        description: "Winner of Xtreme FXEC Symposium in Code Debugging and Paper Presentation"
    },
    {
        image: nec,
        name: 'TrickedBug - Winner',
        description: 'Participated and won NEC Symposium events like TrickedBug, Paper Presentation and Connexion.'
    }
];
function TechnicalAchievements() {
    return (
        <section id="technical-achievements">
            <div>
                <h1 className="section-header">Technical Achievements</h1>
                <div className="projects-container">
                    {set.map((s, i) => (
                        <ActivityCard
                            key={i}
                            image={s.image}
                            name={s.name}
                            description={s.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TechnicalAchievements;
