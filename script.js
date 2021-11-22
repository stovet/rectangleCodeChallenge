function logRectInfo(topLeft, bottomRight){
    let length = topLeft[0] - bottomRight[0]
    if(length < 0){
        length *= -1;
    }
    console.log(`length: ${length}`);
    let width = topLeft[1] - bottomRight[1];
    if(width < 0){
        width *= -1;
    }
    console.log(`width: ${width}`)

    console.log(`The perimeter is: ${2*(length + width)}`)
    console.log(`The area is: ${length * width}`)
}