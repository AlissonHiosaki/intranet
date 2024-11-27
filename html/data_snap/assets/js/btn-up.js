  // Exibir o botão ao rolar a página
  const btnTopo = document.getElementById('btnTopo');

  window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          btnTopo.style.display = "block";
      } else {
          btnTopo.style.display = "none";
      }
  };

  // Rolar suavemente para o topo quando clicar no botão
  btnTopo.onclick = function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };