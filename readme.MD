🚀 SA - Sistema Fullstack (Módulo Auth)
Este projeto é o ponto de partida da minha Situação de Aprendizagem (SA) do curso do SENAI. Trata-se de uma API robusta de autenticação e gerenciamento de usuários, construída com foco em segurança e escalabilidade. Atualmente, o projeto contempla todo o fluxo de backend para autenticação JWT e operações de perfil.

🛠️ Tecnologias Utilizadas
Node.js: Ambiente de execução para o backend.

Express: Framework web para criação de rotas e middlewares.

PostgreSQL: Banco de dados relacional para persistência de dados.

Sequelize: ORM para gerenciamento e modelagem do banco de dados.

JWT (JSON Web Token): Padrão para autenticação segura entre as partes.

Bcryptjs: Criptografia de senhas utilizando hashing seguro.

CORS: Configuração para permitir a comunicação segura com o front-end.

🏗️ Arquitetura do Projeto
O projeto segue o padrão MVC (Model-View-Controller) para manter o código organizado e fácil de manter:

src/models/: Definição das tabelas e esquemas do banco de dados.

src/controllers/: Lógica de negócio e manipulação das requisições.

src/routes/: Definição dos endpoints da API.

src/middlewares/: Camada de segurança para proteção de rotas (Auth Middleware).

src/config/: Configurações de conexão com o banco de dados e variáveis de ambiente.

🔑 Funcionalidades Implementadas
Públicas
Cadastro de Usuário: Criação de conta com criptografia automática de senha.

Login: Autenticação de usuários com geração de token JWT.

Privadas (Requerem Bearer Token)
Perfil do Usuário: Consulta de dados do usuário logado (protegido por middleware).

Atualização de Dados: Permite alterar nome, email e senha (com re-hashing).

Desativação de Conta: Implementação de Soft Delete (campo ativo = false) em vez de exclusão física.