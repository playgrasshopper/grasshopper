# Player standings

Player standings are based on their mean score per game. For each player we:

- **Calculate each game equivalent** - Take each game and divide the number of rounds by three. If the game was 3 rounds, then it is worth 1. A game of 4 rounds is 1.333333333333333333 to the nearest value availble as a double precision floating point number.
- **Total games** - We add up all the games.
- **Total score** - We add up all the scores across games.
- **Calcualte Magic Index** - The magic index is the total score divided by the player's summed total game equivalents. We do a mean.

## Magic order 🧙
Name | Lifetime Score | Games played | Magic index
-|-|-|-
Emily | 109 | 6.67 | 16.35
Kevin | 121 | 6.67 | 18.15
Katie | 122 | 6.67 | 18.3
Brooke | 82 | 4 | 20.5
Diego | 48 | 2.33 | 20.57
Andy | 141 | 6.67 | 21.15
0 | 2020 | NaN | NaN
1 | 3 | NaN | NaN
2 | 30 | NaN | NaN
3 | 7 | NaN | NaN
4 | 55 | NaN | NaN
5 | 21 | NaN | NaN
6 | 25 | NaN | NaN

## Lifetime standing 🧞
Name | Lifetime Score | Games played 
-|-|-
0 | 2020 | NaN
Andy | 141 | 6.67
Katie | 122 | 6.67
Kevin | 121 | 6.67
Emily | 109 | 6.67
Brooke | 82 | 4
4 | 55 | NaN
Diego | 48 | 2.33
2 | 30 | NaN
6 | 25 | NaN
5 | 21 | NaN
3 | 7 | NaN
1 | 3 | NaN