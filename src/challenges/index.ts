export type Challenge = {
	id: string;
	name: string;
	description: string;
	date: string;
	sketch: () => Promise<{ default: any }>;
};

export default [
	{
		id: "001",
		name: "Starfield",
		description: "A simple starfield animation.",
		date: "2016-04-12",
		sketch: () => import("./001/sketch.js"),
	},
	{
		id: "002",
		name: "Menger Sponge",
		description: "Procedurally generated fractal curve.",
		date: "2016-04-12",
		sketch: () => import("./002/sketch.js"),
	},
] as Challenge[];
