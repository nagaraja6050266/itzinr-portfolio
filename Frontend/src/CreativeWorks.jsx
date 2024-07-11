import ActivityCard from "./ActivityCard";


import hukum from './assets/creative-works/hukum.png'
import inaguration from './assets/creative-works/inaguration.jpg'
import beastthunivu from './assets/creative-works/beast-thunivu.jpg'


const set = [
    {
        image: hukum,
        name: 'HUKUM - Cinematic Fusion - Video Edit',
        description: 'Crafted a short story made from reference of multiple stars, exploring a new Cinematic Universe'
    },
    {
        image: inaguration,
        name: 'Association Inaguration - Video Edit',
        description: 'Crafted a attractive presentation video in Association inaguration 2023'
    },
    {
        image: beastthunivu,
        name: 'Beast x Thunivu - Imaginary Crossover',
        description: 'Presented a Imaginary story based on different movies'
    }
];

function CreativeWorks() {
    return (
        <section id="projects">
            <div>
                <h1 className="section-header">CreativeWorks</h1>
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

export default CreativeWorks;
