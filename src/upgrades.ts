import { g } from "./global";
import { Upgrade } from "./upgrade";

let upgrade1 = new Upgrade(
    10,
    1,
    "Upgrade Type 1",
    () => {
        upgrade1.level += 1;
        upgrade1.price = Math.pow(2, upgrade1.level - 1);
        g.additiveFlatBonus = upgrade1.level;
    },
);

let upgrade2 = new Upgrade(
    10,
    10,
    "Upgrade Type 2",
    () => {
        upgrade2.level += 1;
        upgrade2.price = 10 * upgrade2.level;
        g.additivePercentBonus = 0.5 * upgrade2.level;
    },
);

let upgrade3 = new Upgrade(
    10,
    100,
    "Upgrade Type 3",
    () => {
        upgrade3.level += 1;
        upgrade3.price = 5 * upgrade3.level + 5;
        g.additivePercentBonus = 0.05 * upgrade3.level;
    },
);

// new Upgrade(
//     1,
//     1,
//     "",
//     () => {},
// ),

export let upgrades: Upgrade[] = [
    upgrade1,
    upgrade2,
    upgrade3,
];
