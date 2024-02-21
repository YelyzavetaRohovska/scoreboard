import { IMatch, ITeam } from "./types/interfaces";
import { FootballMatchCollection } from "./footballMatchCollection";
import { IDGenerator } from "./utils/idGenerator";

export class FootballMatch {
    private _id: number;
    private homeTeam: ITeam;
    private awayTeam: ITeam;
    private startedAt: Date;

    private matches = FootballMatchCollection.getInstance();

    constructor(homeTeam: string, awayTeam: string) {
        this._id = IDGenerator.generate();
        this.startedAt = new Date();

        this.homeTeam = { name: homeTeam, score: 0 };
        this.awayTeam = { name: awayTeam, score: 0 };

        this.matches.addItem({
            _id: this._id,
            homeTeam: this.homeTeam,
            awayTeam: this.awayTeam,
            startedAt: this.startedAt,
        });
    }

    updateScore(homeScore: number, awayScore: number): IMatch {
        if (
            !Number.isInteger(homeScore) 
            || homeScore < 0
            || !Number.isInteger(awayScore)
            || awayScore < 0
        ) {
            throw new Error("Please provide a positive integer value for the score!");
        }

        this.homeTeam.score = homeScore;
        this.awayTeam.score = awayScore;

        return this.matches.updateItem(this._id, {
            homeTeam: this.homeTeam,
            awayTeam: this.awayTeam,
        });
    }

    finishMatch(): number {
        this.matches.removeItem(this._id);
        return this._id;
    }

    getId(): number {
        return this._id;
    }
}