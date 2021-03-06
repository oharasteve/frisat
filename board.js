//
// Create the whole screen
// The parameters (plan and advance) are passed in to allow for 16 or 32 players
//
function doPlan(plan) {
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
                putWinner(n, true);
            } else if (first == 'w') {
                var n = parseInt(piece.substring(1, 3));
                putWinner(n, false);
            } else if (first == 'L') {
                var n = parseInt(piece.substring(1, 3));
                putLoser(n);
            } else if (first == 'R') {
                var n = parseInt(piece.substring(1, 3));
                copyWinner(n);
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
    var even = odd + 1;
    
    document.write('    <td rowspan="2">\n');
    document.write('      <select class="Rank" id="Rank-' + n + '" ' +
        'onchange="setMatch(' + (even/2) + ',' + odd + ',' + even + ');setDirty();">\n');
    document.write('        <option>Rank</option>\n');
    document.write('        <option>C</option>\n');
    document.write('        <option>B</option>\n');
    document.write('        <option>A</option>\n');
    document.write('        <option>AA</option>\n');
    document.write('        <option>AAA</option>\n');
    document.write('        <option>SP</option>\n');
    document.write('        <option>PRO</option>\n');
    document.write('      </select>\n');
    document.write('      <input class="Name" id="Name-' + n + '" ' +
        'onchange="setMatch(' + (even/2) + ',' + odd + ',' + even + ');setDirty();" type="text" value=""/>\n');
    document.write('      <input class="Race" id="Race-' + n + '" type="text" value="&nbsp;" onchange="setDirty()"/>&nbsp;\n');
    document.write('    </td>\n');
}

//
// Write all the html needed for a winning match
//
function putWinner(n, playAgain) {
    document.write('    <td rowspan="2">&nbsp;' + n + ':\n');
    document.write('      <select id="Table-' + n + '" class="Table">\n');
    document.write('        <option>Tbl</option>\n');
    for (var tbl = 12; tbl >= 2; tbl--) {
        document.write('        <option>#' + tbl + '</option>\n');
    }
    
    document.write('      </select>\n');
    document.write('      <input class="Rank" id="RankTop-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <input class="Rank" id="RankBot-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <select class="Name" id="Match-' + n + '">\n');
    document.write('        <option>Winner</option>\n');
    document.write('        <option id="PlayerTop-' + n + '"></option>\n');
    document.write('        <option id="PlayerBot-' + n + '"></option>\n');
    document.write('      </select>\n');
    if (playAgain) {
        document.write('      <input class="Race" id="MatchRace-' + n + '" type="text" value="&nbsp;" onchange="setDirty()"/>&nbsp;\n');
    }
    document.write('    </td>\n');
}

//
// Put all the information for the loser of a match
//
function putLoser(n) {
    document.write('    <td class="Left" rowspan="2">&nbsp;L' + n + ':\n');
    document.write('      <input class="Rank" id="LoserRank-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <input class="Name" id="LoserName-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <input class="Race" id="LoserRace-' + n + '" type="text" value="&nbsp;" onchange="setDirty()"/>&nbsp;\n');
    document.write('    </td>\n');
}

//
// Put all the information for the winner of a loser bracket
//
function copyWinner(n) {
    document.write('    <td class="Right" rowspan="2">&nbsp;W' + n + ':\n');
    document.write('      <input class="Rank" id="CopyRank-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <input class="Name" id="CopyName-' + n + '" disabled type="text" value=""/>\n');
    document.write('      <input class="Race" id="MatchRace-' + n + '" type="text" value="&nbsp;" onchange="setDirty()"/>&nbsp;\n');
    document.write('    </td>\n');
}

//
// Given a pair of players(m,n), find the race between them (5/3) and update the chooser, etc
//
function setMatch(match, m, n) {
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
