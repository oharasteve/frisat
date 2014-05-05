function logic32() {
    // Round 1, winner side
    winnerAndLoser(1, 25, 'Top', 17, 'Top');
    winnerAndLoser(2, 25, 'Bot', 17, 'Bot'); 
    winnerAndLoser(3, 26, 'Top', 18, 'Top');
    winnerAndLoser(4, 26, 'Bot', 18, 'Bot'); 
    winnerAndLoser(5, 27, 'Top', 19, 'Top');
    winnerAndLoser(6, 27, 'Bot', 19, 'Bot'); 
    winnerAndLoser(7, 28, 'Top', 20, 'Top');
    winnerAndLoser(8, 28, 'Bot', 20, 'Bot'); 
    winnerAndLoser(9, 29, 'Top', 21, 'Top');
    winnerAndLoser(10, 29, 'Bot', 21, 'Bot'); 
    winnerAndLoser(11, 30, 'Top', 22, 'Top');
    winnerAndLoser(12, 30, 'Bot', 22, 'Bot'); 
    winnerAndLoser(13, 31, 'Top', 23, 'Top');
    winnerAndLoser(14, 31, 'Bot', 23, 'Bot'); 
    winnerAndLoser(15, 32, 'Top', 24, 'Top');
    winnerAndLoser(16, 32, 'Bot', 24, 'Bot');

    // Round 2, winner side
    winnerAndLoser(25, 41, 'Top', 40, 'Bot');
    winnerAndLoser(26, 41, 'Bot', 39, 'Bot');
    winnerAndLoser(27, 42, 'Top', 38, 'Bot');
    winnerAndLoser(28, 42, 'Bot', 37, 'Bot');
    winnerAndLoser(29, 43, 'Top', 36, 'Bot');
    winnerAndLoser(30, 43, 'Bot', 35, 'Bot');
    winnerAndLoser(31, 44, 'Top', 34, 'Bot');
    winnerAndLoser(32, 44, 'Bot', 33, 'Bot');

    // Round 3, winner side
    winner(41, 49, 'Top');
    winner(42, 50, 'Top');
    winner(43, 51, 'Top');
    winner(44, 52, 'Top');
    
    // Round 4, winner side
    winner(49, 53, 'Top');
    winner(50, 53, 'Bot');
    winner(51, 54, 'Top');
    winner(52, 54, 'Bot');
    
    // Round 5, winner side
    winner(53, 55, 'Top');
    winner(54, 55, 'Bot');
    
    // Round 1, loser side
    winner(17, 33, 'Top');
    winner(18, 34, 'Top');
    winner(19, 35, 'Top');
    winner(20, 36, 'Top');
    winner(21, 37, 'Top');
    winner(22, 38, 'Top');
    winner(23, 39, 'Top');
    winner(24, 40, 'Top');
    
    // Round 2, loser side
    winner(33, 45, 'Top');
    winner(34, 45, 'Bot');
    winner(35, 46, 'Top');
    winner(36, 46, 'Bot');
    winner(37, 47, 'Top');
    winner(38, 47, 'Bot');
    winner(39, 48, 'Top');
    winner(40, 48, 'Bot');
    
    // Round 3, loser side
    winnerAndCopy(45, 50, 'Bot');
    winnerAndCopy(46, 49, 'Bot');
    winnerAndCopy(47, 52, 'Bot');
    winnerAndCopy(48, 51, 'Bot');
}