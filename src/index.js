import Character from './js/character';
import Team from './js/team';

const char1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const char2 = new Character('Мечник', 'Swordsman', 60, 1, 50, 20);

const team = new Team();
team.add(char1);
team.add(char2);

for (const char of team) {
  console.log(char);
}
