function LoadServ() {
    var A = parseFloat(document.getElementById("A").value);
    var B = parseFloat(document.getElementById("B").value);
    var C = parseFloat(document.getElementById("C").value);
    var D = (B * B) - (4 * A * C);
    if (A != 0 && B != 0 && C != 0) {
        if (D > 0) {
            var X1 = ((-B) + (Math.sqrt(D))) / 2;
            var X2 = ((-B) - (Math.sqrt(D))) / 2;
            document.getElementById("tx").innerHTML += "<div><hr></div><p>Hello: " + A + "(x^2) + " + B + "x + " + C + " = 0<br/>" + X1 + " - первый корень, " + X2 + " - второй корень.</p>";
        }
        else if (D == 0) {
            var X = (-B) / 2;
            document.getElementById("tx").innerHTML += "<div><hr></div><p>Hello: " + A + "(x^2) + " + B + "x + " + C + " = 0<br/>" + X + " - два совпадающих корня</p>";
        }
        else if (D < 0) {
            document.getElementById("tx").innerHTML += "<div><hr></div><p>Hello: " + A + "(x^2) + " + B + "x + " + C + " = 0<br/>" + "D < 0 -- Уравнение не имеет вещественных корней.</p>";
        }
        document.getElementById("tx").innerHTML += "<p>Дискриминант равен: " + D + "</p>";
    }
    else
    document.getElementById("tx").innerHTML += "<div><hr></div><p>Данное уравнение не является 'полным квадратным'</p>";

}