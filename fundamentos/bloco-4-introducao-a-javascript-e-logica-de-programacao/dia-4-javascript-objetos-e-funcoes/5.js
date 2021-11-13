let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    note: 'O último MacPatinhas',
    recorrente: 'sim'
};

for (let index in info) {
    for( let index2 in info2){
        if (index == index2 && info[index] != info2[index2]){
            console.log(info[index] + ' e ' + info2[index2])
        }
        if (info[index] == info2[index2]){
            console.log('Ambos recorrentes')
        }
    }
}