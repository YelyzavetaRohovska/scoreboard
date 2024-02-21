export interface IMatch {
    _id:       number;
    homeTeam:  ITeam;
    awayTeam:  ITeam;
    startedAt: Date;
}

export interface ITeam {
    name:  string;
    score: number;
}
