
function removeDuplicates(arr) {

    const uniqueSet = new Set();
    const result = [];

    for( const num of arr ){

        if( !uniqueSet.has(num)){

            uniqueSet.add(num);
            result.push(num);
        }
    }

    return result;
}
const inputArray = [1, 2, 3, 2, 1, 4, 5, 3, 2, 2, 4, 5];
console.log(inputArray);

const outputArray = removeDuplicates(inputArray);
console.log(outputArray);
