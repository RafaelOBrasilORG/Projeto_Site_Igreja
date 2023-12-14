
        function processarImagemJornal() {
            var input = document.getElementById('imagemInputJornal');
            var file = input.files[0];

            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var imagemBase64 = e.target.result;
                    enviarNoticia(imagemBase64);

                    // Exibir a imagem em um elemento com a classe .img-responsive
                    var imagemElement = document.getElementById('imagemExibidaJornal');
                    if (imagemElement) {
                        imagemElement.src = imagemBase64;
                        imagemElement.style.display = "block"; // Exibir o elemento
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        function processarImagemEvento() {
            var input = document.getElementById('imagemInputEvento');
            var file = input.files[0];

            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var imagemBase64 = e.target.result;
                    enviarNoticia(imagemBase64);

                    // Exibir a imagem em um elemento com a classe .img-responsive
                    var imagemElement = document.getElementById('imagemExibidaEvento');
                    if (imagemElement) {
                        imagemElement.src = imagemBase64;
                        imagemElement.style.display = "block"; // Exibir o elemento
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        function enviarNoticia(imagemBase64) {
            // Coletar dados do formulário
            var formData = {
                titulo: document.getElementById('titulo').value,
                corpo: document.getElementById('corpo').value,
                data: document.getElementById('data').value,
                autor: document.getElementById('autor').value,
                imagem: imagemBase64
            };

            // Enviar dados para a API
            fetch('URL_DA_API', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Notícia enviada com sucesso:', data);
                // Adicionar aqui qualquer manipulação adicional após o envio bem-sucedido
            })
            .catch((error) => {
                console.error('Erro ao enviar notícia:', error);
                // Adicionar aqui qualquer manipulação de erro
            });
        }

        function excluir(){
            alert("O item foi excluido com sucesso!")
        }

        function adicionar(){
            alert("O Item foi adicionado com sucesso!")
        }