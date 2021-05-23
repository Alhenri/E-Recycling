# E-recycle

<img src="https://media.giphy.com/media/GQwRL4GkTwW2OGfwWH/giphy.gif" width="420" height="300"/>

Este projeto está sendo criado utilizando o ReactJS com TypeScript, Context-API, React Hooks e styled-components. <b>ATENÇÃO: OS LOCAIS DE COLETA MOSTRADOS SÃO APENAS FICTICIOS (ATÉ O MOMENTO).</b>

### `Funcionalidades`

1. Sua principal funcionalidade é a busca de locais que estão disponiveis a receber lixos reciclaveis. Ele mostrará o dia e hora que as coletas serão realizadas, assim como mostrará a localização do mapa e o endereço dos locais cadastrados mais próximos de você.

### `Construção`

1. Aplicação construida utilizando o framework [ReactJS](https://pt-br.reactjs.org) também conta com a biblioteca
styled-components para a criação dos estilos e a react-map-gl na manipulação dos mapas

2. A aplicação trata-se de uma página [SPA](https://en.wikipedia.org/wiki/Single-page_application) pois a navegação entre
suas páginas não necessita do recarregamento completo da página.

### `Navegação`

1. Página inicial: A página inicial da uma breve introdução ao objetivo da aplicação. No menu no canto superior direito é possível alternar entre as página e clicar no simbolo de HOME para retornar a pagina inicial
2. Pontos de coleta: Ao clicar no botão, a página será carregada junto com o mapa onde mostrará os pontos disponiveis e um botão para buscar pontos próximos a sua localização (atualmente só há pontos ficticios proximos à Recife), quando clicar em um ponto, será carregada as informações sobre ele, tais como, imagem, localização, e regras de funcionamento.