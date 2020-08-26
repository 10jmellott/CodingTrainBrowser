// Import css
import '../styles/index.scss';

// Import Libraries
import p5 from 'p5';

import challenges from './challenges';

const navigation = document.getElementById('navigation');
const nextEl = document.getElementById('next');
const prevEl = document.getElementById('prev');
const titleEl = document.getElementById('titlebar-active');

// Setup challenge import functionality
let activeChallengeIndex;
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
		activeChallengeIndex = challenges.indexOf(challenge);

		// Update active challenge title
		if (titleEl) {
			titleEl.innerHTML = challenge.name;
		}

		// Update navigation buttons
		if (activeChallengeIndex === 0 && prevEl) {
			prevEl.classList.add('disabled');
		} else if (prevEl) {
			prevEl.classList.remove('disabled');
		}
		if (activeChallengeIndex >= challenges.length - 1 && nextEl) {
			nextEl.classList.add('disabled');
		} else if (nextEl) {
			nextEl.classList.remove('disabled');
		}

		// Update navigation menu
		navigation.querySelectorAll('.navigation-link').forEach(el => {
			el.classList.remove('active');
		});
		const navel = navigation.querySelector(`.challenge-${challenge.id}`);
		if (navel) {
			navel.classList.add('active');
		}
	});
};

// Initialize the Navigation + Functional Behaviors
for (let challenge of challenges) {
	const link = document.createElement('div');
	link.classList.add(`challenge-${challenge.id}`);
	link.classList.add('navigation-link');
	link.onclick = () => playChallenge(challenge);
	link.innerHTML = `
		<div class="navigation-link__thumb-container">
			<img class="navigation-link__thumb" src="${challenge.thumbnail}" />
		</div>
		<div>
			<p class="navigation-link__id">${challenge.id}</p>
			<p class="navigation-link__name">${challenge.name}</p>
			<p  class="navigation-link__description">${challenge.description}</p>
		</div>
	`;
	navigation.appendChild(link);
}

// Play the latest challenge
playChallenge(challenges[0]);

if (prevEl) {
	prevEl.onclick = () => {
		if (activeChallengeIndex > 0) {
			playChallenge(challenges[activeChallengeIndex - 1]);
		}
	}
}

if (nextEl) {
	nextEl.onclick = () => {
		if (activeChallengeIndex < challenges.length - 1) {
			playChallenge(challenges[activeChallengeIndex + 1]);
		}
	}
}
