# Player standings

Player standings are based on their mean score per game. For each player we:

- **Calculate each game equivalent** - Take each game and divide the number of rounds by three. If the game was 3 rounds, then it is worth 1. A game of 4 rounds is 1.333333333333333333 to the nearest value availble as a double precision floating point number.
- **Total games** - We add up all the games.
- **Total score** - We add up all the scores across games.
- **Calcualte Magic Index** - The magic index is the total score divided by the player's summed total game equivalents. We do a mean.

## Magic order 🧙
Name | Lifetime Score | Games played | Magic index
-|-|-|-
Emily | 84 | 5.67 | 14.82
Kevin | 95 | 5.67 | 16.76
Andy | 111 | 5.67 | 19.59
Katie | 111 | 5.67 | 19.59
Brooke | 67 | 3 | 22.33
Diego | 41 | 1.33 | 30.75

## Lifetime standing 🧞
Name | Lifetime Score | Games played 
-|-|-
Andy | 111 | 5.67
Katie | 111 | 5.67
Kevin | 95 | 5.67
Emily | 84 | 5.67
Brooke | 67 | 3
Diego | 41 | 1.33