var f = [];
var a = [10, 10, 10, 10, 20];
var b = [10, 10, 20, 20, 15];
var c = [10, 10, 10, 10, 5];
var d = [10, 10, 10, 10, 12];
var e = [true, false, true, false, true];

f.push(a);
f.push(b);
f.push(c);
f.push(d);
f.push(e);

alert(f[1][4]);

for (var i = 0; i < 5; i++){
	var resultado = (a[i] >= b[i]) && (c[i] <= d[i]) || e[i] && (a[i] == d[i] || (b[i] == c[i] && a[i] < c[i]));
	alert(resultado);
}