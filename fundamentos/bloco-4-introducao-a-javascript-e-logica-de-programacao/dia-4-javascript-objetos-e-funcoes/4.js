let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'sim';
for (let index in info){
    console.log(info[index]);
}