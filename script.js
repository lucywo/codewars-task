///Highest and lowest 
function highAndLow(numbers) {
  // Konvertiere Zeichenfolge in Array von Zahlen
  const numArr = numbers.split(" ").map(Number);

  // Finde höchste und niedrigste Zahl im Array
  const highest = Math.max(...numArr);
  const lowest = Math.min(...numArr);

  // Gib das Ergebnis als Zeichenfolge zurück
  return highest + " " + lowest;
}

console.log(highAndLow("1 2 -3 4 5")); // 5 -3
console.log(highAndLow("1 2 3 4 5")); // 5 1 
console.log(highAndLow("1 9 3 4 -5"));  // 9 -5


///Mumbling
function accum(s) {
let result = "";
// Wir initialisieren eine leere Variable "result", in der wir das Ergebnis speichern werden.

  for (let i = 0; i < s.length; i++) { 
//Wir durchlaufen jedes Zeichen in "s", beginnend mit dem Index 0.

    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
// Für jedes Zeichen in "s" fügen wir den Großbuchstaben des aktuellen Zeichens zu "result" hinzu,
// gefolgt von den Kleinbuchstaben des aktuellen Zeichens, die "i" mal wiederholt werden,
// damit die Anzahl der Kleinbuchstaben durch die Position des aktuellen Zeichens bestimmt wird.
// Anschließend fügen wir einen Bindestrich "-" hinzu, um die wiederholten Zeichen voneinander zu trennen.
  }
  return result.slice(0, -1);
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Ttt"


/// Credit Card Mask
function maskify(str) {
  if (str.length <= 4) {
    // Wenn die Länge des Strings kleiner oder gleich 4 ist,
    // geben wir den ursprünglichen String zurück, da wir nichts maskieren müssen.
    return str;
  } else {
    var masked = "";
    // Wir initialisieren eine leere Variable "masked", in der wir den maskierten String speichern werden.

    for (var i = 0; i < str.length - 4; i++) {
      // Wir durchlaufen jedes Zeichen im String, beginnend mit dem Index 0,
      // bis zum vorletzten Zeichen (d.h. der Index "str.length - 5"),
      // da die letzten vier Zeichen unverändert bleiben sollen.

      masked += "#";
      // Für jedes Zeichen, das wir maskieren müssen, fügen wir "#" zu "masked" hinzu.
    }

    masked += str.slice(-4);
    // Anschließend fügen wir die letzten vier Zeichen von "str" zu "masked" hinzu,
    // da diese unverändert bleiben sollen.
     return masked;
    // Wir geben den maskierten String zurück.
  }
}
  

console.log(maskify("4556364607935616")); // Ausgabe: "############5616"
console.log(maskify("64607935616")); // Ausgabe: "#######5616"
console.log(maskify("1")); // Ausgabe: "1"
console.log(maskify("")); // Ausgabe: ""

console.log(maskify("Skippy")); // Ausgabe: "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); // Ausgabe: "####################################man!"





