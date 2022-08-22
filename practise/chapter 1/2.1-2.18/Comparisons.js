alert(null == undefined); // true значения равны друг другу и никаким другим значениям

alert(null > 0); // (1) false < > приводят null -> 0 а  undefined -> NaN (always false)
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

5 > 4; //true
'ананас' > 'яблоко'; // false
'2' > '12'; // true
undefined == null; // true
undefined === null; // false
null == '\n0\n'; // false
null === +'\n0\n'; // false
