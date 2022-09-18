
// typeof null
// typeof function () {}

7 ложных значений

false 0 '' null undefined -0 NaN

var boolean = new Boolean(false);

if (boolean) console.log('if works?');

// typeof boolean

//typeof Boolean(false)



Алгоритм ToPrimitive

var theAnswer = {

  valueOf () { return 42 },

  toString () { return {} }

}

'Answer: ' + theAnswer // "Answer: 42"



String(theAnswer) // '42'



theAnswer[undefined]// ?
theAnswer.undefined = 'test' //?
theAnswer[undefined] //?

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true