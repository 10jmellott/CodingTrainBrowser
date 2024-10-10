export type Challenge = {
	id: string;
	name: string;
	description: string;
	date?: string;
};

export default [
	{
		id: "001",
		name: "Starfield",
		description: "A simple starfield animation.",
		date: "2016-04-12"
	},
	{
		id: "002",
		name: "Menger Sponge",
		description: "Procedurally generated fractal curve."
	},
	{
		id: "003",
		name: "Snake",
		description: "A classic snake arcade game"
	},
	{
		id: "004",
		name: "Purple Rain",
		description: "The artist formerly known as Prince"
	},
	{
		id: "005",
		name: "Space Invaders",
		description: "The classic arcade phenomenon's horrible spin-off"
	},
	{
		id: "006",
		name: "Mitosis",
		description: "Cellular mitosis simulation"
	},
	{
		id: "007",
		name: "2D Solar System",
		description: "A two dimensional solar system simulation"
	},
	{
		id: "008",
		name: "3D Solar System",
		description: "A three dimensional solar system simulation"
	},
	{
		id: "009",
		name: "Textured 3D Solar System",
		description: "A three dimensional solar system simulation with textures"
	},
	{
		id: "010",
		name: "Maze Generator",
		description: "Depth first search maze generation"
	},
	{
		id: "011",
		name: "Terrain Generator",
		description: "Terrain generator using perlin noise"
	},
	{
		id: "012",
		name: "Lorenz Attractor",
		description: "Visualization of the Lorenz Attractor system of equations"
	},
	{
		id: "013",
		name: "Reaction Diffusion",
		description: "Gray Scott reaction diffusion simulation"
	},
	{
		id: "014",
		name: "Recursive Tree",
		description: "A recursive tree drawing algorithm"
	},
	{
		id: "015",
		name: "OOP Tree",
		description: "A dynamically drawn tree with movement and leaves"
	},
	{
		id: "016",
		name: "L-System Tree",
		description: "A tree drawn using an L-System"
	},
	{
		id: "016-1",
		name: "L-System Circles",
		description: "Concentric circles drawn using an L-System"
	},
	{
		id: "017",
		name: "Space Tree",
		description: "Tree drawing using space colonization techniques"
	},
	{
		id: "019",
		name: "Superellipse",
		description: "Closed curves resembling an ellipse; Lamé curve"
	},
	{
		id: "021",
		name: "Mandelbrot",
		description: "Courtesy of Adrient Douady, named for Benoit Mandelbrot"
	},
	{
		id: "022",
		name: "Julia",
		description: "Courtesy of Gaston Julia"
	},
	{
		id: "023",
		name: "2D Supershape",
		description: "Extending the Lamé curve"
	},
	{
		id: "024",
		name: "Perlin Flow",
		description: "Two-dimensional Perlin noise flow field"
	},
	{
		id: "026",
		name: "3D Supershape",
		description: "Extending the Lamé curve and beyond"
	},
	{
		id: "027",
		name: "Fireworks",
		description: "Party like it's the fourth of July"
	},
	{
		id: "028",
		name: "Metaballs",
		description: "You read that wrong"
	},
	{
		id: "030",
		name: "Phyllotaxis",
		description: "Leaf arrangement"
	},
	{
		id: "033",
		name: "Poisson-Disc Sampling",
		description: "Evenly, but random point distribution"
	},
	{
		id: "086",
		name: "Cube Wave",
		description: "Cube wave animation by 'Bees and Bombs'"
	},
	{
		id: "145",
		name: "2D Ray Casting",
		description: "Real-time ray casting simulation in 2D"
	},
	{
		id: "149",
		name: "Tic Tac Toe",
		description: "It's tic tac toe...what more do you need?"
	}
] as Challenge[];

export function importChallenge(challenge: Challenge) {
	return import(`../challenges/${challenge.id}/sketch.js`)
}
