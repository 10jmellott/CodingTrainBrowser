// Import css
import '../styles/index.scss';

// Import Libraries
import p5 from 'p5';

function createChallenge(id, name) {
    return {
        id,
        name
    };
}

// Setup Challenges
const challenges = [
    createChallenge('149', 'Tic-Tac-Toe'),
    createChallenge('145', '2D Ray Caster'),
    createChallenge('086', 'Cube Wave'),
    createChallenge('013', 'Reaction-Diffusion'),
    createChallenge('012', 'Lorenz Attractor'),
    createChallenge('011', 'Terrain Generator'),
    createChallenge('010', 'Maze Generator'),
    createChallenge('009', 'Textured Solar System'),
    createChallenge('008', 'Solar System 3D'),
    createChallenge('007', 'Solar System'),
    createChallenge('006', 'Mitosis'),
    createChallenge('005', 'Space Invaders'),
    createChallenge('004', 'Purple Rain'),
    createChallenge('003', 'Snake'),
    createChallenge('002', 'Menger Sponge'),
    createChallenge('001', 'Starfield'),
];

// Setup challenge import functionality
let playingInstance;
function playChallenge(challenge) {
    import(`./challenges/${challenge.id}/sketch.js`).then(c => {
        if (playingInstance) {
            playingInstance.remove();
        }
        challenge.sketch = (p5) => {
            const props = Object.keys(c);
            for (let prop of props) {
                p5[prop] = () => {
                    c[prop].call(p5);
                }
            }
        }        
        playingInstance = new p5(challenge.sketch, 'container');
    });
};

// Initialize the Navigation + Functional Behaviors
const navigation = document.getElementById('navigation');
for (let challenge of challenges) {
    const link = document.createElement('span');
    link.classList.add('navigation-link');
    link.onclick = () => playChallenge(challenge);
    link.innerHTML = challenge.name;
    navigation.appendChild(link);  
}

// Play the latest challenge
playChallenge(challenges[0]);
