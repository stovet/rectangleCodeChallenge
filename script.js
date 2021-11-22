function logRectInfo(topLeft, bottomRight){
    let length = bottomRight[0]- topLeft[0];
    console.log(`length: ${length}`);
    let width = topLeft[1] - bottomRight[1];
    console.log(`width: ${width}`)

    console.log(`The perimeter is: ${2*(length + width)}`)
    console.log(`The area is: ${length * width}`)
}