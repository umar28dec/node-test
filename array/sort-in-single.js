var arr = [7, 1, 4 , -1];

for (var i = 1; i < arr.length; i++) {
    if(arr[i] < arr[i-1]){
        arr[i] = arr[i] + arr[i-1];
        arr[i - 1] =arr[i] - arr[i-1]
        arr[i] = arr[i]- arr[i - 1];
        i=0;
    }
}

console.log(arr)


