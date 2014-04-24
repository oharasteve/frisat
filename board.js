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
            } else if (first == 'W' || first == 'w') {
                var n = parseInt(piece.substring(1, 3));
                document.write('    <td rowspan="2">&nbsp;' + n + ':\n');
                document.write('      <select class="Table">\n');
                document.write('        <option>Tbl</option>\n');
                for (var tbl = 12; tbl >= 2; tbl--) {
                    document.write('        <option>#' + tbl + '</option>\n');
                }
                document.write('      </select>\n');
                document.write('      <input class="Rank" id="Rank1-' + n + '" disabled type="text" value=""/>\n');
                document.write('      <input class="Rank" id="Rank2-' + n + '" disabled type="text" value=""/>\n');
                document.write('      <select class="Name" id="Match-' + n + '">\n');
                document.write('        <option>Winner</option>\n');
                document.write('        <option id="Player1-' + n + '"></option>\n');
                document.write('        <option id="Player2-' + n + '"></option>\n');
                document.write('      </select>\n');
                if (first == 'W') {
                    document.write('      <input class="Race" type="text" value="&nbsp;"/>&nbsp;\n');
                }
                document.write('    </td>\n');
            } else if (first == 'L' || first == 'R') {
                var n = parseInt(piece.substring(1, 3));
                if (first == 'L') {
                    document.write('    <td class="Left" rowspan="2">&nbsp;L' + n + ':\n');
                } else {
                    document.write('    <td class="Right" rowspan="2">&nbsp;W' + n + ':\n');
                }
                document.write('      <input class="Rank" disabled type="text" value=""/>\n');
                document.write('      <input class="Name" disabled type="text" value=""/>\n');
                document.write('      <input class="Race" type="text" value="&nbsp;"/>&nbsp;\n');
                document.write('    </td>\n');
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
// Given a pair of players(m,n), find the race between them (5/3) and update the chooser, etc
//
function setMatch(m, n) {
    var match = n / 2;

    // Update the race targets
    var Race1 = document.getElementById("Race-" + m);
    var Race2 = document.getElementById("Race-" + n);
    var Rank1 = document.getElementById("Rank-" + m);
    var Rank2 = document.getElementById("Rank-" + n);
    var target = race(Rank1.value, Rank2.value);
    Race1.value = target.substring(0, 1);
    Race2.value = target.substring(2, 3);

    // Update the Select / Option choices
    var Player1 = document.getElementById("Player1-" + match);
    var Player2 = document.getElementById("Player2-" + match);
    var Name1 = document.getElementById("Name-" + m);
    var Name2 = document.getElementById("Name-" + n);
    Player1.text = Name1.value;
    Player2.text = Name2.value;
    
    // Update the hidden rankings
    var TargetRank1 = document.getElementById("Rank1-" + match);
    var TargetRank2 = document.getElementById("Rank2-" + match);
    TargetRank1.value = Rank1.value;
    TargetRank2.value = Rank2.value;
}