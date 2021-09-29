class WhiteKing{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.king;
    color = Color.White;
    point = 0;
    static Img = "./Style/Chess Pieces/White King.svg";
    htmlCode = `<img src="${WhiteKing.Img}" width="100" height="100">`;
    square;
}

class BlackKing{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.king;
    color = Color.Black;
    point = 0;
    static Img = "./Style/Chess Pieces/Black King.svg";
    htmlCode = `<img src="${BlackKing.Img}" width="100" height="100">`;
    square;
}
