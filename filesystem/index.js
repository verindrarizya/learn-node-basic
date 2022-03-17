const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    } else {
        console.log(data);
    }
};

fs.readFile('notes.txt', 'utf-8', fileReadCallback);