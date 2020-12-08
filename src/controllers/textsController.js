
const conection = require('../helper/conection');

const CreateTextService = require('../service/CreateTextService');

module.exports = {
    async index(request,response){
        const textos = await conection('texto').select('*');

        return response.json(textos);
    },
    async post(request,response){
        const texto = request.body;

        const createText = new CreateTextService();

        const newtexto = await createText.execute(texto);
     
        return response.json(newtexto);
    }
}