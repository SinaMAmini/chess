function RookMove(_Move){
    let isItLegal = true;

    if(_Move.begin.column != _Move.end.column && _Move.begin.row != _Move.end.row){
         return false;
    }
    else{
        if(_Move.begin.column == _Move.end.column && _Move.begin.row > _Move.end.row){
            for(let i = _Move.begin.row - 1; i > _Move.end.row; i--){
                let tempSquare = new Square(_Move.begin.column , i);
                if(ChessBoard[tempSquare.row - 1][tempSquare.column.charCodeAt(0) - 97] != null){
                    isItLegal = false;
                }
            }
        }
        else if(_Move.begin.column == _Move.end.column && _Move.begin.row < _Move.end.row){
            for(let i = _Move.end.row - 1; i > _Move.begin.row; i--){
                let tempSquare = new Square(_Move.begin.column , i);
                if(ChessBoard[tempSquare.row - 1][tempSquare.column.charCodeAt(0) - 97] != null){
                    isItLegal = false;
                }
            }
        }
        else if(_Move.begin.row == _Move.end.row && _Move.begin.column.charCodeAt(0) > _Move.end.column.charCodeAt(0)){
            for(let i = _Move.begin.column.charCodeAt(0) - 1; i > _Move.end.column.charCodeAt(0); i--){
                let tempSquare = new Square(String.fromCharCode(i) , _Move.begin.row);
                if(ChessBoard[tempSquare.row - 1][tempSquare.column.charCodeAt(0) - 97] != null){
                    isItLegal = false;
                }
            }
        }
        else{
            for(let i = _Move.end.column.charCodeAt(0) - 1; i > _Move.begin.column.charCodeAt(0); i--){
                let tempSquare = new Square(String.fromCharCode(i) , _Move.begin.row);
                if(ChessBoard[tempSquare.row - 1][tempSquare.column.charCodeAt(0) - 97] != null){
                    isItLegal = false;
                }
            }
        }
   }

    return isItLegal;
}

function PawnMove(_Move , _color){
    let isItLegal = true;
    if(_color == Color.White){
        if (_Move.end.row <= _Move.begin.row){
            isItLegal = false;
        }
        else{
            if(_Move.begin.row == 2 && _Move.end.row == 4 && _Move.begin.column == _Move.end.column && ChessBoard[2][_Move.begin.column.charCodeAt(0) - 97] == null && ChessBoard[3][_Move.begin.column.charCodeAt(0) - 97] == null){
                isItLegal = true;
            }
            else if(_Move.end.row - _Move.begin.row >= 2){
                isItLegal = false;
            }
            else if(_Move.isCaptured && _Move.begin.row + 1 == _Move.end.row && Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0)) == 1){
                isItLegal = true;
            }
            else if(_Move.begin.row == 5 && _Move.end.row == 6 && Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0)) == 1 &&
            Moves[ThisMove - 1].Property == ChessPiece.pawn && Moves[ThisMove - 1].begin.row == 7 && Moves[ThisMove - 1].end.row == 5 && Moves[ThisMove - 1].end.column.charCodeAt(0) == _Move.end.column.charCodeAt(0)){
                isItLegal = true;
                enPassan = true;
            }
            else if(ChessBoard[_Move.end.row - 1][_Move.begin.column.charCodeAt(0) - 97] != null){
                isItLegal = false;
            }
            else if(_Move.begin.column.charCodeAt(0) != _Move.end.column.charCodeAt(0)){
                isItLegal = false;
            }
        }
    }
    else{
        if (_Move.end.row >= _Move.begin.row){
            isItLegal = false;
        }
        else{
            if(_Move.begin.row == 7 && _Move.end.row == 5 && _Move.begin.column == _Move.end.column && ChessBoard[5][_Move.begin.column.charCodeAt(0) - 97] == null && ChessBoard[4][_Move.begin.column.charCodeAt(0) - 97] == null){
                isItLegal = true;
            }
            else if(_Move.begin.row - _Move.end.row >= 2){
                isItLegal = false;
            }
            else if(_Move.isCaptured && _Move.begin.row - 1 == _Move.end.row && Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0)) == 1){
                isItLegal = true;
            }
            else if(_Move.begin.row == 4 && _Move.end.row == 3 && Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0)) == 1 &&
            Moves[ThisMove - 1].Property == ChessPiece.pawn && Moves[ThisMove - 1].begin.row == 2 && Moves[ThisMove - 1].end.row == 4 && Moves[ThisMove - 1].end.column == _Move.end.column){
                isItLegal = true;
                enPassan = true;
            }
            else if(ChessBoard[_Move.end.row - 1][_Move.begin.column.charCodeAt(0) - 97] != null){
                isItLegal = false;
            }
            else if(_Move.begin.column.charCodeAt(0) != _Move.end.column.charCodeAt(0)){
                isItLegal = false;
            }
        }
    }

    return isItLegal;
}

