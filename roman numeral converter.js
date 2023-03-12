//create  function convertToRoman
function convertToRoman(num) {
    //create roman numeral objects and keys list
    let romobj={1000:'M',900:'CM',500:'D',400:'CD',100:'C',90:'XC',50:'L',40:'XL',10:'X',9:'IX',5:'V',4:'IV',1:'I'}
 let key=Object.keys(romobj).sort((a,b)=>b-a) 
 //create a conditional statement that returns the roman numeral of the highest number less than or
 //equal to the input number and recursively find the numeral of the reminder.
 if(num!=0)
  {for(let i=0;i<key.length;i++){if(key[i]<=num){return romobj[key[i]]+convertToRoman(num-key[i]);break};}}
 else return ''
}
//testing the converter
console.log(convertToRoman(109876))