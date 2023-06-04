
function rgb ( r, g, b ) {
    function docToHex(c) {
        if(c > 255) return 'FF';
        else if (c < 0 ) return '00';
        else 
            return c
                .toString(16)
                .padStart(2, '0')
                .toUpperCase();
    }
    return docToHex(r) + docToHex(g) + docToHex(b);
}

console.log(rgb(10, 15, 266))