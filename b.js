function veHinh(n, checkPoint) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dieuKien = checkPoint(i, j, n);
            str += dieuKien ? '*' : ' ';
        }
        console.log(str);
    }
}

veHinh(6, (i, j, n) => j <= i);
veHinh(6, (i, j, n) => j >= i);
veHinh(6, (i, j, n) => j <= n + 1 - i);
veHinh(6, (i, j, n) => j >= n + 1 - i);
