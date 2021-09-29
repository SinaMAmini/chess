class WhiteRook{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.rook;
    point = 5;
    color = Color.White;
    static Img = "Style/Chess Pieces/White Rook.svg";
    htmlCode = `<img src="${WhiteRook.Img}" width="100" height="100">`
    square;
}

class BlackRook{
    constructor(_square){
        this.square = _square;
    }
    piece = ChessPiece.rook;
    color = Color.Black;
    point = 5;
    static Img = "Style/Chess Pieces/Black Rook.svg";
    htmlCode = `<img src="${BlackRook.Img}" width="100" height="100">`
    square;
}