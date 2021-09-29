class WhiteQueen{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.queen;
    color = Color.White;
    point = 9;
    static Img = "Style/Chess Pieces/White Queen.svg";
    htmlCode = `<img src="${WhiteQueen.Img}" width="100" height="100">`;
    square;
}

class BlackQueen{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.queen;
    color = Color.Black;
    point = 9;
    static Img = "Style/Chess Pieces/Black Queen.svg";
    htmlCode = `<img src="${BlackQueen.Img}" width="100" height="100">`;
    square;
}