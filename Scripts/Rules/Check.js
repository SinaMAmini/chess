function isChecked(_KingSquare , _Color){
    let kingRow = _KingSquare.square.row - 1;
    let kingColumn = _KingSquare.square.column.charCodeAt(0) - 97;
    console.log(kingColumn , kingRow);
    // Enemy Pawn Check
    if(_Color == Color.White){
        if(ChessBoard[kingRow + 1][kingColumn - 1] != null){
            if(ChessBoard[kingRow + 1][kingColumn - 1].piece == ChessPiece.pawn && ChessBoard[kingRow + 1][kingColumn - 1].color == Color.Black){
                console.log("illegal");
                return false;
            }
        }
        else if(ChessBoard[kingRow + 1][kingColumn + 1] != null){
            if(ChessBoard[kingRow + 1][kingColumn + 1].piece == ChessPiece.pawn && ChessBoard[kingRow + 1][kingColumn + 1].color == Color.Black){
                console.log("illegal");
                return false;
            }
        }
    }
    else if(_Color == Color.Black){
        if(ChessBoard[kingRow - 1][kingColumn - 1] != null){
            if(ChessBoard[kingRow - 1][kingColumn - 1].piece == ChessPiece.pawn && ChessBoard[kingRow - 1][kingColumn - 1].color == Color.White){
                console.log("illegal");
                return false;
            }
        }
        else if(ChessBoard[kingRow - 1][kingColumn + 1] != null){
            if(ChessBoard[kingRow - 1][kingColumn + 1].piece == ChessPiece.pawn && ChessBoard[kingRow - 1][kingColumn + 1].color == Color.White){
                console.log("illegal");
                return false;
            }
        }
    }

    // Enemy Knight Check
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if((Math.abs(i - kingRow) == 1 && Math.abs(j - kingColumn) == 2) || (Math.abs(i - kingRow) == 2 && Math.abs(j - kingColumn) == 1)){
                if(ChessBoard[i][j] != null){
                    if(ChessBoard[i][j].piece == ChessPiece.knight && ChessBoard[i][j].color != _Color){
                        console.log("illegal");
                        return false;
                    }
                }
            }
        }
    }
    
    // Enemy Bishop or Queen check
    for(let i = kingRow - 1 , j = kingColumn - 1; i >= 0 && j >= 0; i-- , j--){
        if(ChessBoard[i][j] != null){
            if((ChessBoard[i][j].piece == ChessPiece.bishop || ChessBoard[i][j].piece == ChessPiece.queen) && ChessBoard[i][j].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }
    for(let i = kingRow + 1 , j = kingColumn - 1; i < 8 && j >= 0; i++ , j--){
        if(ChessBoard[i][j] != null){
            if((ChessBoard[i][j].piece == ChessPiece.bishop || ChessBoard[i][j].piece == ChessPiece.queen) && ChessBoard[i][j].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }
    for(let i = kingRow - 1 , j = kingColumn + 1; i >= 0 && j < 8; i-- , j++){
        if(ChessBoard[i][j] != null){
            if((ChessBoard[i][j].piece == ChessPiece.bishop || ChessBoard[i][j].piece == ChessPiece.queen) && ChessBoard[i][j].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }
    for(let i = kingRow + 1 , j = kingColumn + 1; i < 8 && j < 8; i++ , j++){
        if(ChessBoard[i][j] != null){
            if((ChessBoard[i][j].piece == ChessPiece.bishop || ChessBoard[i][j].piece == ChessPiece.queen) && ChessBoard[i][j].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }

    // Enemy Rook or Queen check
    for(let i = kingRow - 1; i >= 0; i--){
        if(ChessBoard[i][kingColumn] != null){
            if((ChessBoard[i][kingColumn].piece == ChessPiece.rook || ChessBoard[i][kingColumn].piece == ChessPiece.queen) && ChessBoard[i][kingColumn].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }
    for(let i = kingRow + 1; i < 8; i++){
        if(ChessBoard[i][kingColumn] != null){
            if((ChessBoard[i][kingColumn].piece == ChessPiece.rook || ChessBoard[i][kingColumn].piece == ChessPiece.queen) && ChessBoard[i][kingColumn].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }
    for(let i = kingColumn - 1; i >= 0; i--){
        if(ChessBoard[kingRow][i] != null){
            if((ChessBoard[kingRow][i].piece == ChessPiece.rook || ChessBoard[kingRow][i].piece == ChessPiece.queen) && ChessBoard[kingRow][i].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }
    for(let i = kingColumn + 1; i < 8; i++){
        if(ChessBoard[kingRow][i] != null){
            if((ChessBoard[kingRow][i].piece == ChessPiece.rook || ChessBoard[kingRow][i].piece == ChessPiece.queen) && ChessBoard[kingRow][i].color != _Color){
                console.log("illegal");
                return false;
            }
            else{break;}
        }
    }

    // Enemy King!!!
    /*for(let i = kingRow + 1; i >= kingRow - 1 && i >= 0; i--){
        for(let j = kingColumn + 1; j >= kingColumn - 1 && j >= 0; j--){
            console.log(i , j);
            if(ChessBoard[i][j] != null){
                if(ChessBoard[i][j].piece == ChessPiece.king && ChessBoard[i][j].color != _Color){
                    console.log('Khak to saret!');
                    return false;
                }
            }
        }
    }*/
    return true;
}