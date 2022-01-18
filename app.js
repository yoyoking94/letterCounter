const str = "bjonjourj";
const indice = str.length;
var tab = [];

let tmp = 1;

for (let i = 0; i < indice; i++) {
    letter = str[i];
    tab.push(letter)
};

const findDup = tab => tab.filter((item, index) => tab.indexOf(item) !== index);
const dupEl = findDup(tab);


for (let i = 0; i < dupEl.length; i++) {
    if (dupEl[0] == dupEl[i]) {
        tmp = tmp + 1;
    }
    console.log("La lettre : " + dupEl[i] + " apparait " + tmp + " fois");
};