function BishopMove(_Move){
    isItLegal = true;

    if(Math.abs(_Move.begin.row - _Move.end.row) != Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0))){
        isItLegal = false;
    }
    else{
        if(_Move.begin.row > _Move.end.row && _Move.begin.column.charCodeAt(0) > _Move.end.column.charCodeAt(0)){
            for(let i = _Move.begin.row - 1 , j = _Move.begin.column.charCodeAt(0) - 98; i > _Move.end.row; i-- , j--){
                if(ChessBoard[i - 1][j] != null){
                    isItLegal = false;
                }
            }
        }
        else if(_Move.begin.row < _Move.end.row && _Move.begin.column.charCodeAt(0) > _Move.end.column.charCodeAt(0)){
            for(let i = _Move.begin.row + 1 , j = _Move.begin.column.charCodeAt(0) - 98; i < _Move.end.row; i++ , j--){
                if(ChessBoard[i - 1][j] != null){
                    isItLegal = false;
                }
            }
        }
        else if(_Move.begin.row > _Move.end.row && _Move.begin.column.charCodeAt(0) < _Move.end.column.charCodeAt(0)){
            for(let i = _Move.begin.row - 1 , j = _Move.begin.column.charCodeAt(0) - 96; i > _Move.end.row; i-- , j++){
                if(ChessBoard[i - 1][j] != null){
                    isItLegal = false;
                }
            }
        }
        else{
            for(let i = _Move.begin.row + 1 , j = _Move.begin.column.charCodeAt(0) - 96; i < _Move.end.row; i++ , j++){
                if(ChessBoard[i - 1][j] != null){
                    isItLegal = false;
                }
            }
        }
    }

    return isItLegal;
}

function KingMove(_Move){
    let isItLegal = false;
    if(Math.abs(_Move.begin.row - _Move.end.row) <= 1 && Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0)) <= 1){
        isItLegal = true;
    }
    return isItLegal;
}

function KnightMove(_Move){
    let isItLegal = false;
    if((Math.abs(_Move.begin.row - _Move.end.row) == 2 && Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0)) == 1) || (Math.abs(_Move.begin.row - _Move.end.row) == 1 && Math.abs(_Move.begin.column.charCodeAt(0) - _Move.end.column.charCodeAt(0)) == 2)){
        isItLegal = true
    }
    return isItLegal
}

function Castle(_Move , _color){
    if(_color == Color.White && _Move.begin.row == 1 && _Move.begin.column == 'e' && _Move.end.row == 1 && _Move.end.column == 'g' && WhiteShortCastle){
        if(ChessBoard[0][5] == null){
            firstSquHelp = new Square('h' , 1);
            secondSquHelp = new Square('f' , 1);
            helpMove = new Move(firstSquHelp , secondSquHelp);
            id1Help = 'h1';
            id2Help = 'f1';

            return true;
        }
    }
    else if(_color == Color.White && _Move.begin.row == 1 && _Move.begin.column == 'e' && _Move.end.row == 1 && _Move.end.column == 'c' && WhiteLongCastle){
        if(ChessBoard[0][3] == null && ChessBoard[0][1] == null){
            firstSquHelp = new Square('a' , 1);
            secondSquHelp = new Square('c' , 1);
            helpMove = new Move(firstSquHelp , secondSquHelp);
            id1Help = 'a1';
            id2Help = 'c1';

            return true;
        }
    }
    else if(_color == Color.Black && _Move.begin.row == 8 && _Move.begin.column == 'e' && _Move.end.row == 8 && _Move.end.column == 'g' && BlackShortCastle){
        if(ChessBoard[7][5] == null){
            firstSquHelp = new Square('h' , 8);
            secondSquHelp = new Square('f' , 8);
            helpMove = new Move(firstSquHelp , secondSquHelp);
            id1Help = 'h8';
            id2Help = 'f8';

            return true;
        }
    }
    else if(_color == Color.Black && _Move.begin.row == 8 && _Move.begin.column == 'e' && _Move.end.row == 8 && _Move.end.column == 'c' && BlackLongCastle){
        if(ChessBoard[7][3] == null && ChessBoard[7][1] == null){
            firstSquHelp = new Square('a' , 8);
            secondSquHelp = new Square('c' , 8);
            helpMove = new Move(firstSquHelp , secondSquHelp);
            id1Help = 'a8';
            id2Help = 'c8';

            return true;
        }
    }
    return false;
}

function IsPromute(_Move , _Color){
}