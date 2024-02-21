import { FootballMatchCollection } from './footballMatchCollection';
import { CompareFootballMatches } from './compareFootbalMatches';
import { IMatch, ESortType } from './types/interfaces';

export class FootballScoreboard {
    private static matches = FootballMatchCollection.getInstance();

    static getSortedMatchesResults(sortType: ESortType = ESortType.HighestScoreMostRecent): string {
        let matches = this.matches.findItems();
        matches = matches.sort((a, b) => CompareFootballMatches.compare(a, b, sortType));
        
        return this.getScoreboardString(matches, sortType);
    }

    private static getScoreboardString(matches: IMatch[], sortType: ESortType): string {
        let boardString = "";
        matches.forEach((match, index) => boardString += this.formateMatchString(match, index));
        
        boardString += `\n **sorted by ${sortType}.`;
        return boardString;
    }

    private static formateMatchString(match: IMatch, index: number): string {
        const { homeTeam, awayTeam } = match;
        return `${index + 1}. ${homeTeam.name} ${homeTeam.score} - ${awayTeam.name} ${awayTeam.score} \n`;
    }
}