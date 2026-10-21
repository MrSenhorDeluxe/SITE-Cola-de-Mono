/* ==========================================================
   i18n — troca de idioma da interface (ESP / PT-BR / ENG)
   Apenas rótulos de interface; os textos placeholder ficam fixos.
   ========================================================== */
(function () {
  "use strict";

  var DICIONARIO = {
    pt: {
      "skip": "Pular para o conteúdo", "menu": "Menu", "demo": "Site demonstrativo.",
      "nav.inicio": "Início", "nav.produtos": "Produtos", "nav.sobre": "Sobre nós",
      "slogan": "A essência do Chile à mesa.",
      "btn.ver": "Ver produtos", "btn.selecionar": "Selecionar",
      "sobre.titulo": "Sobre nós", "sobre.visao": "Nossa visão", "sobre.missao": "Missão",
      "valores.titulo": "Nossos valores",
      "produtos.titulo": "Nossos produtos",
      "compra.titulo": "Confirmar compra:", "compra.voltar": "← Voltar aos produtos", "compra.total": "Total",
      "form.nome": "Nome completo", "form.telefone": "Telefone", "form.email": "E-mail",
      "form.endereco": "Endereço", "form.cidade": "Cidade", "form.mensagem": "Sua mensagem",
      "form.enviar": "Enviar pedido",
      "erro.obrigatorio": "Preencha este campo.", "erro.email": "Informe um e-mail válido.",
      "ok.titulo": "Pedido recebido!",
      "ok.texto": "Esta é uma simulação: nenhum pagamento foi processado e nenhum dado foi enviado.",
      "ok.fechar": "Voltar aos produtos"
    },
    es: {
      "skip": "Saltar al contenido", "menu": "Menú", "demo": "Sitio demostrativo.",
      "nav.inicio": "Inicio", "nav.produtos": "Productos", "nav.sobre": "Sobre nosotros",
      "slogan": "La esencia de Chile en la mesa.",
      "btn.ver": "Ver productos", "btn.selecionar": "Seleccionar",
      "sobre.titulo": "Sobre nosotros", "sobre.visao": "Nuestra visión", "sobre.missao": "Misión",
      "valores.titulo": "Nuestros valores",
      "produtos.titulo": "Nuestros productos",
      "compra.titulo": "Confirmar compra:", "compra.voltar": "← Volver a los productos", "compra.total": "Total",
      "form.nome": "Nombre completo", "form.telefone": "Teléfono", "form.email": "Correo electrónico",
      "form.endereco": "Dirección", "form.cidade": "Ciudad", "form.mensagem": "Tu mensaje",
      "form.enviar": "Enviar pedido",
      "erro.obrigatorio": "Completa este campo.", "erro.email": "Ingresa un correo válido.",
      "ok.titulo": "¡Pedido recibido!",
      "ok.texto": "Esto es una simulación: no se procesó ningún pago ni se envió ningún dato.",
      "ok.fechar": "Volver a los productos"
    },
    en: {
      "skip": "Skip to content", "menu": "Menu", "demo": "Demo site.",
      "nav.inicio": "Home", "nav.produtos": "Products", "nav.sobre": "About us",
      "slogan": "The essence of Chile at your table.",
      "btn.ver": "See products", "btn.selecionar": "Select",
      "sobre.titulo": "About us", "sobre.visao": "Our vision", "sobre.missao": "Mission",
      "valores.titulo": "Our values",
      "produtos.titulo": "Our products",
      "compra.titulo": "Confirm purchase:", "compra.voltar": "← Back to products", "compra.total": "Total",
      "form.nome": "Full name", "form.telefone": "Phone", "form.email": "Email",
      "form.endereco": "Address", "form.cidade": "City", "form.mensagem": "Your message",
      "form.enviar": "Place order",
      "erro.obrigatorio": "Fill in this field.", "erro.email": "Enter a valid email.",
      "ok.titulo": "Order received!",
      "ok.texto": "This is a simulation: no payment was processed and no data was sent.",
      "ok.fechar": "Back to products"
    }
  };

  var HTML_LANG = { pt: "pt-BR", es: "es", en: "en" };
  var CHAVE = "veta-idioma";
  var atual = "pt";

  function lerPreferencia() {
    try { var v = localStorage.getItem(CHAVE); if (DICIONARIO[v]) return v; } catch (e) {}
    return "pt";
  }

  function t(chave) {
    return (DICIONARIO[atual] && DICIONARIO[atual][chave]) || DICIONARIO.pt[chave] || chave;
  }

  function aplicar(lang) {
    if (!DICIONARIO[lang]) lang = "pt";
    atual = lang;
    document.documentElement.lang = HTML_LANG[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    try { localStorage.setItem(CHAVE, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("idiomachange", { detail: { lang: lang } }));
  }

  window.I18N = { t: t, aplicar: aplicar, idioma: function () { return atual; }, inicial: lerPreferencia };
})();
