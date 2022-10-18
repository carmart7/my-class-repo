var arg1 = process.argv[2];
var arg2 = process.argv[3];

if (arg1 === arg2) {
    console.log(true);
    return true;
} else {
    console.log(false);
    return false;
}