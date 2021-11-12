let piece = "KinG".toLowerCase()
switch(piece){
    case "king":
        console.log("one square in any direction. especial move: castling. unable to jump over pieces");
        break
    case "queen":
        console.log("diagonally, horizontally, or vertically any number of squares. unable to jump over pieces");
        break
    case "rook":
        console.log("horizontally or vertically any number of squares. especial move: castling. unable to jump over pieces");
        break
    case "bishop":
        console.log("diagonally any number of squares. unable to jump over pieces");
        break
    case "knight":
        console.log("in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. able to jump over other pieces.");
        break
    case "pawn":
        console.log("vertically forward one square. especial move: move two squares in first move, capture one square diagonally in a forward direction, side of the board a pawn promotes into any other piece, except for a king, En Passant ");
    break
    default:
        console.log("ERRO!! PEÇA NÃO IDENTIFICADA!!!")          
}