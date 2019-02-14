var output = function (n) {

        //create a new nxn array
        var nxn_array = new Array(n).fill().map(()=>
        new Array(n).fill(''));
        // [[0,0,0,0],
        //  [0,0,0,0]
        //  [0,0,0,0]
        //  [0,0,0,0]]

        let counter = 0;
        let start_row = 0;
        let end_row = n-1;
        let start_column = 0;
        let end_column = n-1;


        while (start_column <= end_column && start_row <= end_row) {
                //populate => nxn_array[row=start][column = start..end]
                // [[1,2,3,4],
                //  [0,0,0,0]
                //  [0,0,0,0]
                //  [0,0,0,0]]
                for (i = start_column; i <= end_column; i ++ ) {
                    nxn_array[start_row][i] = counter
                    counter ++
                }
                //populate => nxn_array[row=1..end][column = end]
                // [[0,0,0,0],
                //  [0,0,0,5]
                //  [0,0,0,6]
                //  [0,0,0,7]]
                start_row ++
                for (j = start_row; j<= end_row; j++) {
                    nxn_array[j][end_column] = counter
                    counter ++
                }
                //populate => nxn_array[row=end][column=2..start]
                // [[0,0,0,0],
                //  [0,0,0,0]
                //  [0,0,0,0]
                //  [10,9,8,0]]
                end_column --
                for (k = end_column; k >= start_column; k-- ) {
                    nxn_array[end_row][k] = counter
                    counter ++
                }
                //populate => nxn_array[row=2..1][column=start]
                // [[ 0,0,0,0],
                //  [12,0,0,0]
                //  [11,0,0,0]
                //  [ 0,0,0,0]]
                end_row --
                for (l = end_row; l >= start_row; l-- ) {
                    nxn_array[l][start_column] = counter
                    counter ++
                }
                //populate => nxn_array[row=2][column=1..2]
                // [[0,0,0,0],
                //  [0,13,14,0]
                //  [0,0,0,0]
                //  [0,0,0,0]]
                start_column ++
        }
console.log(nxn_array)
}

output(5);