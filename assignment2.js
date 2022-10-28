//Question 1
var counter = 0;
var line = [];

for(var i = 0; i<=20; i++){
    if(i%2 == 0){
       if(line.length<5){
        line[counter] = i;
        counter++;

       }
       else{
        console.log(line);
        line=[];
        counter=0;
        line[counter] = i;
       }
    }
}
console.log(line);

//Question 2
var array = [10,20,18,17,9,5,45,65];
var sum =0;

for(let i=0; i < array.length; i++){
    sum += array[i];
}
console.log("Sum is " + sum);

//Question 3
var arr = [1,2,3,4,5,6,7,8,9];
arr.reverse();
console.log(arr);
 
//Question 4
function vowel_count(str1) {

    var vowels = 'aeiouAEIOU';
    var vcount = 0;

    for(var x = 0; x < str1.length; x++)
    {
        if(vowels.indexOf(str1[x]) !== -1){
            vcount += 1;
        }
    }
    return vcount;
}

console.log(vowel_count("The quick brown fox"));

//Question 5
let n = 6;
for(let i =0; i<=10; i++){
    console.log( n + " * " + i + " = " + n * i);
};

//Question 6
function duplicate(array1){
    let duplicate1 =[];

    for(let i of array1){
        if(duplicate1.indexOf(i) === -1){
            duplicate1.push(i);
        }

    }
    console.log(duplicate1);
}
const array2 = [1,2,2,5,5,5,6,4,7,8,9];

duplicate(array2);

//question 7
const array3 = [1,2,3,4,5,6,7];
const average = array3.reduce((a,b) => a+b,0) / array3.length;

console.log(average);

//question 8
var array4 = ['Belinda', 'Sharon', 'Emilia'];
var array5 = ['Ruth', 'Dolce', 'Sama', 'Anesu'];

var array6 = array4.concat(array5);
console.log(array6);