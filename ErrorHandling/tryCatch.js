try {
    console.log(hello);
    throw new Error("Hello Error here!!!");
} catch (error) {
    console.log(error);
}
finally{
    console.log("This is finnaly");   
}

console.log("hello everyone");