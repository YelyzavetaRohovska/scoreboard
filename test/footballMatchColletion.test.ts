import { FootballMatchCollection } from "../src/footballMatchCollection";
import { IMatch } from "../src/types/interfaces";

describe("FootballMatchCollection", () => {
    const footballMatchCollection = new FootballMatchCollection();
    
    const matchID = -1;
    const secondMatchID = -2;

    const mockedMatch: IMatch = {
        _id: matchID,
        homeTeam: { name: "Home team", score: 0 },
        awayTeam: { name: "Away team", score: 0 },
        startedAt: new Date(),
    };

    it("should be possible to create only one instance", () => {
        const footballMatchCollection2 = new FootballMatchCollection();
        
        expect(footballMatchCollection).toBe(footballMatchCollection2);
    });

    it("should be possible to add new match", () => {
        footballMatchCollection.addItem(mockedMatch);
        const matchFromDB = footballMatchCollection.findItems((match) => match._id === matchID);
        
        expect(matchFromDB).toEqual([mockedMatch]);
    });

    it("should throw if adding match with existing id", () => {
        const errorString = "The match already exist!";

        expect(footballMatchCollection.addItem.bind(footballMatchCollection, mockedMatch)).toThrow(errorString);
    });

    it("should be possible to find matches", () => {
        const matches = footballMatchCollection.findItems();
        
        expect(matches).toEqual([mockedMatch]);
    });

    it("should be possible to add another match", () => {
        footballMatchCollection.addItem({ ...mockedMatch, _id: secondMatchID });
        
        expect(footballMatchCollection.findItems().length).toBe(2);

    });

    it("should be possible to find matches by criterias", () => {
        const matchArr = footballMatchCollection.findItems((match) => match._id === matchID);
        
        expect(matchArr).toEqual([mockedMatch]);
    });

    it("should be possible to update match by id", () => {
        const update = { homeTeam: { name: "Changed Name", score: 5 } };
        const updatedMatch = footballMatchCollection.updateItem(secondMatchID, update);

        expect(updatedMatch.homeTeam).toEqual(update.homeTeam);
    });

    it("should throw if the update match was not found", () => {
        const fakeMatchId = 9;
        const update = { startedAt: new Date() };
        const errorString = "The match not found!";

        expect(footballMatchCollection.updateItem.bind(footballMatchCollection, fakeMatchId, update))
            .toThrow(errorString);
    });

    it("should be possible to remove match", () => {
        footballMatchCollection.removeItem(secondMatchID);
        const matches = footballMatchCollection.findItems();
        
        expect(matches).toEqual([mockedMatch]);
    });
});