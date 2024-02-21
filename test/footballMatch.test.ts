import { FootballMatch } from "../src/footballMatch";
import { FootballMatchCollection } from "../src/footballMatchCollection";

describe("FootballMatch", () => {
    let match: FootballMatch;
    let mockedMatch = {
        homeTeam: { name: "Home team", score: 0 },
        awayTeam: { name: "Away team", score: 0 },
    };

    const matchCollection = new FootballMatchCollection();

    beforeAll(() => {
        match = new FootballMatch(mockedMatch.homeTeam.name, mockedMatch.awayTeam.name);
    });

    it("should a new match has 0-0 score", () => {
        const [ matchDoc ] = matchCollection.findItems((m) => m._id == match.getId());

        expect(matchDoc.homeTeam.score).toEqual(mockedMatch.homeTeam.score);
        expect(matchDoc.awayTeam.score).toEqual(mockedMatch.awayTeam.score);
    });

    it("should be possible to update a match score", () => {
        mockedMatch.homeTeam.score = 2;
        mockedMatch.awayTeam.score = 3;

        const { homeTeam, awayTeam } = match.updateScore(mockedMatch.homeTeam.score, mockedMatch.awayTeam.score);
       
        expect(homeTeam.score).toBe(mockedMatch.homeTeam.score);
        expect(awayTeam.score).toBe(mockedMatch.awayTeam.score);
    });

    it("should throw if update score is not a positive integers", () => {
        const notAllowedScore = -1;
        const notAllowedScore2 = 9.7;
        const errorString = "Please provide a positive integer value for the score!";

        expect(match.updateScore.bind(match, notAllowedScore, notAllowedScore2)).toThrow(errorString);
    });

    it("should be possible to finish current in progress match", () => {
        match.finishMatch();

        expect(matchCollection.findItems().length).toBe(0);
    });
});