import { FootballScoreboard } from "../src/footballScoreboard";
import { FootballMatch } from "../src/footballMatch";


describe("FootballScoreboard", () => {
    let match: FootballMatch;
    let matchHighestScore: FootballMatch;
    let matchMostRecent: FootballMatch;

    beforeAll(() => {
        match = new FootballMatch("Mexico", "Canada");
        matchHighestScore = new FootballMatch("Spain", "Brazil");
    });

    it("should return a scoreboard results", () => {
        const expectedResult = "1. Spain 0 - Brazil 0 \n2. Mexico 0 - Canada 0 \n\n **sorted by HighestScoreAndMostRecent.";
        const result = FootballScoreboard.getSortedMatchesResults();

        expect(result).toBe(expectedResult);
    });

    it("should sort by highest score and most recent by default", () => {
        const expectedResult = "1. Uruguay 6 - Italy 6 \n2. Spain 10 - Brazil 2 \n3. Mexico 0 - Canada 5 \n\n **sorted by HighestScoreAndMostRecent.";

        match.updateScore(0, 5);
        matchHighestScore.updateScore(10, 2);
        
        matchMostRecent = new FootballMatch("Uruguay", "Italy");
        matchMostRecent.updateScore(6, 6);

        const result = FootballScoreboard.getSortedMatchesResults();

        expect(result).toBe(expectedResult);
    });
});