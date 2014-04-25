//
// Create the whole screen
// The parameters (plan, advance) are all passed in to allow for 16 or 32 players
//
function setup(plan, advance) {
    for (row = 0; row < plan.length; row++) {
        document.write('  <tr>\n');
        var fixed = plan[row].replace(/ -. /g, ' -\\. ').     // Repair all the backslashes
                              replace(/ .- /g, ' .\\- ').
                              replace(/ .. /g, ' .\\. ');
        for (col = 0; col < fixed.length; col+=4) {
            var piece = fixed.substring(col, col+3)
            var first = piece[0];
            if (piece == '...') {
                document.write('    <td>&nbsp;</td>\n');
            } else if (first == 'N') {
                var n = parseInt(piece.substring(1, 3));
                putName(n);
            } else if (first == 'W') {
                var n = parseInt(piece.substring(1, 3));
                putWinner(advance, n, true);
            } else if (first == 'w') {
                var n = parseInt(piece.substring(1, 3));
                putWinner(advance, n, false);
            } else if (first == 'L') {
                var n = parseInt(piece.substring(1, 3));
                putLoser(advance, n, true);
            } else if (first == 'R') {
                var n = parseInt(piece.substring(1, 3));
                putLoser(advance, n, false);
            } else if (first == 'G') {
                var n = parseInt(piece.substring(1, 3));
                document.write('    <td class="Goto" rowspan="2">Loser to ' + n + '</td>\n');
            } else if (piece == 'xxx') {
                // Nothing to do, it was already done in the preceding line
            } else if (piece == './-') {
                document.write('    <td>&#x250C;</td>\n');  // Top left
            } else if (piece == '.\\-') {
                document.write('    <td>&#x2514;</td>\n');  // Bottom left
            } else if (piece == '-/.') {
                document.write('    <td>&#x2518;</td>\n');  // Bottom right
            } else if (piece == '-\\.') {
                document.write('    <td>&#x2510;</td>\n');  // Top right
            } else if (piece == '.[.' || piece == '.].') {
                document.write('    <td>&#x2502;</td>\n');    // Vertical bar
            } else if (piece == '-[.') {
                document.write('    <td>&#x2502;</td>\n');  // Left arrow: &#x2524;
            } else if (piece == '.]-') {
                document.write('    <td>&#x2502;</td>\n');  // Right arrow: &#x251C;
            } else {
                document.write('    <td>$$$' + piece + '$$$</td>\n');
            }
        }
        document.write('  </tr>\n');
    }
}

//
// Write all the html needed for the very first matches (names)
//
function putName(n) {
    var odd = (n % 2 == 0 ? n-1 : n);
    
    document.write('    <td rowspan="2">\n');
    document.write('      <select class="Rank" id="Rank-' + n + '" onchange="setMatch(' + odd + ',' + (odd+1) + ');">\n');
    document.write('        <option>Rank</option>\n');
    document.write('        <option>C</option>\n');
    document.write('        <option>B</option>\n');
    document.write('        <option>A</option>\n');
    document.write('        <option>AA</option>\n');
    document.write('        <option>AAA</option>\n');
    document.write('        <option>SP</option>\n');
    document.write('        <option>PRO</option>\n');
    document.write('      </select>\n');
    document.write('      <input class="Name" id="Name-' + n + '" onchange="setMatch(' + odd + ',' + (odd+1) + ');" type="text" value=""/>\n');
    document.write('      <input class="Race" id="Race-' + n + '" type="text" value="&nbsp;"/>&nbsp;\n');
    document.write('    </td>\n');
}

