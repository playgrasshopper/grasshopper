# Player standings

Player standings are based on their mean score per game. For each player we:

- **Calculate each game equivalent** - Take each game and divide the number of rounds by three. If the game was 3 rounds, then it is worth 1. A game of 4 rounds is 1.333333333333333333 to the nearest value availble as a double precision floating point number.
- **Total games** - We add up all the games.
- **Total score** - We add up all the scores across games.
- **Calcualte Magic Index** - The magic index is the total score divided by the player's summed total game equivalents. I.e. we do a mean.

## Standings

Name | Score | Games played | Magic index
-|-|-|-
Andy | 94 | 4.67 | 20.14
Katie | 77 | 4.67 | 16.5
Kevin | 71 | 4.67 | 15.21
Emily | 61 | 4.67 | 13.07
Diego | 41 | 1.33 | 30.75
Brooke | 32 | 2 | 16
