let re;
// literal characters
re = /hello/;
re = /hello/i; //case sensitive

// meta character symbols
re = /^h/i;       //must start with
re = /world$/i;   //must end with
re = /^hello$/i;  // must begin and end with
re = /h.llo/i;  // matches any one character
re = /h*llo/i;  // matches any character 0 or more times
re = /gre?a?y/i; //optional character
re = /gre?a?y\?/i; //escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;    // must be an a or e
re = /[GF]ray/;     // must be a G or F
re = /[^GF]ray/;    // match anything except a G or F
re = /[A-Z]ray/;    // match any uppercase letter
re = /[a-z]ray/;    // match any lowercase letter
re = /[A-Za-z]ray/;    // match any letter of any case
re = /[0-9]ray/;    // match any digit

//brace {} quantifiers
re = /Hel{2}o/i;    // must occur exactly {n} amount of times
re = /Hel{2,4}o/i;    // must occur exactly {n} amount of times
re = /Hel{2,}o/i;    // must occur at least {n} amount of times

//parenthese () - grouping
re = /^([0-9]x){3}$/

//short hand character classes
re = /\w/;    // word character - alphanumeric or _
re = /\w+/;   // + = one or more 
re = /\W+/;   // Non-word character
re = /\d/;    // match any digit
re = /\d+/;    // match any digit 0 or more times
re = /\D/;    // non-digit
re = /\s/;    // match whitespace char
re = /\S/;    // match non-whitespace char
re = /Hell\b/i; //word boundary

// assertions
re = /x(?=y)/;  // match x only if followed by y
re = /x(?!y)/;  // match x only if not followed by y

//string to match
const str = 'gdssjbnxx';

//log results
const result = re.exec(str);
console.log(result);


//log results
function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`)
  }
}

reTest(re, str);