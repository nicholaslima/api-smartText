
const conection = require('../helper/conection');
const AppError = require('../errors/AppErrors');
const CreateUser = require('../service/CreateUserService');
const AuthUser = require('../service/AuthUserService');
module.exports = {
    async auth(request,response){
        const { email,senha } = request.body;

        const authUserService = new AuthUser();

        const auth = await authUserService.execute({email,senha});
        
        return response.json(auth);
    
    },
    async createUser(request,response){
        const { email,senha,nome,idade,sexo } = request.body;

        const createUserService = new CreateUser();

        const user = await createUserService.execute({ email,senha,nome,idade,sexo });

        return response.json(user);
    }
}