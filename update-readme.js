const fs = require("fs");

// Load and update game state
const state = JSON.parse(fs.readFileSync("game-state.json", "utf8"));

state.visits += 1;
state.pet.hunger = Math.max(0, state.pet.hunger - 1);
state.pet.happiness = Math.min(10, state.pet.happiness + 1);

const quote = state.quotes[Math.floor(Math.random() * state.quotes.length)];
fs.writeFileSync("game-state.json", JSON.stringify(state, null, 2));

// Update README content
const readme = `
# 🧸 Welcome to My Living README Game

> ${quote}

## 🧠 Visits: ${state.visits}

## 🐾 Virtual Pet Status
- Hunger: ${state.pet.hunger}/10
- Happiness: ${state.pet.happiness}/10

📝 You can **feed or play with the pet** by opening an [Issue](https://github.com/thisiskarthick-5/thisiskarthick-5/issues/new?title=Feed+the+pet)!

---

🧑‍💻 _Built with GitHub Actions & 💖_
`;

fs.writeFileSync("README.md", readme);
