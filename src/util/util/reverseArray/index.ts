export const ReverseArray = (array:any[]) => {
    let reversedArray:any[] = []
    array.map((item)=> reversedArray.unshift(item))
    return reversedArray
}