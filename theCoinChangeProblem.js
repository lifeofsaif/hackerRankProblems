function solve(c, n, memo) {
    if (n == 0) {
        memo[c.length][n] = 1;
        return 1;
    }
    else if (c.length == 0) {
        memo[c.length][n] = 0;
        return 0;
    }
    if (memo[c.length][n] >= 0)
        return memo[c.length][n];
    var popped = c.pop();
    var i = 0;
    var r = 0;
    while ((i * popped) <= n) {
        r += solve(c.slice(), n - i * popped, memo);
        i++;
    }
    memo[c.length + 1][n] = r;
    return r;
}
function coinChallenge(c, n) {
    var memo = [];
    for (var i = 0; i <= c.length; i++) {
        memo.push([]);
        for (var j = 0; j < n; j++) {
            memo[i].push(-1);
        }
    }
    return solve(c, n, memo);
}
console.log(coinChallenge([2, 3, 5, 6], 10));