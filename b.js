function veHinh(n, checkPoint, getColumns) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        const soCot = getColumns ? getColumns(n) : n;
        for (let j = 1; j <= soCot; j++) {
            const dieuKien = checkPoint(i, j, n);
            str += dieuKien ? '*' : ' ';
        }
        console.log(str);
    }
}

// veHinh(6, (i, j, n) => j <= i);
// veHinh(6, (i, j, n) => j >= i);
// veHinh(6, (i, j, n) => j <= n + 1 - i);
// veHinh(6, (i, j, n) => j > n - i);
// veHinh(6, (i, j, n) => Math.abs(j - n) < i, n => n * 2 - 1);

/* 
n = 7;
   *
  ***
 *****
*******
 *****
  ***
   *
*/

veHinh(9, (i, j, n) => {
    const center = (n + 1) / 2;
    if (i <= center) return Math.abs(j - center) < i;
    return Math.abs(j - center) <= n - i;
});
