function staircase(n) {
   for (let i = 1; i <= n; i++) {
        // Syntax: string.repeat([count]);
    console.log(" ".repeat(n-i) + "#".repeat(i))
 }
}
