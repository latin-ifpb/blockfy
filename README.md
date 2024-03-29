# Blockfy
Blockfy é um contador de streams que simula um serviço de streaming para dar transparência ao número de execuções de uma música para o artista e para o usuário, para assim ele ter um controle de quanto deveria receber. A aplicação funciona sob contratos inteligentes feitos em Solidity e executado em uma rede de testes Ethereum.

### Vídeo Explicativo

[<p align="center"><img src="media/Logotipo do Blockfy.png" width="60%" length="60%" title="Vídeo Explicativo" alt="Vídeo Explicativo" /></p>](https://drive.google.com/file/d/1G0LhVs6fRowEtq-sYrdunjpnXZp-CI_o/view)

### O que precisa para funcionar? (Blockfy)
- Metamask (extensão para navegador) com uma conta logada na rede de testes ethereum Rinkeby;
- Ether para conseguir executar TODAS as funções do Blockfy como addMusic e listenMusic, para isso, depois de seguir o tutorial do Metamask disponível em: https://latin-ifpb.github.io/blockfy/, basta publicar em alguma rede social o endereço metamask, copiar o link da publicação e colar em https://faucet.rinkeby.io/, depois disso pode apagar o post se quiser. E você estará pronto para executar todas as funções.

OBS¹: Por precisar de extensão, a aplicação não funciona em mobile

#### Link do Metamask para:

[<img src="media\GoogleChrome.png" width="7%" length="7%" title="Google Chrome" alt="Google Chrome Logo" />](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
[<img src="media/MozillaFirefox.png" width="7%" length="7%" title="Mozilla Firefox" alt="Mozilla Firefox Logo" />](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask)
[<img src="media\Brave.png" width="7%" length="7%" title="Brave" alt="Brave Logo" />](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
[<img src="media/MicrosoftEdge.png" width="7%" length="7%" title="Microsoft Edge" alt="Microsof Edge Logo" />](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)

### O que é preciso para rodar esta aplicação localmente?
- NodeJS v8.9.4 ou superior
- Truffle Suite
```
#Instalar o ambiente de desenvolvimento Truffle Suite
npm install -g truffle

#Para compilar os contratos localizados na pasta /contracts
truffle compile

#Se quiser testar os testes da pasta /tests
truffle test

truffle migrate

#Para rodar a aplicação React:
cd client
npm install #Para instalar as dependências
npm run start
```

### Como eu crio um front-end integrado com smart contract do 0?
1. Registre-se no [Infura](https://infura.io/), crie um novo projeto, mude o endpoint para Rinkeby e copie a URL do endpoint para Rinkeby.
2. Execute os seguites comandos no terminal:
```
npm install truffle-hdwallet-provider
truffle unbox react
truffle create contract <nomeDoContrato>
```

3. Depois de escrito o contrato, mescle o arquivo truffle-config.js com:
```
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "<SUA_CHAVE_DE_BACKUP_METAMASK>";module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*"
  },
  rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/<INFURA_Access_Token>");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }
 }
};
```

4. Na variável mnemonic, troque o valor pela sua chave de backup do Metamask e substitua o link que será retornado em rinkeby pelo que você copiou do INFURA, depois é só seguir os passos que estão em: [O que preciso para rodar esta aplicação localmente](#o-que-é-preciso-para-rodar-esta-aplicação-localmente) só que em vez de ```truffle migrate```, usar: ```truffle migrate --network rinkeby```

OBS²: Se precisar de uma explicação melhor detalhada: https://medium.com/@andresaaap/how-to-deploy-a-smart-contract-on-a-public-test-network-rinkeby-using-infura-truffle-8e19253870c4

### Mantenedores
[@joaovitorsl](http://github.com/joaovitorsl), [@JonatasTavaresS](http://github.com/JonatasTavaresS) e [@catarinaramalho](https://github.com/catarinaramalho)

### Co-autores
[@katyusco](http://github.com/katyusco) e [@gildercia](http://github.com/gildercia)
