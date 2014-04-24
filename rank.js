function race(yourself, opponent) {
    switch (yourself) {
        case 'C' :
            switch (opponent) {
                case 'C' : return '2/2'; 
                case 'B' : return '2/3'; 
                case 'A' : return '2/4';
                case 'AA' : return '2/5';
                case 'AAA' : return '2/6';
                case 'SP' : return '2/7';
                case 'PRO' : return '2/8';
            }
            break;
        case 'B' :
            switch (opponent) {
                case 'C' : return '3/2'; 
                case 'B' : return '2/2'; 
                case 'A' : return '2/3';
                case 'AA' : return '2/4';
                case 'AAA' : return '2/5';
                case 'SP' : return '2/6';
                case 'PRO' : return '2/7';
            }
            break;
        case 'A' :
            switch (opponent) {
                case 'C' : return '4/2'; 
                case 'B' : return '3/2'; 
                case 'A' : return '3/3';
                case 'AA' : return '3/4';
                case 'AAA' : return '3/5';
                case 'SP' : return '3/6';
                case 'PRO' : return '3/7';
            }
            break;
        case 'AA' :
            switch (opponent) {
                case 'C' : return '5/2'; 
                case 'B' : return '4/2'; 
                case 'A' : return '4/3';
                case 'AA' : return '4/4';
                case 'AAA' : return '3/4';
                case 'SP' : return '3/5';
                case 'PRO' : return '3/6';
            }
            break;
        case 'AAA' :
            switch (opponent) {
                case 'C' : return '6/2'; 
                case 'B' : return '5/2'; 
                case 'A' : return '5/3';
                case 'AA' : return '4/3';
                case 'AAA' : return '4/4';
                case 'SP' : return '4/5';
                case 'PRO' : return '4/6';
            }
            break;
        case 'SP' :
            switch (opponent) {
                case 'C' : return '7/2'; 
                case 'B' : return '6/2'; 
                case 'A' : return '6/3';
                case 'AA' : return '5/3';
                case 'AAA' : return '5/4';
                case 'SP' : return '5/5';
                case 'PRO' : return '5/6';
            }
            break;
        case 'PRO' :
            switch (opponent) {
                case 'C' : return '8/2'; 
                case 'B' : return '7/2'; 
                case 'A' : return '7/3';
                case 'AA' : return '6/3';
                case 'AAA' : return '5/3';
                case 'SP' : return '5/4';
                case 'PRO' : return '5/5';
            }
            break;
    }
    return ' / ';
}