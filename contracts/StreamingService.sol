pragma solidity >=0.4.22; //Defino a versão do programa Solidity

contract StreamingService {
    //Defino o contrato
    struct Listener {
        //Crio a estrutura de um ouvinte que possui um endereço e um map(música =>  quantidade de execuções)
        address user;
        mapping(uint256 => uint256) music;
    }

    struct Musician {
        //Crio a estrutura de um Músico que possui um endereço, um map(música => quantidade de execuções) e total de execuções do artista
        address cod;
        mapping(uint256 => uint256) music;
        uint256 totalPlays;
    }

    Listener[] listeners; //Crio um array de ouvintes
    Musician[] musicians; //Crio um array de músicos

    function addMusic(uint256 cod_music, address addr_musician) public {
        //Função de adicionar música ao contrato
        bool haveMusician = false; //Checar se o músico da música já está cadastrado
        for (uint256 i = 0; i < musicians.length; i++) {
            //Faço uma busca no array de músicos
            if (musicians[i].cod == addr_musician) {
                //Se achar o músico
                haveMusician = true; //Então o músico já está cadastrado
                musicians[i].music[cod_music] = 1; //Crio uma nova música
            }
        }

        if (!haveMusician) {
            //Se o músico não estiver cadastrado
            musicians.push(
                Musician({cod: addr_musician, totalPlays: 0}) //O contrato automaticamente cadastra o músico com um endereço e o total de execuções
            );
            musicians[musicians.length - 1].music[cod_music] = 1; //E cria um map com a música cadastrada
        }
    }

    //Função para ouvir uma música
    function listenMusic(uint256 cod_music) public {
        bool haveMusic = false; //Testador para verificar se a música existe
        for (uint256 i = 0; i < musicians.length; i++) {
            //Percorre o array de músicos
            if (musicians[i].music[cod_music] != 0) {
                //Se a música estiver cadastrada
                musicians[i].music[cod_music]++; //Some 1 ao número de execuções de músicos
                musicians[i].totalPlays++; //Some 1 ao total de execuções do artista
                haveMusic = true; //Confirma que a música está cadastrada
                break; //Encerra a busca
            }
        }

        if (haveMusic) {
            //Se a música estiver cadastrada
            bool haveUser = false; //Testador para verificar de o usuário existe

            for (uint256 j = 0; j < listeners.length; j++) {
                //Percorre o array de ouvintes
                if (listeners[j].user == msg.sender) {
                    //Verifica se o encontra registro do ouvinte
                    haveUser = true; //Se sim, então confirma que há usuário
                    listeners[j].music[cod_music]++; //Adiciono 1 ao número de execuções do usuário a música
                    break; //Encerro a busca
                }
            }

            if (!haveUser) {
                //Se o usuário não estiver cadastrado
                listeners.push(
                    Listener({user: msg.sender}) //O contrato cadastra automaticamente com o endereço
                );
                listeners[listeners.length - 1].music[cod_music]++; //Adiciono a música na lista de músicas reproduzidas pelo usuário
            }
        }
    }

    //Função para mostrar o status geral de uma música
    function musicStats(uint256 cod_music) public view returns (uint256 qntd){
        qntd = 0;

        for (uint256 i = 0; i < musicians.length; i++) {
            if (musicians[i].music[cod_music] != 0) {
                qntd = musicians[i].music[cod_music] - 1;
            }
        }
    }

    //Função para mostrar o status geral de um artista
    function musicianStats(address addr_musician) public view returns (uint256 qntd){
        qntd = 0;

        for (uint256 i = 0; i < musicians.length; i++) {
            if (musicians[i].cod == addr_musician) {
                qntd = musicians[i].totalPlays;
            }
        }
    }

    //Função para ver status da música por ouvinte
    function userStats(uint256 cod_music) public view returns (uint256 qntd){
        qntd = 0;

        for (uint256 i = 0; i < listeners.length; i++) {
            if (listeners[i].user == msg.sender) {
                qntd = listeners[i].music[cod_music];
                break;
            }
        }
    }

    //Função só pra testes
    function getListen(uint256 cod_music, uint256 qtd) public view returns (uint qntd){
        for (uint256 i = 0; i < musicians.length; i++) {
            if (musicians[i].music[cod_music] == qtd + 1) {
                return qtd;
            }
        }

        return 0;
    }
}