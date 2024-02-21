# Live Football World Cup Scoreboard Library
> Welcome to the Live Football World Cup Scoreboard Library! This library provides functionality to manage ongoing football matches and their scores, suitable for use in sports data applications.

### Features
- Start a new match with initial score 0 – 0.
- Update the score of a match with absolute scores for the home team and away team.
- Finish a match currently in progress.
- Get a summary of matches in progress, ordered by their total score. _Matches with the same total score are ordered by the most recently started match._

<br>

# Installation

1. Clone the repository
```bash
git clone https://github.com/YelyzavetaRohovska/scoreboard.git
```

2. Install dependencies
```bash
npm install
```

3. Build the distributable files
```bash
npm run build
```

4. Import to your project, see more information in [Usage](#usage).

<br>

# Usage

Example implementation of the scoreboard:

```ts
import { FootballMatch, FootballScoreboard } from "./scoreboard";

const match1 = new FootballMatch("Mexico", "Canada");
match1.updateScore(0, 5);

const match2 = new FootballMatch("Spain", "Brazil");
match2.updateScore(10, 2);

const match3 = new FootballMatch("Germany", "France");
match3.updateScore(2, 2);

const match4 = new FootballMatch("Uruguay", "Italy");
match4.updateScore(6, 6);

const match5 = new FootballMatch("Argentina", "Australia");
match5.updateScore(3, 1);

console.log(FootballScoreboard.getSortedMatchesResults());
```

Expected result:
```bash
1. Uruguay 6 - Italy 6
2. Spain 10 - Brazil 2
3. Mexico 0 - Canada 5
4. Argentina 3 - Australia 1
5. Germany 2 - France 2
```

<br>

# Testing

This project is using Jest for testing.

```bash
npm run test
```

<br>

### Have a nice day <3


