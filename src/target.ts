export class Target {
    public letters: string[];
    public displayString: string;
    public rewards: number[];
    public price: number;

    public constructor(
        letters: string[],
        displayString: string,
        rewards: number[],
        price: number,
    ) {
        this.letters = letters;
        this.displayString = displayString;
        this.rewards = rewards;
        this.price = price;
    }
}
