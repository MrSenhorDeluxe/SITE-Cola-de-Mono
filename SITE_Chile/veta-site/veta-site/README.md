# VETA Cola de Mono — site demonstrativo

Landing page + página de vendas (simulada) para a bebida chilena Cola de Mono (CH Exports).

## Estrutura

```
veta-site/
├── index.html          Landing page (início, sobre nós, valores)
├── produtos.html       Catálogo + finalização da compra (2 etapas na mesma página)
├── css/
│   ├── tokens.css      Paletas de cores, fontes e escala tipográfica (arquivo "Estilização")
│   ├── base.css        Reset, tipografia, botões, acessibilidade
│   ├── layout.css      Cabeçalho e rodapé compartilhados
│   ├── home.css        Estilos da landing page
│   └── produtos.css    Estilos do catálogo, resumo e formulário
├── js/
│   ├── i18n.js         Dicionário ESP / PT-BR / ENG (somente rótulos de interface)
│   ├── main.js         Menu mobile e troca de idioma
│   └── produtos.js     Seleção de produto, quantidade, total, validação e confirmação simulada
└── assets/img/         logos/, produtos/ e fotos/ (WebP otimizado; logos em PNG)
```

## Como usar

Abra `index.html` no navegador (as fontes vêm do Google Fonts, então é preciso internet).
Para servir localmente: `python3 -m http.server` na pasta do projeto.

## Pontos de edição

- **Textos placeholder:** parágrafos em Lorem ipsum nos HTMLs. Troque direto no HTML.
- **Produtos e preços:** atributos `data-*` de cada `<article class="produto">` em `produtos.html`.
- **Cores e fontes:** `css/tokens.css`.
- **Banner de produtos:** `assets/img/fotos/banner-especiarias.webp` (recorte de baixa resolução — troque por uma foto própria).
- **Links das redes sociais:** `href="#"` no rodapé.
- **Fluxo de compra:** `#compra/<produto>` na URL abre a etapa de compra. Nada é enviado nem salvo.
