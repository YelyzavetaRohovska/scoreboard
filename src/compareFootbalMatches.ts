import { ESortType, IMatch } from "./types/interfaces";

export class CompareFootballMatches {
    static compare(matchA: IMatch, matchB: IMatch, sortType: ESortType): number {
        switch (sortType) {
            case ESortType.HighestScoreMostRecent: 
                return this.sortByHighestScoreAndMostRecent(matchA, matchB);
            case ESortType.HighestScore: 
                return this.sortByHighestScore(matchA, matchB);
            case ESortType.MostRecent: 
                return this.sortByMostRecent(matchA, matchB);
            case ESortType.None:
            default: return 0;
        }
    }

    private static sortByHighestScoreAndMostRecent(matchA: IMatch, matchB: IMatch): number {
        let highestScoreRes = this.sortByHighestScore(matchA, matchB);
        if (highestScoreRes) {
            return highestScoreRes;
        }

        let mostRecentRes = this.sortByMostRecent(matchA, matchB);
        if (mostRecentRes) {
            return mostRecentRes;
        }

        return matchB._id - matchA._id;
    }

    private static sortByHighestScore(matchA: IMatch, matchB: IMatch): number {
        return (matchB.homeTeam.score + matchB.awayTeam.score) - (matchA.homeTeam.score + matchA.awayTeam.score);
    }

    private static sortByMostRecent(matchA: IMatch, matchB: IMatch): number {
        return matchB.startedAt.getTime() - matchA.startedAt.getTime();
    }
}