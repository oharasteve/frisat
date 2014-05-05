function fake(n) {
    for (var i = 1; i <= n; i++) {
        var name = document.getElementById("Name-" + i);
        name.value = "person " + i;
        var rank = document.getElementById("Rank-" + i);
        rank.selectedIndex = 7 * Math.random() + 1;
        
        var odd = (i % 2 == 0 ? i-1 : i);
        setMatch(odd, odd + 1);
    }
}