import { g } from "./global";
import { Upgrade } from "./upgrade";

let upgrade1 = new Upgrade(
    10,
    1,
    "Upgrade Type 1",
    () => {
        g.bananas -= upgrade1.price;
        upgrade1.level += 1;
        upgrade1.price = Math.pow(2, upgrade1.level);
        g.additiveFlatBonus = upgrade1.level;
    },
);

let upgrade2 = new Upgrade(
    10,
    10,
    "Upgrade Type 2",
    () => {
        g.bananas -= upgrade2.price;
        upgrade2.level += 1;
        upgrade2.price = 10 * upgrade2.level + 10;
        g.additivePercentBonus = 0.5 * upgrade2.level;
    },
);

let upgrade3 = new Upgrade(
    10,
    100,
    "Upgrade Type 3",
    () => {
        g.bananas -= upgrade3.price;
        upgrade3.level += 1;
        upgrade3.price = 5 * upgrade3.level + 100;
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
