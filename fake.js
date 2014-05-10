function fake(n, matches) {
    for (var i = 1; i <= n; i++) {
        var name = document.getElementById("Name-" + i);
        name.value = "person " + i;
        var rank = document.getElementById("Rank-" + i);
        rank.selectedIndex = 7 * Math.random() + 1;
        
        var odd = (i % 2 == 0 ? i-1 : i);
        var even = odd + 1;
        setMatch(even/2, odd, even);
    }
    
    for (var i = 1; i <= matches; i++) {
        var match = document.getElementById("Match-" + i);
        match.selectedIndex = 2 * Math.random() + 1;

        // Fire the event handlers
        if (document.createEvent ) {
            var ev = document.createEvent('HTMLEvents');
            ev.initEvent('change', true, false);
            match.dispatchEvent(ev);
        } else { // Internet Explorer
            match.fireEvent('oncontextmenu');
        }
    }
}