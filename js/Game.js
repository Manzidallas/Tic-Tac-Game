class Game{
    constructor(){
        this.inProgress = true;
        this.winner= null; // 'O' or 'X'
        this.currentTurn= Game.O; // 'O' or 'X'
        this.movesMade = 0;
        this.squares = new Array(9).fill().map(s=> new Sqaure() );
     }
}
Game.O = "O";
Game.X = "X";