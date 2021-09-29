class Move{
    begin = new Square();
    beginID;
    end = new Square();
    endID;
    Property;
    isCaptured = new Boolean();
    constructor(_begin = null , _end = null , _piece = null , _beginID = null , _endID = null , _isCaptured = null){
        this.begin = _begin;
        this.end = _end;
        this.Property = _piece;
        this.beginID = _beginID
        this.endID = _endID
    }
}