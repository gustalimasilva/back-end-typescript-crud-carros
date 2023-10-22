# back-end-typescript-crud-carros

## GET /carros

### Descrição

Obtém uma lista de todos os carros.

### Resposta

```json
[
  {
    "id": 1,
    "marca": "Ford",
    "modelo": "Fiesta",
    "ano": 2023
  },
  {
    "id": 2,
    "marca": "Chevrolet",
    "modelo": "Onix",
    "ano": 2023
  },
  {
    "id": 3,
    "marca": "Volkswagen",
    "modelo": "Gol",
    "ano": 2023
  }
]
```

Códigos de status

200 OK: A solicitação foi bem-sucedida.

500 Internal Server Error: Ocorreu um erro interno no servidor.

---

## GET /carros/:id

### Descrição

Obtém um carro específico por seu ID.

### Parâmetros

| Nome | Descrição | Tipo | Obrigatório |
|---|---|---|---|
| id | O ID do carro. | inteiro | Sim |

### Resposta

```json
{
  "id": 1,
  "marca": "Ford",
  "modelo": "Fiesta",
  "ano": 2023
}
```

Códigos de status

200 OK: A solicitação foi bem-sucedida.

404 Not Found: O carro não foi encontrado.

500 Internal Server Error: Ocorreu um erro interno no servidor.

---

## POST /carros

### Descrição

Cria um novo carro.

### Parâmetros

| Nome | Descrição | Tipo | Obrigatório |
|---|---|---|---|
| marca | A marca do carro. | string | Sim |
| modelo | O modelo do carro. | string | Sim |
| cor | A cor do carro. | string | Sim |
| ano | O ano do carro. | inteiro | Sim |
| valor | O valor do carro. | float | Sim |

### Resposta

```json
{
  "id": 1,
  "marca": "Ford",
  "modelo": "Fiesta",
  "ano": 2023
}
```

### Códigos de status

201 Created: O carro foi criado com sucesso.

400 Bad Request: A solicitação foi mal-formada.

500 Internal Server Error: Ocorreu um erro interno no servidor.

---

## PUT /carros/:id

### Descrição

Atualiza um carro existente.

### Parâmetros

| Nome | Descrição | Tipo | Obrigatório |
|---|---|---|---|
| id | O ID do carro. | inteiro | Sim |
| marca | A marca do carro. | string | Não |
| modelo | O modelo do carro. | string | Não |
| cor | A cor do carro. | string | Não |
| ano | O ano do carro. | inteiro | Não |
| valor | O valor do carro. | float | Não |

### Resposta

```json
{
  "mensagem": "Carro Atualizado com sucesso"
}
```

### Códigos de status

204 No Content: O carro foi atualizado com sucesso.

400 Bad Request: A solicitação foi mal-formada.

404 Not Found: O carro não foi encontrado.

500 Internal Server Error: Ocorreu um erro interno no servidor.

---

## DELETE /carros/:id

### Descrição

Exclui um carro existente.

### Parâmetros

| Nome | Descrição | Tipo | Obrigatório |
|---|---|---|---|
| id | O ID do carro. | inteiro | Sim |

### Resposta

```json
{
  "mensagem": "Carro deletado com sucesso"
}

```

### Códigos de status
200 OK: O carro foi excluído com sucesso.

404 Not Found: O carro não foi encontrado.

500 Internal Server Error: Ocorreu um erro interno no servidor.

---