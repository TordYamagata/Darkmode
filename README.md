# Modal e Dark Mode

Projeto desenvolvido com **HTML, CSS e JavaScript** com o objetivo de praticar manipulação do DOM, criação de modal e implementação de modo claro e escuro.

O projeto foi inspirado na proposta do repositório **Modal-e-Darkmode**, utilizando uma interface temática e interativa.

## Funcionalidades

- Modo claro e escuro
- Salvamento do tema escolhido usando `localStorage`
- Modal interativo
- Abertura do modal através de botão
- Fechamento do modal pelo botão `X`
- Fechamento pelo botão `ENTENDI`
- Fechamento clicando fora do modal
- Fechamento pressionando a tecla `ESC`
- Animações em botões e elementos
- Layout responsivo para computadores, tablets e celulares
- Utilização de imagem `.webp` como botão

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

Não foram utilizadas bibliotecas ou frameworks externos.

## Estrutura do projeto

```text
Modal-e-Darkmode/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── imagens/
    ├── header.jpg
    └── botao.webp
```

## HTML

O arquivo `index.html` contém a estrutura principal da página.

Nele estão presentes:

- Cabeçalho
- Menu de navegação
- Botão de Dark Mode
- Conteúdo principal
- Cards
- Botão de abertura do modal
- Modal
- Rodapé

## CSS

O arquivo `style.css` é responsável pela aparência do projeto.

Entre os recursos utilizados estão:

- Variáveis CSS
- Flexbox
- CSS Grid
- Media Queries
- Transições
- Animações
- Responsividade
- Dark Mode

O modo escuro funciona alterando as variáveis de cores quando a classe:

```css
.dark
```

é adicionada ao elemento `body`.

## JavaScript

O arquivo `script.js` é responsável pelas interações da página.

O JavaScript controla:

- Abertura do modal
- Fechamento do modal
- Tecla `ESC`
- Clique fora do modal
- Alteração entre modo claro e escuro
- Alteração do ícone do tema
- Armazenamento do tema no navegador

## Dark Mode

O botão localizado no topo da página permite alternar entre:

```text
🌙 Modo Escuro
```

e:

```text
☀️ Modo Claro
```

A preferência do usuário é salva utilizando:

```javascript
localStorage
```

Dessa forma, mesmo que a página seja fechada, o navegador mantém o tema escolhido.

## Modal

O modal pode ser aberto através dos botões da página.

Ele pode ser fechado de quatro maneiras:

1. Clicando no `X`;
2. Clicando no botão `ENTENDI`;
3. Clicando fora da janela do modal;
4. Pressionando a tecla `ESC`.

## Botão em WebP

O projeto também utiliza uma imagem no formato `.webp` como botão.

Exemplo:

```html
<button id="openModal" class="image-button">
    <img src="imagens/botao.webp" alt="Abrir modal">
</button>
```

O JavaScript identifica o botão através do ID:

```javascript
openModal
```

e abre o modal quando o usuário clica na imagem.

## Como executar

Não é necessário instalar nenhum programa ou biblioteca.

### 1. Baixe ou copie os arquivos

Coloque todos os arquivos dentro da mesma pasta.

### 2. Organize as imagens

Crie a pasta:

```text
imagens
```

e coloque dentro dela:

```text
header.jpg
botao.webp
```

### 3. Abra o projeto

Clique duas vezes no arquivo:

```text
index.html
```

O projeto será aberto no navegador.

Também é possível utilizar a extensão **Live Server** do Visual Studio Code.

## Executando com Live Server

No Visual Studio Code:

1. Instale a extensão **Live Server**;
2. Abra a pasta do projeto;
3. Clique com o botão direito em `index.html`;
4. Escolha `Open with Live Server`.

O projeto será aberto automaticamente no navegador.

## Responsividade

O layout foi desenvolvido para funcionar em diferentes tamanhos de tela.

O CSS utiliza:

```css
@media
```

para adaptar os elementos em dispositivos menores.

## Objetivo do projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais de desenvolvimento web, principalmente:

- Estruturação de páginas com HTML;
- Estilização com CSS;
- Manipulação do DOM;
- Eventos com JavaScript;
- Classes CSS;
- Responsividade;
- Armazenamento local com `localStorage`;
- Criação de interfaces interativas.

## Possíveis melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

- Menu mobile;
- Mais opções de temas;
- Novos tipos de modal;
- Animações ao rolar a página;
- Galeria de imagens;
- Sons de interface;
- Tela de carregamento;
- Efeitos de transição entre seções.

## Autor

Projeto desenvolvido para fins de estudo e prática de desenvolvimento web.

---

### Modal & Dark Mode

Projeto utilizando **HTML + CSS + JavaScript**.
