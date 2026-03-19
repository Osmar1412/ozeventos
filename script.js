fetch('eventos.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('eventos');

    data.servicos.forEach(servico => {
      const bloco = document.createElement('div');

      bloco.innerHTML += `<h2>${servico.nome}</h2>`;

      servico.eventos.forEach(ev => {
        let html = `<h3>${ev.titulo}</h3><div class="galeria">`;

        ev.fotos.forEach(f => {
          html += `<img src="${f}">`;
        });

        html += `</div><div class="video">`;

        ev.videos.forEach(v => {
          html += `<iframe src="${v}" allowfullscreen></iframe>`;
        });

        html += `</div>`;

        bloco.innerHTML += html;
      });

      container.appendChild(bloco);
    });
  });
