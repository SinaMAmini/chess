console.log("Hello world!")

let ChessBoard = new Array();
let thisWhiteKing = new WhiteKing(new Square('e' , 1)) 
let thisBlackKing = new BlackKing(new Square('e' , 8)) 

let firstClick = true;
let selectedDarkSquare = 'darkgreen';
let selectedLightSquare = 'darkgrey';
let unselectedDarkSquare = 'green';
let unselectedLightSquare = 'thistle';

let turn = Color.White;
let Moves = new Array();
let ThisMove = 0;
let WhiteLongCastle , WhiteShortCastle;
let BlackLongCastle , BlackShortCastle;

function start(){
    ChessBoard = 
    [
        [new WhiteRook(new Square('a' , 1)) , new WhiteKnight(new Square('b' , 1)) , new WhiteBishop(new Square('c' , 1)) , new WhiteQueen(new Square('d' , 1)) , thisWhiteKing, new WhiteBishop(new Square('f' , 1)) , new WhiteKnight(new Square('g' , 1)) , new WhiteRook(new Square('h' , 1))],
        [new WhitePawn(new Square('a' , 2)) , new WhitePawn(new Square('b' , 2)), new WhitePawn(new Square('c' , 2)), new WhitePawn(new Square('d' , 2)), new WhitePawn(new Square('e' , 2)), new WhitePawn(new Square('f' , 2)), new WhitePawn(new Square('g' , 2)), new WhitePawn(new Square('h' , 2))],
        [null , null , null , null , null , null , null , null],
        [null , null , null , null , null , null , null , null],
        [null , null , null , null , null , null , null , null],
        [null , null , null , null , null , null , null , null],
        [new BlackPawn(new Square('a' , 7)) , new BlackPawn(new Square('b' , 7)), new BlackPawn(new Square('c' , 7)), new BlackPawn(new Square('d' , 7)), new BlackPawn(new Square('e' , 7)), new BlackPawn(new Square('f' , 7)), new BlackPawn(new Square('g' , 7)), new BlackPawn(new Square('h' , 7))],
        [new BlackRook(new Square('a' , 8)) , new BlackKnight(new Square('b' , 8)) , new BlackBishop(new Square('c' , 8)) , new BlackQueen(new Square('d' , 8)) ,thisBlackKing, new BlackBishop(new Square('f' , 8)) , new BlackKnight(new Square('g' , 8)) , new BlackRook(new Square('h' , 8))]
    ];

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(ChessBoard[i][j] != null){
                squID = ChessBoard[i][j].square.column + (ChessBoard[i][j].square.row).toString();
                document.getElementById(squID).innerHTML += ChessBoard[i][j].htmlCode;
            }
        }
    }
    turn = Color.White;
    Moves = new Array();
    ThisMove = 0;
    WhiteLongCastle = true;
    BlackLongCastle = true;
    WhiteShortCastle = true;
    BlackShortCastle = true;
}
start();