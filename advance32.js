// 1         : match number
// 25, 'Top' : where does the winner go
// 17, 'Top' : where does the loser go
// 0         : where does the winner get copied to, or zero
// 2         : who winner faces, negative means loser of that match
// -2        : who loser faces, negative means loser of that match
function advance32() {
    advance( 1, 25, 'Top', 17, 'Top',  0,   2,  -2);
    advance( 2, 25, 'Bot', 17, 'Bot',  0,   1,  -1);
    advance( 3, 26, 'Top', 18, 'Top',  0,   4,  -4);
    advance( 4, 26, 'Bot', 18, 'Bot',  0,   3,  -3);
    advance( 5, 27, 'Top', 19, 'Top',  0,   6,  -6);
    advance( 6, 27, 'Bot', 19, 'Bot',  0,   5,  -5);
    advance( 7, 28, 'Top', 20, 'Top',  0,   8,  -8);
    advance( 8, 28, 'Bot', 20, 'Bot',  0,   7,  -7);
    advance( 9, 29, 'Top', 21, 'Top',  0,  10, -10);
    advance(10, 29, 'Bot', 21, 'Bot',  0,   9,  -9);
    advance(11, 30, 'Top', 22, 'Top',  0,  12, -12);
    advance(12, 30, 'Bot', 22, 'Bot',  0,  11, -11);
    advance(13, 31, 'Top', 23, 'Top',  0,  14, -14);
    advance(14, 31, 'Bot', 23, 'Bot',  0,  13, -13);
    advance(15, 32, 'Top', 24, 'Top',  0,  16, -16);
    advance(16, 32, 'Bot', 24, 'Bot',  0,  15, -15);

    advance(17, 33, 'Top',  0,  '',    0, -32,   0);
    advance(18, 34, 'Top',  0,  '',    0, -31,   0);
    advance(19, 35, 'Top',  0,  '',    0, -30,   0);
    advance(20, 36, 'Top',  0,  '',    0, -29,   0);
    advance(21, 37, 'Top',  0,  '',    0, -28,   0);
    advance(22, 38, 'Top',  0,  '',    0, -27,   0);
    advance(23, 39, 'Top',  0,  '',    0, -26,   0);
    advance(24, 40, 'Top',  0,  '',    0, -25,   0);
        
    advance(25, 41, 'Top', 40, 'Bot',  0,  26,  24);
    advance(26, 41, 'Bot', 39, 'Bot',  0,  25,  23);
    advance(27, 42, 'Top', 38, 'Bot',  0,  28,  22);
    advance(28, 42, 'Bot', 37, 'Bot',  0,  27,  21);
    advance(29, 43, 'Top', 36, 'Bot',  0,  30,  20);
    advance(30, 43, 'Bot', 35, 'Bot',  0,  29,  19);
    advance(31, 44, 'Top', 34, 'Bot',  0,  32,  18);
    advance(32, 44, 'Bot', 33, 'Bot',  0,  31,  17);

    advance(33, 45, 'Top',  0,  '',    0,  34,   0);
    advance(34, 45, 'Bot',  0,  '',    0,  33,   0);
    advance(35, 46, 'Top',  0,  '',    0,  36,   0);
    advance(36, 46, 'Bot',  0,  '',    0,  35,   0);
    advance(37, 47, 'Top',  0,  '',    0,  38,   0);
    advance(38, 47, 'Bot',  0,  '',    0,  37,   0);
    advance(39, 48, 'Top',  0,  '',    0,  40,   0);
    advance(40, 48, 'Bot',  0,  '',    0,  39,   0);

    advance(41, 49, 'Top',  0,  '',    0,  46,   0);
    advance(42, 50, 'Top',  0,  '',    0,  45,   0);
    advance(43, 51, 'Top',  0,  '',    0,  48,   0);
    advance(44, 52, 'Top',  0,  '',    0,  47,   0);

    advance(45, 50, 'Bot',  0,  '',   45,  42,   0);
    advance(46, 49, 'Bot',  0,  '',   46,  41,   0);
    advance(47, 52, 'Bot',  0,  '',   47,  44,   0);
    advance(48, 51, 'Bot',  0,  '',   48,  43,   0);

    advance(49, 53, 'Top',  0,  '',    0,  50,   0);
    advance(50, 53, 'Bot',  0,  '',    0,  49,   0);
    advance(51, 54, 'Top',  0,  '',    0,  52,   0);
    advance(52, 54, 'Bot',  0,  '',    0,  51,   0);

    advance(53, 55, 'Top',  0,  '',    0,  54,   0);
    advance(54, 55, 'Bot',  0,  '',    0,  53,   0);
}