class WhiteBishop{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.bishop;
    color = Color.White;
    point = 3;
    static Img = "Style/Chess Pieces/White Bishop.svg";
    htmlCode = `<img src="${WhiteBishop.Img}" width="100" height="100">`;
    square;
}

class BlackBishop{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.bishop;
    color = Color.Black;
    point = 3;
    static Img = "Style/Chess Pieces/Black Bishop.svg";
    htmlCode = `<img src="${BlackBishop.Img}" width="100" height="100">`;
    square;
}