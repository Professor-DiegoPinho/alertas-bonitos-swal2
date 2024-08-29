const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
  Swal.setDefaults({
    input: 'text',
    confirmButtonText: 'Próximo &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  });

  var steps = [
    {
      title: 'Questionário da Alegria',
      text: 'Qual o seu nome?'
    },
    'Sua idade',
    'Sua cidade'
  ]

  Swal.queue(steps).then((result) => {
    Swal.resetDefaults()

    if (result.value) {
      Swal({
        title: 'Finalizado!',
        html:
          'Suas respostas foram: <pre>' +
          JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Show de bola!'
      })
    }
  })
});