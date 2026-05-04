SISTEMA DE CONTROLE DE CARROS<br><br>
📌 DESCRIÇÃO DO PROJETO<br><br>

Este projeto é um sistema web completo para gerenciamento de carros, desenvolvido com Node.js (backend), Express, Sequelize e MySQL, com um frontend em HTML, CSS e JavaScript.<br><br>

O sistema permite realizar operações básicas de um CRUD:<br><br>

Cadastrar carros<br>
Listar carros<br>
Consultar carro por ID<br>
Excluir carro<br><br>

Além disso, o sistema aplica regras de negócio para cálculo automático do preço de venda com base na categoria do veículo.<br><br>

🎯 OBJETIVO<br><br>

O objetivo do sistema é fornecer uma aplicação para prática de:<br><br>

Integração entre frontend e backend<br>
Manipulação de banco de dados relacional<br>
Criação de APIs REST<br>
Aplicação de regras de negócio<br><br>

👩‍💻 DESENVOLVEDORA<br><br>

Gabriela Rankel<br><br>

🧱 ESTRUTURA DO PROJETO<br><br>

backend/<br>
├── controller/<br>
├── db/<br>
├── models/<br>
└── index.js<br><br>

frontend/<br>
├── html/<br>
├── js/<br>
└── index.html<br><br>

⚙️ TECNOLOGIAS UTILIZADAS<br><br>

🔹 Backend<br>
Node.js<br>
Express<br>
Sequelize<br>
MySQL<br>
Cors<br><br>

🔹 Frontend<br>
HTML5<br>
CSS3<br>
JavaScript (Fetch API)<br><br>

🔗 ROTAS DA API<br><br>

📌 Base URL<br>
http://localhost:3000
<br><br>

➕ Cadastrar carro<br>
POST /carro<br><br>

📋 Listar carros<br>
GET /carros<br><br>

🔍 Consultar carro por ID<br>
GET /carro/:id<br><br>

Exemplo:<br>
http://localhost:3000/carro/1
<br><br>

❌ Excluir carro<br>
DELETE /carro/:id<br><br>

Exemplo:<br>
http://localhost:3000/carro/1
<br><br>

🌐 ACESSO AO FRONTEND<br><br>

Abra o arquivo:<br>
frontend/index.html<br><br>

Ou acesse diretamente:<br><br>

Cadastro → frontend/html/cad_carro.html<br>
Listagem → frontend/html/list_carro.html<br>
Consulta → frontend/html/consultar_carro.html<br>
Exclusão → frontend/html/apag_carro.html<br><br>

📊 MODELO DE DADOS<br><br>

Tabela: carros<br><br>

codCarro — INT — ID do carro (PK)<br>
nome — STRING — Nome do carro<br>
marca — STRING — Marca do carro<br>
categoria — STRING — popular / sedan / luxo<br>
ano — FLOAT — Ano do veículo<br>
preco — FLOAT — Preço de fábrica<br>
preco_venda — FLOAT — Preço com margem aplicada<br><br>

📌 REGRAS DE NEGÓCIO<br><br>

RN01: O sistema deve calcular automaticamente o campo preco_venda com base na categoria do veículo:<br>
Popular → +15%<br>
Sedan → +20%<br>
Luxo → +25%<br><br>

RN02: O cálculo do preço de venda deve ser realizado no momento do cadastro.<br><br>

RN03: Todos os campos são obrigatórios:<br>
nome<br>
marca<br>
categoria<br>
ano<br>
preco<br><br>

RN04: A categoria deve aceitar apenas: popular, sedan ou luxo.<br><br>

RN05: O codCarro deve ser gerado automaticamente e ser único.<br><br>

RN06: O sistema deve impedir cadastro com dados inválidos.<br><br>

RN07: Consulta e exclusão devem ser feitas pelo ID.<br><br>

🎨 REGRAS DE NEGÓCIO (INTERFACE)<br><br>

RN08: O formulário deve estar centralizado na tela.<br><br>

RN09: Deve existir um menu fixo no topo em todas as telas.<br><br>

RN10: O fundo deve ser em azul claro.<br><br>

RN11: A fonte deve ser Tahoma.<br><br>

RN12: O texto deve ter tamanho 25% maior que o padrão.<br><br>

RN13: Os títulos devem ter tamanho 40% maior que o padrão.<br><br>

RN14: A cor dos textos deve ser branca.<br><br>

RN15: Os inputs devem ter:<br>
Fundo preto<br>
Texto verde<br>
Fonte Tahoma<br>
Tamanho 25% maior<br><br>

RN16: Listagem e consulta devem ser exibidas em tabela.<br><br>

RN17: As ações devem ocorrer por clique do mouse.<br><br>

RN18: O sistema deve manter padronização visual em todas as telas.<br><br>

✅ REQUISITOS FUNCIONAIS<br><br>

RF01: Cadastrar veículo<br>
RF02: Listar veículos<br>
RF03: Consultar veículo por ID<br>
RF04: Excluir veículo por ID<br>
RF05: Calcular preço de venda automaticamente<br>
RF06: Validar dados antes do cadastro<br><br>

⚠️ REQUISITOS NÃO FUNCIONAIS<br><br>

RNF01: Utilizar padrão REST<br>
RNF02: Comunicação em JSON<br>
RNF03: Banco de dados MySQL<br>
RNF04: Suportar múltiplas requisições<br>
RNF05: Acesso via navegador<br>
RNF06: Tempo de resposta adequado<br>
RNF07: Uso de ORM (Sequelize)<br><br>

🧠 FUNCIONAMENTO DO SISTEMA<br><br>

🔹 Backend<br>
Express gerencia rotas<br>
Sequelize conecta ao banco<br>
Controller executa CRUD<br><br>

🔹 Frontend<br>
Uso de fetch()<br>
Manipulação do DOM<br>
Comunicação em JSON<br><br>

▶️ COMO EXECUTAR<br><br>

1. Clone o repositório<br>
git clone https://github.com/GabrielaRankel/Banco_de_dados_Carros.git
<br><br>

2. Acesse o backend<br>
cd backend<br><br>

3. Instale as dependências<br>
npm install<br><br>

4. Configure o banco<br>
database: bd_crud<br>
user: root<br>
password: senai<br><br>

5. Execute o servidor<br>
node index.js<br><br>

http://localhost:3000
<br><br>

6. Execute o frontend<br>
frontend/index.html<br><br>

📎 REPOSITÓRIO<br><br>

👉 https://github.com/GabrielaRankel/Banco_de_dados_Carros.git
<br><br>