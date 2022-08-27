const removeFromArray = function(ar, ...args) {
    args.forEach(element => {
        for( var i = 0; i < ar.length; i++){ 
                                    
            if ( ar[i] === element) { 
                ar.splice(i, 1); 
                i--; 
            }
        }
    });
    return ar;

};

// Do not edit below this line
module.exports = removeFromArray;