//
// Write all the html needed for a winning match
//
function putWinner(advance, n, playAgain) {
    document.write('    <td rowspan="2">&nbsp;' + n + ':\n');
    document.write('      <select class="Table">\n');
    document.write('        <option>Tbl</option>\n');
    for (var tbl = 12; tbl >= 2; tbl--) {
        document.write('        <option>#' + tbl + '</option>\n');
    }
    
    // Look where the winner of this match goes (e.g., winner of 1,2 is 25
    var tb;
    var w;
    for (var i=0; i<advance.length; i++) {
        if (advance[i][0] == n) {
            tb = "Top";
            w = advance[i][2];
            break;
        } else if (advance[i][1] == n) {
            tb = "Bot";
            w = advance[i][2];
            break;
        }
    }
    
    document.write('      </select>\n');
    document.write('      <input class="Rank" id="RankTop-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <input class="Rank" id="RankBot-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <select class="Name" id="Match-' + n + '" onchange="choseWinner(' + n + ',' + w + ',\'' + tb + '\');">\n');
    document.write('        <option>Winner</option>\n');
    document.write('        <option id="PlayerTop-' + n + '"></option>\n');
    document.write('        <option id="PlayerBot-' + n + '"></option>\n');
    document.write('      </select>\n');
    if (playAgain) {
        document.write('      <input class="Race" type="text" value="&nbsp;"/>&nbsp;\n');
    }
    document.write('    </td>\n');
}

//
// Put all the information for the loser of a match
//
function putLoser(advance, n, isLeft) {
    if (isLeft) {
        document.write('    <td class="Left" rowspan="2">&nbsp;L' + n + ':\n');
    } else {
        document.write('    <td class="Right" rowspan="2">&nbsp;W' + n + ':\n');
    }
    document.write('      <input class="Rank" disabled type="text" value=""/>\n');
    document.write('      <input class="Name" disabled type="text" value=""/>\n');
    document.write('      <input class="Race" type="text" value="&nbsp;"/>&nbsp;\n');
    document.write('    </td>\n');
}

//
// Given a pair of players(m,n), find the race between them (5/3) and update the chooser, etc
//
function setMatch(m, n) {
    var match = n / 2;

    // Update the race targets
    var RaceTop = document.getElementById("Race-" + m);
    var RaceBot = document.getElementById("Race-" + n);
    var RankTop = document.getElementById("Rank-" + m);
    var RankBot = document.getElementById("Rank-" + n);
    var target = race(RankTop.value, RankBot.value);
    RaceTop.value = target.substring(0, 1);
    RaceBot.value = target.substring(2, 3);

    // Update the Select / Option choices
    var PlayerTop = document.getElementById("PlayerTop-" + match);
    var PlayerBot = document.getElementById("PlayerBot-" + match);
    var NameTop = document.getElementById("Name-" + m);
    var NameBot = document.getElementById("Name-" + n);
    PlayerTop.text = NameTop.value;
    PlayerBot.text = NameBot.value;
    
    // Update the hidden rankings
    var TargetRankTop = document.getElementById("RankTop-" + match);
    var TargetRankBot = document.getElementById("RankBot-" + match);
    TargetRankTop.value = RankTop.value;
    TargetRankBot.value = RankBot.value;
}

//
// For a match (except round 1), picked a winner
//
function choseWinner(n, w, tb) {
    var match = document.getElementById("Match-" + n);
    var winnerIndex = match.selectedIndex;
    if (winnerIndex == 1) {
        var rank = document.getElementById("RankTop-" + n);
        var winner = document.getElementById("PlayerTop-" + n);
        var rankW = document.getElementById("Rank" + tb + "-" + w);
        var matchW = document.getElementById("Player" + tb + "-" + w);
        rankW.value = rank.value;
        matchW.text = winner.text;
    } else if (winnerIndex == 2) {
        var rank = document.getElementById("RankBot-" + n);
        var winner = document.getElementById("PlayerBot-" + n);
        var rankW = document.getElementById("Rank" + tb + "-" + w);
        var matchW = document.getElementById("Player" + tb + "-" + w);
        rankW.value = rank.value;
        matchW.text = winner.text;
    } else {
        // Clear
    }
}