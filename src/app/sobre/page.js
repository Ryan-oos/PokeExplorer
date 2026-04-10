export default function Sobre() {
  return (
    <div className="conteudo-central">
      <h1>Sobre o Aluno</h1>
      <div className="caixa-branca">
        <p><strong>Aluno:</strong> Ryan da Silva Benedito</p>
        <p><strong>Curso:</strong> Sistema para Internet</p>
        <p><strong>Projeto:</strong> PokeExplorer - um catálogo de Pokémon desenvolvido com Next.js e a PokéAPI.</p>
        <p>O PokeExplorer é uma aplicação web desenvolvida como projeto prático para a disciplina de Programação e Design para Web II, do curso de Análise e Desenvolvimento de Sistemas da FAETERJ Barra Mansa. O projeto consiste em um catálogo interativo que consome dados da PokéAPI para oferecer aos usuários uma experiência de exploração do universo Pokémon. Construída com a versão mais recente do Next.js, a aplicação utiliza o sistema de App Router para gerenciar uma arquitetura de rotas moderna e eficiente.

A página principal apresenta uma listagem dinâmica de vinte Pokémon, onde cada card é um componente reutilizável que exibe a identidade visual e o nome de cada criatura. Ao selecionar um item, o usuário é direcionado através de rotas dinâmicas para uma página de detalhes exclusiva, que processa parâmetros de URL para buscar e exibir informações específicas como tipos, peso, altura e habilidades. Além da funcionalidade de busca de dados, o projeto foca na organização estrutural, separando responsabilidades entre componentes de layout — como cabeçalho e rodapé — e páginas de conteúdo estático. Todo o desenvolvimento foi pautado em boas práticas de componentização, navegação otimizada com o componente Link e entrega contínua via GitHub, demonstrando o domínio de ferramentas essenciais para o mercado de desenvolvimento front-end contemporâneo.</p>
      </div>
    </div>
  );
}