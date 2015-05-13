/**
 * Created by Ilya on 20.04.2015.
 */


var fs = require('fs');
var esprima = require('esprima');
var escope = require('escope');
var estraverse = require('estraverse');


var srcCode = fs.readFileSync('C:/Users/Ilya/Dropbox/eslint/eslint0.19.0.js', "utf8");//TODO: find the diff between it and readFile???

/*var srcCode = fs.readFile('C:/Users/Ilya/Dropbox/eslint/eslint0.19.0.js', function (err, data) {
    if (err) throw err;
    console.log(data);
});*/

//Testing fs
console.log(srcCode);

var ast = esprima.parse(srcCode);

var results = [];

var toSearch = "no-alert";

for(var i=0; i<ast.length; i++) {
    for(key in ast[i]) {
        if(ast[i][key].indexOf(toSearch)!=-1) {
            results.push(ast[i]);
        }
    }
}

//console.log(results);

//looking for globals
/*var globalScope = escope.analyze(ast).scopes[0];

globalScope.implicit.variables.forEach(function (v) {
var id = v.identifiers[0];
    console.warn('"' + id.name + + '" used at line : ' + id.loc.start.line + ' was not declared')
});*/

//testing how eslint worked
//console.log(globalScope);




/*
function traverse(node, func) {
    func(node);//1
    for (var key in node) { //2
        if (node.hasOwnProperty(key)) { //3
            var child = node[key];
            if (typeof child === 'object' && child !== null) { //4

                if (Array.isArray(child)) {
                    child.forEach(function (node) { //5
                        traverse(node, func);
                    });
                } else {
                    traverse(child, func); //6
                }
            }
        }

    }
}
*/
