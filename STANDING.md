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

## Lifetime standing 🧞
Name | Lifetime Score | Games played 
-|-|-
Andy | 141 | 6.67
Katie | 122 | 6.67
Kevin | 121 | 6.67
Emily | 109 | 6.67
Brooke | 82 | 4
Diego | 48 | 2.33