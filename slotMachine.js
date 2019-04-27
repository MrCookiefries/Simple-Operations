function spin() {
  const slotMachine = {};
  const chances = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  slotMachine.a = chances[Math.floor(Math.random() * 9)];
  slotMachine.b = chances[Math.floor(Math.random() * 9)];
  slotMachine.c = chances[Math.floor(Math.random() * 9)];
  let outcome;
  if (slotMachine.a === slotMachine.b && slotMachine.b === slotMachine.c) {
    outcome = "Grand Prize";
  } else if (slotMachine.a === slotMachine.b || slotMachine.b === slotMachine.c || slotMachine.c === slotMachine.a) {
    outcome = "Small Prize";
  } else {
    outcome = "No Prize";
  };
  let results = `| ${slotMachine.a} | ${slotMachine.b} | ${slotMachine.c} |`;
  document.getElementById('S1 Slots').innerHTML = results;
  document.getElementById('Outcome').innerHTML = outcome;
};