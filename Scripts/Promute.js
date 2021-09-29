function PromuteTime(_id){
    if(isItPromuteTime){
        let newPiece;
        if(_id == 'queen'){
            if(turn == Color.White){
                newPiece = new WhiteQueen(secondSqu);
            }
            if(turn == Color.Black){
                newPiece = new BlackQueen(secondSqu);
            }
        }
        else if(_id == 'rook'){
            if(turn == Color.White){
            newPiece = new WhiteRook(secondSqu);
            }
            if(turn == Color.Black){
            newPiece = new BlackRook(secondSqu);
            }
        }
        else if(_id == 'bishop'){
            if(turn == Color.White){
            newPiece = new WhiteBishop(secondSqu);
            }
            if(turn == Color.Black){
            newPiece = new BlackBishop(secondSqu);
            }
        }
        else if(_id == 'knight'){
            if(turn == Color.White){
            newPiece = new WhiteKnight(secondSqu);
            }
            if(turn == Color.Black){
            newPiece = new BlackKnight(secondSqu);
            }
        }

        Moves[ThisMove] = new Move(firstSqu ,secondSqu , newPiece);
        ThisMove++;

        document.getElementById(id2).innerHTML = newPiece.htmlCode;

        ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97] = newPiece;
        ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97].square = new Square(secondSqu.column , secondSqu.row);

        if(turn == Color.White)
            {turn = Color.Black;}
        else
            {turn = Color.White;}

        document.getElementById("queen").style.opacity = '0.15';
        document.getElementById("rook").style.opacity = '0.15';
        document.getElementById("bishop").style.opacity = '0.15';
        document.getElementById("knight").style.opacity = '0.15';

        isItPromuteTime = false;
    }
}
