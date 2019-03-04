import {Player} from './player';
import {Game} from './game';

export class Gamelog {
  game: Game;
  players: Player;
  passAttempts: Number;
  passCompletions: Number;
  passPct: Number;
  passYards: Number;
  passYardsPerAttempt: Number;
  passTD: Number;
  passLng: Number;
  passInt: Number;
  pass20Plus: Number;
  pass40Plus: Number;
  passSacks: Number;
  qbRating: Number;
  rushAttempts: Number;
  rushYards: Number;
  rushAvg: Number;
  rushTD: Number;
  rushLong: Number;
  rush20Plus: Number;
  rush40Plus: Number;
  rushFumbles: Number;
  targets: Number;
  receptions: Number;
  recYards: Number;
  recAverage: Number;
  recTD: Number;
  recLng: Number;
  recFirstDowns: Number;
  rec20Plus: Number;
  rec40Plus: Number;
  recFumbles: Number;
  gameDate: String;
}
