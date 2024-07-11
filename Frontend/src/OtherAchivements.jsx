import ActivityCard from "./ActivityCard";

import dance from './assets/Achievements/dance.jpg';
import independenceday from './assets/Achievements/independenceday.jpg';
import pattimandram from './assets/Achievements/pattimandram.jpg';
import titlewinner from './assets/Achievements/titlewinner.jpg';


const set = [
    {
        image: titlewinner,
        name: 'Title Winner - Tamil Mandram 2023',
        description: 'Title Winner of tamil elocuation competition conducted by Tamil Mandram GCE, Tirunelveli'
    },
    {
        image: independenceday,
        name: 'Consecutive Winning in Independence day Speech Competition',
        description: 'Title winner of Tamil Elocution for consecutive 2 years'
    },
    {
        image: dance,
        name: 'Extra Curricular Activities',
        description: 'Participated and Won many extra curricular activites like singing and dancing.'
    },
    {
        image: pattimandram,
        name: 'Tamil Pattimandram',
        description: 'Notable participant in Tamil Pattimandram conducted by Tamil Mandram 2023'
    }
];

function OtherAchievements() {
    return (
        <section id="projects">
            <div>
                <h1 className="section-header">Other Achievements</h1>
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

export default OtherAchievements;
