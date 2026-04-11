
const nested = [[1, 2], [3, 4, [10, 5]], [7, 8]];

// using 
function largestNum(NestedArr) {
    const arr= NestedArr.flat(Infinity);
     const result= arr.reduce((acc, item)=> { 
           if(item > acc.max){
            acc.secondMax= acc.max
            acc.max= item;
           }else if(item > acc.secondMax && item < acc.max){
               acc.secondMax= item;
           }
           return acc
        },{ max: -Infinity, secondMax: -Infinity})
        return result.secondMax;
}



// using flatarray
function largestNum(NestedArr) {
    let arr = [];
    function helper(NestedAr) {
        for (let newArr of NestedAr) {
            if (Array.isArray(newArr)) {
                helper(newArr);
            } else {
                arr.push(newArr)
            }
        }
        return arr;
    }
    helper(NestedArr)
    return arr;
}



// using loop find the maxmum array
function largestNum(NestedArr) {
    let max = -Infinity;
    function helper(NestedAr) {
        for (let newArr of NestedAr) {
            if (Array.isArray(newArr)) {
                helper(newArr);
            } else {
                if (newArr > max) max = newArr;
            }
        }
    }
    helper(NestedArr)
    return max;
}

// using second maxmum array find

function largestNum(NestedArr) {
    let max = -Infinity;
    let secondMax = -Infinity;
    function helper(NestedAr) {
        for (let newArr of NestedAr) {
            // console.log(newArr)
            if (Array.isArray(newArr)) {
                helper(newArr);
            } else {
                if (newArr > max) {
                    secondMax = max;
                    max = newArr;
                } else if (newArr > secondMax && newArr < max) {
                    secondMax = newArr
                }
            }
        }
    }
    helper(NestedArr)
    return secondMax;
}