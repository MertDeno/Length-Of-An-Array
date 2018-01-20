function length_of_array(arr){
    var count=0;
    for(var i=0;i<=arr.length;i++){
        if(arr.hasOwnProperty(i)){
            count++;
        }
    }
    alert(count);
    return count;
}

var arr=[12,44,65,12,43];
arr[10]=undefined;
console.log(arr);
length_of_array(arr);
