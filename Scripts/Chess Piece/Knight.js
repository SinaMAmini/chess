class WhiteKnight{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.knight;
    color = Color.White;
    point = 3;
    static Img = "Style/Chess Pieces/White Knight.svg";
    htmlCode = `<img src="${WhiteKnight.Img}" width="100" height="100">`;
    square;
}

class BlackKnight{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.knight;
    color = Color.Black;
    point = 3;
    static Img = "Style/Chess Pieces/Black Knight.svg";
    htmlCode = `<img src="${BlackKnight.Img}" width="100" height="100">`;
    square;
}