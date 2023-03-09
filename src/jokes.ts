export interface Joke {
  id: number;
  content: string;
  score: number;
}

export function randomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

export const jokes: Joke[] = [
  {
    id: 1,
    content:
      "What do you call a factory that makes okay products? A satisfactory.",
    score: 0,
  },
  {
    id: 2,
    content:
      "Have you heard about the chocolate record player? It sounds pretty sweet.",
    score: 0,
  },
  {
    id: 3,
    content: 'What did the ocean say to the beach?" "Nothing, it just waved.',
    score: 0,
  },
  {
    id: 4,
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    score: 0,
  },
  {
    id: 5,
    content: "What do you call a fake noodle? An impasta.",
    score: 0,
  },
  {
    id: 6,
    content: `I only know 25 letters of the alphabet. I don't know y.`,
    score: 0,
  },
  {
    id: 7,
    content: 'Where do fruits go on vacation?" "Pear-is!',
    score: 0,
  },
  {
    id: 8,
    content: "What do you call a belt made out of watches? A waist of time.",
    score: 0,
  },
  {
    id: 9,
    content: `Did you hear the rumor about butter? Well, I'm not going to spread it!`,
    score: 0,
  },
  {
    id: 10,
    content: "Why couldn't the bicycle stand up by itself? It was two tired.",
    score: 0,
  },
  {
    id: 11,
    content: "How do you make 7 even? Take away the s.",
    score: 0,
  },
  {
    id: 12,
    content: "What does a bee use to brush its hair? A honeycomb!",
    score: 0,
  },
  {
    id: 13,
    content: `I'm on a seafood diet. I see food and I eat it.`,
    score: 0,
  },
  {
    id: 14,
    content: `I've got a great joke about construction, but I'm still working on it.`,
    score: 0,
  },
  {
    id: 15,
    content: `Mountains aren't just funny. They're hill areas.`,
    score: 0,
  },
];
