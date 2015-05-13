/**
 * Created by Ilya on 26.04.2015.
 */

//var eslintfile = require('C:/Users/Ilya/Dropbox/eslint/eslint0.19.0.js');
var fs = require('fs');
var eslintfile = require('eslint');
/*var esprima = require('esprima');
var escope = require('escope');
var estraverse = require('estraverse');*/
//console.log(eslintfile);
//var srcCode = fs.readFileSync(eslintfile, "utf8");
//console.log(srcCode);
//var ast = esprima.parse(eslintfile);



//console.log(ast);

var results;

var toSearch = "defineRules";

for(var i=0; i<eslintfile.length; i++) {
    for(key in eslintfile[i]) {
        if(eslintfile[i][key].indexOf(toSearch)!=-1) {
            results.push(eslintfile[i]);
        }
    }
}

console.log("\n" + "\n"+ "results:");
console.log(results);
