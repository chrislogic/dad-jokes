export interface Joke {
  id: number;
  content: string;
}

export function randomJoke(currentJokeId?: number) {
  while (true) {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];

    if (joke.id === currentJokeId) {
      continue;
    }

    return joke;
  }
}

export const jokes: Joke[] = [
  {
    id: 1,
    content:
      "What do you call a factory that makes okay products? A satisfactory.",
  },
  {
    id: 2,
    content:
      "Have you heard about the chocolate record player? It sounds pretty sweet.",
  },
  {
    id: 3,
    content: "What did the ocean say to the beach? Nothing, it just waved.",
  },
  {
    id: 4,
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
  },
  {
    id: 5,
    content: "What do you call a fake noodle? An impasta.",
  },
  {
    id: 6,
    content: `I only know 25 letters of the alphabet. I don't know y.`,
  },
  {
    id: 7,
    content: "Where do fruits go on vacation? Pear-is!",
  },
  {
    id: 8,
    content: "What do you call a belt made out of watches? A waist of time.",
  },
  {
    id: 9,
    content: `Did you hear the rumor about butter? Well, I'm not going to spread it!`,
  },
  {
    id: 10,
    content: "Why couldn't the bicycle stand up by itself? It was two tired.",
  },
  {
    id: 11,
    content: "How do you make 7 even? Take away the s.",
  },
  {
    id: 12,
    content: "What does a bee use to brush its hair? A honeycomb!",
  },
  {
    id: 13,
    content: `I'm on a seafood diet. I see food and I eat it.`,
  },
  {
    id: 14,
    content: `I've got a great joke about construction, but I'm still working on it.`,
  },
  {
    id: 15,
    content: `Mountains aren't just funny. They're hill areas.`,
  },
];
