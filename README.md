# Teste de criação de conta e autenticação
Este é uma uma demonstração de como pode ser implementado um sistema de criação e autenticação de contas de usuário usando [PBKDF2](https://medium.com/totvsdevelopers/entendendo-o-pbkdf2-refor%C3%A7ando-senhas-e-chaves-com-seguran%C3%A7a-37ab2c8af3c8) (Password-base Key Derivation Function 2).  

> Tudo o que foi apresentado não passa de um teste, portanto não representa um exemplo a ser seguido.

## Implantação
Este projeto utiliza o Docker Compose para realizar a implantação de forma mais ágil. Para subir os serviços, digite:  
```
docker compose up -d
```

## Características
Algoritmo de hash: SHA-512  
Hash gerado: 32 caracteres hexadecimais
Salt gerado: 32 caracteres hexadecimais

## Fluxo básico
Uma simplificação da dinâmica de autenticação pode ser vista abaixo.  

#### Cadastro
![](./.github/cadastro.svg)  

#### Autenticação
![](./.github/autenticacao.svg)

## API

#### Cadastro de conta de usuário  

Método HTTP: POST  
Tipo de corpo de requisição: JSON  

Exemplos:  

```
{
    "email": "meu@email.com",
    "senha": "minhaSenha"
}
```  

```
{
    "telefone": "27 99988-7766",
    "senha": "minhaSenha"
}
```
<hr>

#### Autenticação

Método HTTP: POST  
Tipo de corpo de requisição: JSON  

Exemplos:  


```
{
    "email": "meu@email.com",
    "senha": "minhaSenha"
}
```  

```
{
    "telefone": "27 99988-7766",
    "senha": "minhaSenha"
}
```
