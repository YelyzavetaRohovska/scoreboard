import { IMatch } from "../src/types/interfaces";

export class FootballMatchCollection {
    private matches: IMatch[] = [];
    private static instance: FootballMatchCollection;

    constructor() {
        if (FootballMatchCollection.instance)
            return FootballMatchCollection.instance;

        FootballMatchCollection.instance = this;
    }

    static getInstance(): FootballMatchCollection {
        if (!FootballMatchCollection.instance) {
            FootballMatchCollection.instance = new FootballMatchCollection();
        }

        return FootballMatchCollection.instance;
    }

    addItem(newMatch: IMatch): IMatch {
        if (this.matches.find(match => match._id === newMatch._id)) {
            throw new Error("The match already exist!");
        }

        this.matches.push(newMatch);
        return newMatch;
    }

    findItems(filterFn?: (match: IMatch) => boolean): IMatch[] {
        if (!filterFn) {
            return this.matches;
        }

        return this.matches.filter(filterFn);
    }

    removeItem(id: number): boolean {
        this.matches = this.matches.filter((match: IMatch) => match._id !== id);
        return true;
    }

    updateItem(id: number, update: Partial<IMatch>): IMatch {
        let updatedMatch: IMatch | undefined;

        this.matches = this.matches.map((match: IMatch): IMatch => {
            if (match._id !== id) {
                return match;
            }
            
            updatedMatch = { ...match, ...update };
            return updatedMatch;     
        });

        if (!updatedMatch) {
            throw new Error("The match not found!");
        }

        return updatedMatch;
    }
}