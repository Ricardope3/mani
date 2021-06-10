const Chief = {
  CTO: "Mike",
  CEO: "Ricardo",
  CFO: "Pepe",
} as const;

type Chiefs = typeof Chief[keyof typeof Chief];

const c :Chiefs = 'Mike';

console.log(c)