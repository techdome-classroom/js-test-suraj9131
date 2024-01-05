var isValid = function (s) {

    const left_Symbols = [];
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            left_Symbols.push(s[i]);
        }
       
        else if (s[i] === ')' && left_Symbols.length !== 0 && left_Symbols[left_Symbols.length - 1] === '(') {
            left_Symbols.pop();
        } else if (s[i] === '}' && left_Symbols.length !== 0 && left_Symbols[left_Symbols.length - 1] === '{') {
            left_Symbols.pop();
        } else if (s[i] === ']' && left_Symbols.length !== 0 && left_Symbols[left_Symbols.length - 1] === '[') {
            left_Symbols.pop();
        }
        
        else {
            return false;
        }
    }
    return left_Symbols.length === 0;
};
