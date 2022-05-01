const team = {
  _players: [{firstName: 'Kori', lastName: 'Kross', age: 42}, 
  {firstName: 'Teia', lastName: 'TicTac', age: 50}, 
  {firstName: 'Leland', lastName: 'Larc', age: 45}],
  _games: [{opponent: 'Honey bees', teamPoints: 15, opponentPoints: 16}, 
  {opponent: 'Busters', teamPoints: 20, opponentPoints: 18}, 
  {opponent: 'Badgers', teamPoints: 25, opponentPoints: 24}],
  get players(){
    return this._players
  },
  get games(){
    return this._games
  },
  addPlayer: function(newFirstName, newLastName, newAge){
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    team._players.push(player)
  },
  addGame(newOpponent,newTeamPoints, newOpponentPoints){
    game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
}
team.addPlayer("Bugs", "Bunny", "76");
console.log(team.players)
team.addGame('Titans', 100, 98);
console.log(team.games);
/* outputs 

Output:
[
  { firstName: 'Kori', lastName: 'Kross', age: 42 },
  { firstName: 'Teia', lastName: 'TicTac', age: 50 },
  { firstName: 'Leland', lastName: 'Larc', age: 45 },
  { firstName: 'Bugs', lastName: 'Bunny', age: '76' }
]
[
  { opponent: 'Honey bees', teamPoints: 15, opponentPoints: 16 },
  { opponent: 'Busters', teamPoints: 20, opponentPoints: 18 },
  { opponent: 'Badgers', teamPoints: 25, opponentPoints: 24 },
  { opponent: 'Titans', teamPoints: 100, opponentPoints: 98 }
] */
