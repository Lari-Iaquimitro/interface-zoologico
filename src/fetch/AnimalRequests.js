/**
 * Classe responsável por fazer as requisições para o servidor
 */
class AnimalRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://localhost:3000';           // endereço do servidor back-end
        this.routeListarAnimais = '/listar-aves';           // rota do servidor back-end
        this.routeCadastrarAnimal = '/novo/habitat';        // rota do servidor back-end
        this.routeAtualizarAnimal = '/atualizar/animal';    // rota do servidor back-end
        this.routeRemoverAnimal = '/remover/animal';        // rota do servidor back-end
    }

    /**
     * Busca os animais cadastrados no servidor
     * 
     * @returns Array com os animais cadastrados
     */
    async buscarAnimais() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimais}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos animais no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Cadastra um animal no servidor
     * 
     * @param {*} animal Objeto com as informações do animal
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    async cadastrarAnimal(animal) {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeCadastrarAnimal}`, {
                // Informa o verbo a ser acessado
                method: 'POST',
                // informa os cabeçalhos da requisição
                headers: {
                    'Content-Type': 'application/json'
                },
                // informa o corpo da requisição, contendo as informações do animal
                body: JSON.stringify(animal)
            });
            // Verifica se a resposta não foi bem sucedida ...
            if (!response.ok) {
                // ... lança um erro
                throw new Error('Erro ao enviar formulário');
            }
            // retorna true caso a resposta seja bem sucedida
            return true;
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            window.alert('Erro ao cadastrar animal');
            return null;
        }
    }

    /**
     * Deleta um animal do servidor
     * 
     * @param {*} idAnimal ID do animal a ser deletado
     * @returns **verdadeiro (true)** caso o animal tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    async deletarAnimal(idAnimal) {
        try {
            // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do animal
            const response = await fetch(`${this.serverUrl}${this.routeRemoverAnimal}?idAnimal=${idAnimal}`, {
                // Informa o verbo a ser acessado
                method: 'DELETE'
            });
            // Verifica se a resposta não foi bem sucedida ...
            if (!response.ok) {
                // ... lança um erro
                throw new Error('Erro ao enviar formulário');
            }
            // retorna true caso a resposta seja bem sucedida
            return true;
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            window.alert('Erro ao cadastrar animal');
            return null;
        }
    }

    /**
     * Atualiza o registro de um animal no servidor
     * 
     * @param {*} animal animal Objeto com as informações do animal
     * @returns **verdadeiro (true)** caso o animal tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new AnimalRequests;