function logRectInfo(topLeft, bottomRight){
    let length = bottomRight[0]- topLeft[0];
    console.log(length);
    let width = topLeft[1] - bottomRight[1];
    console.log(width)

    console.log(`The perimeter is: ${length * width}`)
    console.log(`The area is: ${2*(length * width)}`)
}