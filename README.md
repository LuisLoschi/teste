# Meu Primeiro App Docker com GitHub

Este é um exemplo simples de uma aplicação Node.js "Hello World" conteinerizada com Docker e versionada no GitHub.

## Como rodar localmente com Docker

1.  Certifique-se de ter o Docker Desktop instalado e rodando.
2.  Navegue até a pasta raiz deste projeto no seu terminal.
3.  Construa a imagem Docker:
    ```bash
    docker build -t meu-app-docker .
    ```
4.  Execute o contêiner:
    ```bash
    docker run -p 3000:3000 meu-app-docker
    ```
5.  Abra seu navegador e acesse `http://localhost:3000`.

## Estrutura do Projeto

* `index.js`: O código da aplicação Node.js.
* `package.json`: Metadados e scripts da aplicação Node.js.
* `Dockerfile`: A receita para construir a imagem Docker.
* `README.md`: Este arquivo, descrevendo o projeto.