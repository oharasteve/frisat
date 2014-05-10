function advance(n,                   // Match number
        winnerMatch, winnerTopBot,    // Where does the winner go?
        loserMatch, loserTopBot,      // Where does the loser go, or zero
        winnerCopy,                   // Copy the winner from loser bracket to winner side
        winnerFaces,                  // Winner of this matches faces whom? Negative for facing the loser
        loserFaces                    // Loser of this matches faces whom? Negative for facing the loser
        ) {
    var match = document.getElementById('Match-' + n);
    var func = 'advanceWinner(' + n + ',' + winnerMatch + ',"' + winnerTopBot + '");';
    // var odd = (n % 2 == 0 ? n-1 : n);
    // var even = odd + 1;
    
    // Three cases:
    // 1. Winner advances and gets copied
    // 2. Just winner advances
    // 3. Winner advances and loser goes to loser bracket (twice)
    if (winnerCopy > 0) {
        // Case 1. Winner advances and gets copied back over to the winner bracket
        func = func + 'dupWinner(' + n + ',' + winnerCopy + ');';
    } else if (loserMatch == 0) {
        // Case 2. Just winner advances
    } else {
        // Case 3. Winner advances and loser goes to loser bracket (twice)
        func = func + 'advanceLoser(' + n + ',' + loserMatch + ',"' + loserTopBot + '");';
        func = func + 'dupLoser(' + n + ');';
    }
    
    if (winnerFaces > 0) {
        func = func + 'setRaceWW(' + n + ',' + winnerFaces + ');';
    } else if (winnerFaces < 0) {
        func = func + 'setRaceWL(' + n + ',' + -winnerFaces + ');';
    }

    if (loserFaces > 0) {
        func = func + 'setRaceLW(' + n + ',' + loserFaces + ');';
    } else if (loserFaces < 0) {
        func = func + 'setRaceLL(' + n + ',' + -loserFaces + ');';
    }
    
    match.onchange = new Function(func);
}

// See who won, returns 0=nobody, 1=Top, 2=Bot
function whoWon(n) {
    var match = document.getElementById('Match-' + n);
    var which = match.selectedIndex;
    if (which == 1 || which == 2) return which;
    return 0;
}

// Regular forward motion of winner
function advanceWinner(n, winnerMatch, winnerTopBot) {
    var which = whoWon(n);
    if (which == 0) return;
    var topBot = (which == 1 ? 'Top' : 'Bot');

    // Copy over the winner information
    var rankFrom = document.getElementById('Rank' + topBot + '-' + n);
    var matchFrom = document.getElementById('Player' + topBot + '-' + n);
    var rankTo = document.getElementById('Rank' + winnerTopBot + '-' + winnerMatch);
    var matchTo = document.getElementById('Player' + winnerTopBot + '-' + winnerMatch);
    rankTo.value = rankFrom.value;
    matchTo.text = matchFrom.text;
}

// Advance the losers over to the loser bracket
function advanceLoser(n, loserMatch, loserTopBot) {
    var which = whoWon(n);
    if (which == 0) return;
    var topBot = (which == 2 ? 'Top' : 'Bot');

    // Copy over the loser information
    var rankFrom = document.getElementById('Rank' + topBot + '-' + n);
    var matchFrom = document.getElementById('Player' + topBot + '-' + n);
    var rankTo = document.getElementById('Rank' + loserTopBot + '-' + loserMatch);
    var matchTo = document.getElementById('Player' + loserTopBot + '-' + loserMatch);
    rankTo.value = rankFrom.value;
    matchTo.text = matchFrom.text;
}

// Copy the losers over to the loser bracket
function dupLoser(n) {
    var which = whoWon(n);
    if (which == 0) return;
    var topBot = (which == 2 ? 'Top' : 'Bot');

    // Copy over the loser information
    var rankFrom = document.getElementById('Rank' + topBot + '-' + n);
    var matchFrom = document.getElementById('Player' + topBot + '-' + n);
    var rankTo = document.getElementById('LoserRank' + '-' + n);
    var matchTo = document.getElementById('LoserName' + '-' + n);
    rankTo.value = rankFrom.value;
    matchTo.value = matchFrom.text;
}

// Copy the winners of the loser bracket back over to the winner bracket
function dupWinner(n, winner) {
    var which = whoWon(n);
    if (which == 0) return;
    var topBot = (which == 1 ? 'Top' : 'Bot');

    // Copy over the loser information
    var rankFrom = document.getElementById('Rank' + topBot + '-' + n);
    var matchFrom = document.getElementById('Player' + topBot + '-' + n);
    var rankTo = document.getElementById('CopyRank' + '-' + winner);
    var matchTo = document.getElementById('CopyName' + '-' + winner);
    rankTo.value = rankFrom.value;
    matchTo.value = matchFrom.text;
}