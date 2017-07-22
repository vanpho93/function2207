/*
b1
n = 6;
*
**
***
****
*****
******
---------

*/

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

// veHinh1(5);

/*

b2
n = 5
*****
 ****
  ***
   **
    *
----------

*/

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

// veHinh2(10);
/*

n = 5
b3
*****
****
***
**
*
*/

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

// veHinh3(5);

/*
b4
n = 6
     *
    **
   ***
  ****
 *****
******
----------
*/

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
// veHinh4(5);
/*
b5: n = 4
// Math.abs();
   *
  *** 
 ***** 
******* 
*/

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

veHinh5(6);
