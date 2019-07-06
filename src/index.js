module.exports = function solveSudoku(matrix) {
  // your solution
    var values = [1,2,3,4,5,6,7,8,9];
    var _sudoku = matrix;
    for (y=0; y<9; y++) {
        var _values = values.map(function(v){return v;});
        for (x=0; x<9; x++) {
            if (matrix[y][x] != 0) {
                _values.splice(_values.indexOf(matrix[y][x]), 1);
            }
        }
        for (x=0; x<9; x++) {
            if (matrix[y][x] == 0) {
                _sudoku[y][x] = _values.map(function(v){return v;});
            }
        }
    }
    return(matrix);

}
