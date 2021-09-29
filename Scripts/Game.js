let id1 , id2 , id1Help , id2Help;
let firstSqu = new Square() , secondSqu = new Square() , firstSquHelp = new Square() , secondSquHelp = new Square();
let NewMove = new Move() , helpMove = new Move();
let WeHaveHelpMove = false;
let legal = true , CheckRule = true;
let isItPromuteTime = false;
let enPassan = false;

function ClickFunction(id){
    if(firstClick){
        if(isItPromuteTime){
            return;
        }
        console.log(id1);

        id1 = id;

        console.log(id1);

        firstSqu = new Square(id.toString()[0] , parseInt(id.toString()[1]));
        console.log(firstSqu);

        if (ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97].color == turn){
            if((document.getElementById(id).className).toString() == 'Dark_Square'){
                document.getElementById(id).style.backgroundColor = selectedDarkSquare;
            }
            else if((document.getElementById(id).className).toString() == 'Light_Square'){
                document.getElementById(id).style.backgroundColor = selectedLightSquare;
            }
            firstClick = false;
        }
    }
    else{
        if(isItPromuteTime){
            return;
        }
        id2 = id;
        console.log(id2);

        secondSqu = new Square(id.toString()[0] , parseInt(id.toString()[1]));
        console.log(secondSqu);

        if (ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97] == null || ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97].color != turn){
            // Creating Movement:
            NewMove = new Move(firstSqu ,secondSqu , ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97].piece , id1.toString() , id2.toString());
            if(ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97] != null){
                if(ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97].color != turn){
                    NewMove.isCaptured = true;
                }
            }
            else{
                NewMove.isCaptured = false;
            }
            console.log(ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97]);
            console.log(ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97]);
            console.log(NewMove);

            // Rules
            if(NewMove.Property == ChessPiece.rook){
                if(RookMove(NewMove)){
                    legal = true;
                    console.log("legal");
                }
                else{
                    console.log("illegal");
                    legal = false;
                }
            }
            else if(NewMove.Property == ChessPiece.pawn){
                if(PawnMove(NewMove , turn)){
                    legal = true;
                    console.log("legal");
                }
                else{
                    legal = false;
                    console.log("illegal");
                }
            }
            else if(NewMove.Property == ChessPiece.bishop){
                if(BishopMove(NewMove)){
                    legal = true;
                    console.log("legal");
                }
                else{
                    legal = false;
                    console.log("illegal");
                }
            }
            else if(NewMove.Property == ChessPiece.queen){
                if(BishopMove(NewMove) || RookMove(NewMove)){
                    legal = true;
                    console.log("legal");
                }
                else{
                    legal = false;
                    console.log("illegal");
                }
            }
            else if(NewMove.Property == ChessPiece.king){
                if(KingMove(NewMove)){
                    legal = true;
                    console.log("legal");
                }
                else if(Castle(NewMove , turn)){
                    legal = true;
                    console.log("legal");
                    WeHaveHelpMove = true;
                }
                else{
                    legal = false;
                    console.log("illegal");
                }
            }
            else if(NewMove.Property == ChessPiece.knight){
                if(KnightMove(NewMove)){
                    legal = true;
                    console.log("legal");
                }
                else{
                    legal = false;
                    console.log("illegal");
                }
            }
            // Check rule
            if(legal){
                ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97] = ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97];
                ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97].square = new Square(id.toString()[0] , parseInt(id.toString()[1]));
                ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97] = null;
                if(turn == Color.White){
                    if(isChecked(thisWhiteKing , turn)){
                        CheckRule = true;
                        console.log("legal");
                    }
                    else{
                        CheckRule = false;
                        console.log("illegal");
                    }
                }
                else{
                    if(isChecked(thisBlackKing , turn)){
                        CheckRule = true;
                        console.log("legal");
                    }
                    else{
                        CheckRule = false;
                        console.log("illegal");
                    }
                }
                ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97] = ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97];
                ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97].square = new Square(id1.toString()[0] , parseInt(id1.toString()[1]));
                ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97] = null;
            }

            // Castle rules
            if(legal && CheckRule){
                if(turn == Color.White){
                   if(NewMove.Property == ChessPiece.king){
                       WhiteShortCastle = false;
                       WhiteLongCastle = false;
                    }
                    else if(id1.toString() == 'a1'){
                        WhiteLongCastle = false;
                    }
                    else if(id1.toString() == 'h1'){
                        WhiteShortCastle = false;
                    }
                }
                else{
                    if(NewMove.Property == ChessPiece.king){
                        BlackShortCastle = false;
                        BlackLongCastle = false;
                    }else if(id1.toString() == 'a8'){
                        BlackLongCastle = false;
                    }
                    else if(id1.toString() == 'h8'){
                        BlackShortCastle = false;
                    }
                 }
            }
            
            if(legal && CheckRule){
                // Imgs Moving:
                document.getElementById(id1).innerHTML = ``;
                document.getElementById(id2).innerHTML = ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97].htmlCode;

                // ChessBoard Moving:
                ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97] = ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97];
                ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97].square = new Square(id.toString()[0] , parseInt(id.toString()[1]));
                ChessBoard[firstSqu.row - 1][firstSqu.column.charCodeAt(0) - 97] = null;
                
                if(WeHaveHelpMove){
                    document.getElementById(id1Help).innerHTML = ``;
                    document.getElementById(id2Help).innerHTML = ChessBoard[firstSquHelp.row - 1][firstSquHelp.column.charCodeAt(0) - 97].htmlCode;

                    ChessBoard[secondSquHelp.row - 1][secondSquHelp.column.charCodeAt(0) - 97] = ChessBoard[firstSquHelp.row - 1][firstSquHelp.column.charCodeAt(0) - 97];
                    ChessBoard[secondSquHelp.row - 1][secondSquHelp.column.charCodeAt(0) - 97].square = new Square(id2Help.toString()[0] , parseInt(id2Help.toString()[1]));
                    ChessBoard[firstSquHelp.row - 1][firstSquHelp.column.charCodeAt(0) - 97] = null;

                    if(turn == Color.White){
                        WhiteLongCastle = false;
                        WhiteShortCastle = false;
                    }
                    else{
                        BlackLongCastle = false;
                        BlackShortCastle = false;
                    }
                    WeHaveHelpMove = false;
                }
                else if(NewMove.Property == ChessPiece.pawn && ((NewMove.end.row == 8 && turn == Color.White) || (NewMove.end.row == 1 && turn == Color.Black))){
                    isItPromuteTime = true;
                    document.getElementById("queen").style.opacity = '0.9';
                    document.getElementById("rook").style.opacity = '0.9';
                    document.getElementById("bishop").style.opacity = '0.9';
                    document.getElementById("knight").style.opacity = '0.9';
                    isItPromuteTime = true;
                    if((document.getElementById(id1).className).toString() == 'Dark_Square'){
                        document.getElementById(id1).style.backgroundColor = unselectedDarkSquare;
                    }
                    else if((document.getElementById(id1).className).toString() == 'Light_Square'){
                        document.getElementById(id1).style.backgroundColor = unselectedLightSquare;
                    }
                    firstClick = true;
                    return;
                }
                else if(enPassan){
                    if(turn == Color.White){
                        document.getElementById((Moves[ThisMove - 1].endID).toString()).innerHTML = ``;

                        ChessBoard[secondSqu.row - 2][secondSqu.column.charCodeAt(0) - 97] = null;
                    }
                    else{
                        document.getElementById((Moves[ThisMove - 1].endID).toString()).innerHTML = ``;

                        ChessBoard[secondSqu.row][secondSqu.column.charCodeAt(0) - 97] = null;
                    }
                    enPassan = false;
                }

                Moves[ThisMove] = new Move(firstSqu ,secondSqu , ChessBoard[secondSqu.row - 1][secondSqu.column.charCodeAt(0) - 97].piece , id1 , id2);
                ThisMove++;

                if(turn == Color.White)
                    {turn = Color.Black;}
                else
                    {turn = Color.White;}
            }
        }
        
        if((document.getElementById(id1).className).toString() == 'Dark_Square'){
            document.getElementById(id1).style.backgroundColor = unselectedDarkSquare;
        }
        else if((document.getElementById(id1).className).toString() == 'Light_Square'){
            document.getElementById(id1).style.backgroundColor = unselectedLightSquare;
        }
        firstClick = true;

        console.log(Moves);
    }
}