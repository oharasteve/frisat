function fake(n, matches) {
    if (keepChanges()) {
        return;
    }

    // Clear old players
    for (var i = 1; i <= n; i++) {
        if (i < matches) document.getElementById("Race-" + i).value = " ";
        document.getElementById("Name-" + i).value = "";
        document.getElementById("Rank-" + i).selectedIndex = 0;
    }
    
    // Clear old matches, except final match race
    for (var i = 1; i <= matches; i++) {
        if (i < matches) document.getElementById("MatchRace-" + i).value = " ";
        document.getElementById("PlayerTop-" + i).text = "";
        document.getElementById("PlayerBot-" + i).text = "";
        document.getElementById("RankTop-" + i).value = "";
        document.getElementById("RankBot-" + i).value = "";
        document.getElementById("Table-" + i).selectedIndex = 0;

        // Loser block might not exist
        var loserName = document.getElementById("LoserName-" + i);
        if (loserName) {
            loserName.value = "";
            document.getElementById("LoserRank-" + i).value = "";
        }

        // Same for copy block
        var copyName = document.getElementById("CopyName-" + i);
        if (copyName) {
            copyName.value = "";
        }
    }
    
    // Create a mess of players
    players = Math.floor(n * Math.random()) + 1;
    for (var i = 1; i <= n; i++) {
        // Where does this player go on the board? Alternate.
        var slot = 2 * i - 1;
        if (slot > n) slot = slot - n + 1;
        
        var name = document.getElementById("Name-" + slot);
        var rank = document.getElementById("Rank-" + slot);
        if (i <= players) {
          name.value = "person " + i;
          rank.selectedIndex = Math.floor(7 * Math.random()) + 1;
        } else {
          name.value = "";
          rank.selectedIndex = 0;
        }

        var odd = (slot % 2 == 0 ? slot-1 : slot);
        var even = odd + 1;
        setMatch(even/2, odd, even);
    }

    // Pick some winners at random
    for (var i = 1; i <= matches; i++) {
        if (i > 10) {
            var q = 3;
            q = q + 1;
        }
        var which = (Math.random() <= 0.5) ? 1 : 2;
        var topBot = (which == 1 ? "Top" : "Bot")
        var name = document.getElementById("Player" + topBot + "-" + i).text;
        // window.console.log('Player' + topBot + '-' + i + ' = ****' + name + '****');
        
        // Switch if winner is blank, but make sure both aren't blank
        if (name == "") {
          which = 3 - which;
          topBot = (which == 1 ? "Top" : "Bot")
          name = document.getElementById("Player" + topBot + "-" + i).text;
          if (name == "") which = 0;
        }
        
        // Select the winner at random
        var match = document.getElementById("Match-" + i);
        match.selectedIndex = which;
        
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