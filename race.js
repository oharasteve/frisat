// Winner of 'n' faces Winner of 'otherMatch'
function setRaceWW(n, otherMatch, prefix) {
    var which1 = whoWon(n);
    if (which1 == 0) return;
    var which2 = whoWon(otherMatch);
    if (which2 == 0) return;
    var topBot1 = (which1 == 1 ? 'Top' : 'Bot');
    var topBot2 = (which2 == 1 ? 'Top' : 'Bot');
    
    var RaceTop = document.getElementById('MatchRace-' + n);
    var RankTop = document.getElementById('Rank' + topBot1 + '-' + n);
    var RaceBot = document.getElementById('MatchRace-' + otherMatch);
    var RankBot = document.getElementById('Rank' + topBot2 + '-' + otherMatch);

    // Update the race targets
    var target = race(RankTop.value, RankBot.value);
    RaceTop.value = target.substring(0, 1);
    RaceBot.value = target.substring(2, 3);
}

// Winner of 'n' faces Loser of 'otherMatch'
function setRaceWL(n, otherMatch) {
    var which1 = whoWon(n);
    if (which1 == 0) return;
    var topBot1 = (which1 == 1 ? 'Top' : 'Bot');
    
    var RaceTop = document.getElementById('MatchRace-' + n);
    var RankTop = document.getElementById('Rank' + topBot1 + '-' + n);
    var RaceBot = document.getElementById('LoserRace-' + otherMatch);
    var RankBot = document.getElementById('LoserRank' + '-' + otherMatch);

    // Update the race targets
    var target = race(RankTop.value, RankBot.value);
    RaceTop.value = target.substring(0, 1);
    RaceBot.value = target.substring(2, 3);
}

// Loser of 'n' faces Winner of 'otherMatch'
function setRaceLW(n, otherMatch) {
    var which2 = whoWon(otherMatch);
    if (which2 == 0) return;
    var topBot2 = (which2 == 1 ? 'Top' : 'Bot');
    
    var RaceTop = document.getElementById('LoserRace-' + n);
    var RankTop = document.getElementById('LoserRank-' + n);
    var RaceBot = document.getElementById('MatchRace-' + otherMatch);
    var RankBot = document.getElementById('Rank' + topBot2 + '-' + otherMatch);

    // Update the race targets
    var target = race(RankTop.value, RankBot.value);
    RaceTop.value = target.substring(0, 1);
    RaceBot.value = target.substring(2, 3);
}

// Loser of 'n' faces Loser of 'otherMatch'
function setRaceLL(n, otherMatch) {
    var RaceTop = document.getElementById('LoserRace-' + n);
    var RankTop = document.getElementById('LoserRank-' + n);
    var RaceBot = document.getElementById('LoserRace-' + otherMatch);
    var RankBot = document.getElementById('LoserRank-' + otherMatch);

    // Update the race targets
    var target = race(RankTop.value, RankBot.value);
    RaceTop.value = target.substring(0, 1);
    RaceBot.value = target.substring(2, 3);
}
