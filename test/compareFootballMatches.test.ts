import { CompareFootballMatches } from "../src/compareFootbalMatches";
import { FootballMatchCollection } from "../src/footballMatchCollection";
import { FootballMatch } from "../src/footballMatch";

import { ESortType, IMatch } from "../src/types/interfaces";


describe("CompareFootballMatches", () => {
    const matchesDB = FootballMatchCollection.getInstance();

    let match: FootballMatch;
    let matchHighestScore: FootballMatch;
    let matchMostRecent: FootballMatch;

    let anotherMatch: IMatch;
    let higherScoreMatch: IMatch;
    let mostRecentMatch: IMatch;

    beforeAll(async () => {
        match = new FootballMatch("Mexico", "Canada");
        anotherMatch = match.updateScore(0, 5);

        matchHighestScore = new FootballMatch("Spain", "Brazil");
        higherScoreMatch = matchHighestScore.updateScore(10, 2);

        // Small delay to create a most recent match
        await new Promise(res => setTimeout(res, 100));

        matchMostRecent = new FootballMatch("Uruguay", "Italy");
        mostRecentMatch = matchMostRecent.updateScore(6, 6);
    });

    it(`should determine order by Highest Score and Most Recent with "${ESortType.HighestScoreMostRecent}" sort type`, () => {
        let result = CompareFootballMatches.compare(mostRecentMatch, higherScoreMatch, ESortType.HighestScoreMostRecent);
        expect(result).toBeLessThan(0);
    });

    it(`should determine order by Most Recent with "${ESortType.MostRecent}" sort type`, () => {
        const result = CompareFootballMatches.compare(mostRecentMatch, higherScoreMatch, ESortType.MostRecent);
        expect(result).toBeLessThan(0);
    });

    it(`should determine order by Highest Score with "${ESortType.HighestScore}" sort type`, () => {
        const result = CompareFootballMatches.compare(higherScoreMatch, anotherMatch, ESortType.HighestScore);
        expect(result).toBeLessThan(0);
    });

    it(`should determine results as equals by "${ESortType.None}"`, () => {
        const result = CompareFootballMatches.compare(higherScoreMatch, mostRecentMatch, ESortType.None);
        expect(result).toBe(0);
    });
});