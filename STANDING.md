# Player standings

Player standings are based on their mean score per game. For each player we:

- **Calculate each game equivalent** - Take each game and divide the number of rounds by three. If the game was 3 rounds, then it is worth 1. A game of 4 rounds is 1.333333333333333333 to the nearest value availble as a double precision floating point number.
- **Total games** - We add up all the games.
- **Total score** - We add up all the scores across games.
- **Calcualte Magic Index** - The magic index is the total score divided by the player's summed total game equivalents. We do a mean.

## Magic order 🧙
Name | Lifetime Score | Games played | Magic index
-|-|-|-
Kevin | 128 | 7.67 | 16.7
Katie | 143 | 7.67 | 18.65
Diego | 48 | 2.33 | 20.57
Emily | 164 | 7.67 | 21.39
Brooke | 107 | 5 | 21.4
Andy | 171 | 7.67 | 22.3

## Lifetime standing 🧞
Name | Lifetime Score | Games played 
-|-|-
Andy | 171 | 7.67
Emily | 164 | 7.67
Katie | 143 | 7.67
Kevin | 128 | 7.67
Brooke | 107 | 5
Diego | 48 | 2.33