
const TextModel = require('../model/Text');
const conection = require('../helper/conection');

class CreateTextService{

    async execute(texto){
        const textModel = new TextModel(texto);
        
        await conection('texto').insert(textModel);

        return textModel;
    }
}

module.exports = CreateTextService;