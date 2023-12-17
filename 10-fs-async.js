const { readFile, writeFile } = require('fs');
// async read and write


// first param is path, second is callback
// passing urf8 encoding system from unicode
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log('errrrrrrr', err);
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log('errrr22222', err);
            return;
        }
        const second = res;
        writeFile('./content/merged-files-result.txt', `Here is async result: ${first}, ${second}`, (err, res) => {
            if (err) {
                console.log('errrrrrr333333333', err);
                return;
            }
            console.log('final result', res);
        });

        // writeFile('./content/merged-files-result.txt', `Here is appended async result: ${first}, ${second}`, {flag: 'a'}, (err, res) => {
        //     if (err) {
        //         console.log('errrrrrr333333333', err);
        //         return;
        //     }
        //     console.log('final result', res);
        // });
    });
});

// when there are multiple callbacks inside callback its called 'CALLBACK HELL'
