function veHinh1(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dieuKien = j < i + 1;
            str += dieuKien ? '*' : ' ';
        }
        console.log(str);
    }
}
function veHinh2(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dieuKien = j >= i;
            str += dieuKien ? '*' : ' ';
        }
        console.log(str);
    }
}
function veHinh3(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dieuKien = j <= n + 1 - i;
            str += dieuKien ? '*' : ' ';
        }
        console.log(str);
    }
}
function veHinh4(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dieuKien = j >= n + 1 - i;
            str += dieuKien ? '*' : ' ';
        }
        console.log(str);
    }
}
function veHinh5(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n * 2 - 1; j++) {
            const dieuKien = Math.abs(j - n) < i;
            str += dieuKien ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh() {
    
}

