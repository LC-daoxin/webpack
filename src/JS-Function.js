function arg(x, y, z) {
    if(arguments.length != 3){
        throw new Error("function arg called with " + arguments.length + "arguments, but it expects 3 argumnet.")
    }
}
arg(1,2,4);