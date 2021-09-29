class WhitePawn{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.pawn;
    color = Color.White;
    point = 1;
    static Img = "Style/Chess Pieces/White Pawn.svg";
    htmlCode = `<img src="${WhitePawn.Img}" width="100" height="100">`;
    square;
}

class BlackPawn{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.pawn;
    color = Color.Black;
    point = 1;
    static Img = "Style/Chess Pieces/Black Pawn.svg";
    htmlCode = `<img src="${BlackPawn.Img}" width="100" height="100">`;
    square;
}