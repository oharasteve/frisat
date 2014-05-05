function winner(ofMatch, toMatchW, topBotW) {
    var match = document.getElementById("Match-" + ofMatch);
    match.onchange = function() { choseWinner(ofMatch, toMatchW, topBotW, false); }
}

function winnerAndLoser(ofMatch, toMatchW, topBotW, toMatchL, topBotL) {
    var match = document.getElementById("Match-" + ofMatch);
    match.onchange = function() { choseWinner(ofMatch, toMatchW, topBotW); choseLoser(ofMatch, toMatchL, topBotL); }
}

function winnerAndCopy(ofMatch, toMatchW, topBotW) {
    var match = document.getElementById("Match-" + ofMatch);
    match.onchange = function() { choseWinner(ofMatch, toMatchW, topBotW, true); }
}

//
// For a match, picked a winner
//
function choseWinner(ofMatch, winnerMatch, topBot, copyWinner) {
    var match = document.getElementById("Match-" + ofMatch);
    var winnerIndex = match.selectedIndex;
    if (winnerIndex == 1) {
        var rank = document.getElementById("RankTop-" + ofMatch);
        var winner = document.getElementById("PlayerTop-" + ofMatch);
    } else if (winnerIndex == 2) {
        var rank = document.getElementById("RankBot-" + ofMatch);
        var winner = document.getElementById("PlayerBot-" + ofMatch);
    } else {
        // Clear?
        return;
    }
    var rank1 = document.getElementById("Rank" + topBot + "-" + winnerMatch);
    var match1 = document.getElementById("Player" + topBot + "-" + winnerMatch);
    rank1.value = rank.value;
    match1.text = winner.text;
    
    if (copyWinner) {
        var rank2 = document.getElementById("CopyRank-" + ofMatch);
        var match2 = document.getElementById("CopyName-" + ofMatch);
        rank2.value = rank.value;
        match2.value = winner.text;
    }
}

//
// For a match, picked a winner
//
function choseLoser(ofMatch, loserMatch, topBot) {
    var match = document.getElementById("Match-" + ofMatch);
    var winnerIndex = match.selectedIndex;
    if (winnerIndex == 1) {
        var rank = document.getElementById("RankBot-" + ofMatch);
        var loser = document.getElementById("PlayerBot-" + ofMatch);
    } else if (winnerIndex == 2) {
        var rank = document.getElementById("RankTop-" + ofMatch);
        var loser = document.getElementById("PlayerTop-" + ofMatch);
    } else {
        // Clear?
        return;
    }
    var rank1 = document.getElementById("Rank" + topBot + "-" + loserMatch);
    var match1 = document.getElementById("Player" + topBot + "-" + loserMatch);
    rank1.value = rank.value;
    match1.text = loser.text;
    
    var rank2 = document.getElementById("LoserRank-" + ofMatch);
    var match2 = document.getElementById("LoserName-" + ofMatch);
    rank2.value = rank.value;
    match2.value = loser.text;
}