# 🚀 My Notion Hub

My Notion Hub é uma API feita no framework Nest.js que usa a API do Notion para realizar as consultas. Com essa API, você pode conectar um banco de dados do Notion ao seu projeto e acessar os dados dele de forma simples e rápida.

## 📝 Como usar

Para usar a API, você precisa ter uma aplicação Notion criada e autorizada na sua conta do Notion. Você também precisa ter um banco de dados do Notion que deseja conectar à API.

### 🔑 Criando uma aplicação Notion

Para criar uma aplicação Notion, siga os passos descritos na [documentação oficial](https://developers.notion.com/docs/getting-started).

Você vai precisar do **Notion secret** da sua aplicação, que é um token que permite a API acessar os dados do Notion. Guarde esse token em um lugar seguro.

### 🗃️ Vinculando um banco de dados do Notion

Para vincular um banco de dados do Notion à API, você precisa obter o **ID do banco de dados**. Você pode encontrar esse ID na URL do banco de dados, depois de `https://www.notion.so/`.

Por exemplo, se a URL do seu banco de dados é `https://www.notion.so/My-Database-1234567890abcdef`, o ID do banco de dados é `1234567890abcdef`.

Você também precisa compartilhar o seu banco de dados com a sua aplicação Notion, para que ela possa acessar os dados dele. Para isso, siga os passos descritos na [documentação oficial](https://developers.notion.com/docs/sharing).

### 🛡️ Autenticando na API

Para autenticar na API, você precisa passar na request uma autorização do tipo **Bearer** com o **Notion secret** da sua aplicação. Você também precisa passar o **ID do banco de dados** que deseja conectar como um parâmetro de query chamado `databaseId`.

Por exemplo, se o seu Notion secret é `sk_abc123` e o ID do seu banco de dados é `1234567890abcdef`, a request seria algo assim:

```bash
curl -X GET https://mynotionhub.vercel.app/notion/1234567890abcdef \
  -H 'Authorization: Bearer sk_abc123' \
  -G \
```

A resposta da API será um objeto JSON com os dados do seu banco de dados do Notion.

## 🌐 Endpoints

A API possui os seguintes endpoints:

- `GET /notion/{databaseId}`: Retorna os dados do banco de dados do Notion conectado.
- `POST /notion/{databaseId}/query`: Filtra os dados no banco de dados do Notion conectado.

## 👥 Contribuindo

Se você quiser contribuir para o projeto, sinta-se à vontade para fazer um fork, criar uma branch e enviar um pull request. Qualquer sugestão ou feedback é bem-vinda.
