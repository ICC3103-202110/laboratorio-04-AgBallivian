const prompt = require('prompt-sync')({sigint: true});
function view(counter) {return `Count ${counter} \n (+) (-) \n (q) for quit \n`}
function update(msg, counter) {
    if (msg == '+'){return counter + 1 }
    else if (msg == '-'){return counter - 1 }
    else if (msg == 'q'){process.exit() }
    else{return counter }
}
function app(counter) {
    while (true){
        const current = view(counter);
        console.clear();
        console.log(current);
        const msg = prompt('What would you do? ');
        counter = update(msg, counter);
    }   
}
app(0);