🚀 PokeExplorer - Catálogo Pokémon
🎯 Objetivo
O objetivo deste projeto é desenvolver uma aplicação web funcional utilizando o framework Next.js para colocar em prática os conceitos de consumo de APIs externas (PokéAPI), manipulação de rotas dinâmicas e componentização. O foco é criar um catálogo simples, intuitivo e de fácil manutenção, respeitando as normas de design e organização de código propostas na disciplina de Programação e Design para Web II.

⚙️ Funcionalidades
Listagem de Pokémon: Exibição automática dos 20 primeiros Pokémon obtidos da API na página inicial.

Cards Interativos: Cada Pokémon possui um card com imagem, nome e um botão de detalhes.

Navegação por Rotas Dinâmicas: Ao clicar em "Detalhes", o usuário é levado para uma página exclusiva do Pokémon escolhido, onde são exibidas informações como peso, altura e habilidades.

Navegação Global: Cabeçalho e rodapé fixos em todas as páginas para facilitar o acesso ao início e à página "Sobre".

Página Institucional: Uma aba dedicada com informações sobre o desenvolvedor e o curso.

🛠️ Tecnologias Usadas
Next.js 15+: Framework React para a estrutura e roteamento do site.

JavaScript (ES6): Linguagem principal utilizada, sem a necessidade de TypeScript para simplificar o código.

CSS Puro: Toda a estilização do sistema está concentrada no arquivo globals.css, sem uso de bibliotecas externas como Tailwind.

PokéAPI: Fonte de dados externa utilizada para alimentar o catálogo.

📖 Instruções de Uso
Pré-requisitos
Ter o Node.js instalado em sua máquina.

Passo a Passo
Instalação: No terminal, dentro da pasta do projeto (todo-nextjs), execute o comando para instalar as dependências:

Bash
npm install
Execução: Inicie o servidor de desenvolvimento com o comando:

Bash
npm run dev
Acesso: Abra o seu navegador e acesse o endereço local indicado no terminal (geralmente http://localhost:3000).

Navegação:

Utilize o menu superior para alternar entre a Pokedex e a página Sobre.

Clique no botão Detalhes de qualquer card na página inicial para ver informações específicas de um Pokémon.

Desenvolvido por: Ryan da Silva benedito