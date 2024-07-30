document.addEventListener('DOMContentLoaded', function () {
    var categoriaSelect = document.getElementById('categoria');
    var marcaSelect = document.getElementById('marca');
    var anoSelect = document.getElementById('ano');
    var valorSelect = document.getElementById('valor');
    var cilindradaSelect = document.getElementById('cilindrada-motos');
    var eletricaMotosSelect = document.getElementById('eletrica-motos');
    var completoSelect = document.getElementById('completo-carros');
    var productGrid = document.querySelector('.product-grid');

    var products = [
        {
            nome: 'Gol G4 (Branco)',
            imagem: 'Imagens/Gol G4.jpeg',
            descricao: 'R$ 22.000,00',
            categoria: 'carros',
            marca: 'Chevrolet',
            ano: 2016,
            completo: true,
            valor: 2200000
        },
        {
            nome: 'Titan',
            imagem: 'Imagens/2.png',
            descricao: 'R$ 8.000,00',
            categoria: 'motos',
            marca: 'Honda',
            cilindrada: '150cc',
            ano: 2006,
            eletrica: false,
            valor: 9000
        },
        {
            nome: 'Produto 1 Carro',
            imagem: 'Imagens/2.png',
            descricao: 'Descrição do produto 1.',
            categoria: 'carros',
            marca: 'Chevrolet',
            ano: 2018,
            completo: true,
            valor: 320000
        },
        {
            nome: 'Produto 1 Carro',
            imagem: 'Imagens/2.png',
            descricao: 'Descrição do produto 1.',
            categoria: 'carros',
            marca: 'Lamborghini',
            ano: 2022,
            completo: true,
            valor: 500000
        },
        {
            nome: 'Produto 2 Moto',
            imagem: 'Imagens/2.png',
            descricao: 'Descrição do produto 2.',
            categoria: 'motos',
            marca: 'Suzuki',
            cilindrada: '600cc',
            ano: 2019,
            eletrica: false,
            valor: 13000
        },
        {
            nome: 'Produto 2 Moto',
            imagem: 'Imagens/2.png',
            descricao: 'Descrição do produto 2.',
            categoria: 'motos',
            marca: 'Honda',
            cilindrada: '300cc',
            ano: 2021,
            eletrica: false,
            valor: 10000
        },
        {
            nome: 'Produto 2 Moto',
            imagem: 'Imagens/2.png',
            descricao: 'Descrição do produto 2.',
            categoria: 'motos',
            marca: 'Honda',
            cilindrada: '300cc',
            ano: 2021,
            eletrica: false,
            valor: 10000
        },
        {
            nome: 'Produto 2 Moto',
            imagem: 'Imagens/2.png',
            descricao: 'Descrição do produto 2.',
            categoria: 'motos',
            marca: 'Honda',
            cilindrada: '300cc',
            ano: 2021,
            eletrica: false,
            valor: 10000
        },
    ];

    renderProducts();

    categoriaSelect.addEventListener('change', function () {
        toggleCompletoFilter();
        toggleEletricaFilter();
        renderProducts();
    });
    marcaSelect.addEventListener('change', renderProducts);
    anoSelect.addEventListener('change', renderProducts);
    valorSelect.addEventListener('change', renderProducts);
    cilindradaSelect.addEventListener('change', renderProducts);
    eletricaMotosSelect.addEventListener('change', renderProducts);
    completoSelect.addEventListener('change', renderProducts);

    function renderProducts() {
        productGrid.innerHTML = '';

        var categoriaSelecionada = categoriaSelect.value;
        var marcaSelecionada = marcaSelect.value;
        var anoSelecionado = anoSelect.value;
        var valorSelecionado = valorSelect.value;
        var cilindradaSelecionada = cilindradaSelect.value;
        var eletricaMotosSelecionada = eletricaMotosSelect.value;
        var completoSelecionado = completoSelect.value;

        var filteredProducts = products.filter(function (produto) {
            return (
                (categoriaSelecionada === 'todos' || produto.categoria === categoriaSelecionada) &&
                (!marcaSelecionada || produto.marca === marcaSelecionada) &&
                (!anoSelecionado || produto.ano === parseInt(anoSelecionado)) &&
                (!valorSelecionado || produto.valor === parseInt(valorSelecionado)) &&
                (!cilindradaSelecionada || (produto.categoria === 'motos' && produto.cilindrada === cilindradaSelecionada)) &&
                (completoSelecionado === '' || (produto.categoria === 'carros' && produto.completo.toString() === completoSelecionado)) &&
                (eletricaMotosSelecionada === '' || (produto.categoria === 'motos' && produto.eletrica.toString() === eletricaMotosSelecionada))
            );
        });

        if (filteredProducts.length === 0) {
            var noProductsMessage = document.createElement('p');
            noProductsMessage.textContent = 'Nenhum produto encontrado com as características selecionadas.';
            productGrid.appendChild(noProductsMessage);
        } else {
            filteredProducts.forEach(function (produto) {
                var productCard = document.createElement('div');
                productCard.classList.add('product-card');

                var productLink = document.createElement('a');
                productLink.href = '#';

                var productImg = document.createElement('img');
                productImg.src = produto.imagem;
                productImg.alt = produto.nome;

                var productName = document.createElement('h2');
                productName.textContent = produto.nome;

                var productDescription = document.createElement('p');
                productDescription.textContent = produto.descricao;

                var productButton = document.createElement('a');
                productButton.href = '#';
                productButton.classList.add('button');
                productButton.textContent = 'Veja Mais';

                productLink.appendChild(productImg);
                productCard.appendChild(productLink);
                productCard.appendChild(productName);
                productCard.appendChild(productDescription);
                productCard.appendChild(productButton);

                productGrid.appendChild(productCard);
            });
        }

        updateFilters(categoriaSelecionada, marcaSelecionada, anoSelecionado, valorSelecionado, cilindradaSelecionada, completoSelecionado, eletricaMotosSelecionada);
    }

    function toggleCompletoFilter() {
        var categoriaSelecionada = categoriaSelect.value;
        var completoFilter = document.getElementById('completo-filtro');
        
        if (categoriaSelecionada === 'carros' || categoriaSelecionada === 'todos') {
            completoFilter.style.display = 'block';
        } else {
            completoFilter.style.display = 'none';
            completoSelect.value = '';
        }
    }

    function toggleEletricaFilter() {
        var categoriaSelecionada = categoriaSelect.value;
        var eletricaFilter = document.getElementById('eletrica-filtro');
        
        if (categoriaSelecionada === 'motos' || categoriaSelecionada === 'todos') {
            eletricaFilter.style.display = 'block';
        } else {
            eletricaFilter.style.display = 'none';
            eletricaMotosSelect.value = '';
        }
    }

    function updateFilters(categoria, marca, ano, valor, cilindrada, completo, eletrica) {
        resetFilters(marca, ano, valor, cilindrada, completo, eletrica);

        var carrosFilters = {
            marcas: [],
            anos: [],
            valores: []
        };

        var motosFilters = {
            marcas: [],
            cilindradas: [],
            anos: [],
            valores: []
        };

        products.forEach(function (produto) {
            if (produto.categoria === 'carros') {
                if (!carrosFilters.marcas.includes(produto.marca)) {
                    carrosFilters.marcas.push(produto.marca);
                }
                if (!carrosFilters.anos.includes(produto.ano)) {
                    carrosFilters.anos.push(produto.ano);
                }
                if (!carrosFilters.valores.includes(produto.valor)) {
                    carrosFilters.valores.push(produto.valor);
                }
            } else if (produto.categoria === 'motos') {
                if (!motosFilters.marcas.includes(produto.marca)) {
                    motosFilters.marcas.push(produto.marca);
                }
                if (!motosFilters.cilindradas.includes(produto.cilindrada)) {
                    motosFilters.cilindradas.push(produto.cilindrada);
                }
                if (!motosFilters.anos.includes(produto.ano)) {
                    motosFilters.anos.push(produto.ano);
                }
                if (!motosFilters.valores.includes(produto.valor)) {
                    motosFilters.valores.push(produto.valor);
                }
            }
        });

        if (categoria === 'todos' || categoria === '' ) {
            fillFilterOptions(motosFilters, 'motos', marca, ano, valor, cilindrada, completo, carrosFilters,completo ) 
            fillFilterOptions(carrosFilters, 'carros', marca, ano, valor, cilindrada, completo);
        } else if (categoria === 'carros') {
            fillFilterOptions(carrosFilters, 'carros', marca, ano, valor, cilindrada, completo);
            hideFilter('cilindrada-filtro');
            showFilter('completo-filtro');
        } else if (categoria === 'motos') {
            fillFilterOptions(motosFilters, 'motos', marca, ano, valor, cilindrada, completo);
            showFilter('cilindrada-filtro');
            hideFilter('completo-filtro');
        }
    }

    function fillFilterOptions(filters, category, marca, ano, valor, cilindrada, completo) {
        var marcaSelectElement = document.getElementById('marca');
        var anoSelectElement = document.getElementById('ano');
        var valorSelectElement = document.getElementById('valor');
        var cilindradaSelectElement = document.getElementById('cilindrada-motos');
        var completoSelectElement = document.getElementById('completo-carros');

        // Limpar opções existentes, exceto a opção "Selecione"
        clearSelectOptions(marcaSelectElement);
        clearSelectOptions(anoSelectElement);
        clearSelectOptions(valorSelectElement);
        clearSelectOptions(cilindradaSelectElement);

        // Função para limpar opções mantendo a opção "Selecione"
        function clearSelectOptions(selectElement) {
            while (selectElement.options.length > 1) {
                selectElement.remove(1);
            }
        }

        // Utilizar um conjunto para garantir que cada opção seja única
        var uniqueOptions = new Set();

        filters.marcas.forEach(function (marca) {
            uniqueOptions.add(marca);
        });

        // Converter Set para Array e ordenar
        var uniqueOptionsArray = Array.from(uniqueOptions).sort();

        uniqueOptionsArray.forEach(function (marca) {
            var optionElement = document.createElement('option');
            optionElement.value = marca;
            optionElement.textContent = marca;
            marcaSelectElement.appendChild(optionElement);
        });

        filters.anos.forEach(function (ano) {
            var optionElement = document.createElement('option');
            optionElement.value = ano;
            optionElement.textContent = ano;
            anoSelectElement.appendChild(optionElement);
        });

        filters.valores.forEach(function (valor) {
            var optionElement = document.createElement('option');
            optionElement.value = valor;
            optionElement.textContent = valor;
            valorSelectElement.appendChild(optionElement);
        });

        if (category === 'motos') {
            filters.cilindradas.forEach(function (cilindrada) {
                var optionElement = document.createElement('option');
                optionElement.value = cilindrada;
                optionElement.textContent = cilindrada;
                cilindradaSelectElement.appendChild(optionElement);
            });
        }

        marcaSelectElement.value = marca;
        anoSelectElement.value = ano;
        valorSelectElement.value = valor;
        cilindradaSelectElement.value = cilindrada;
        completoSelectElement.value = completo;
    }

    function resetFilters(marca, ano, valor, cilindrada, completo, eletrica) {
        var marcaSelectElement = document.getElementById('marca');
        var anoSelectElement = document.getElementById('ano');
        var valorSelectElement = document.getElementById('valor');
        var cilindradaSelectElement = document.getElementById('cilindrada-motos');
        var completoSelectElement = document.getElementById('completo-carros');
        var eletricaSelectElement = document.getElementById('eletrica-motos');

        marcaSelectElement.value = marca;
        anoSelectElement.value = ano;
        valorSelectElement.value = valor;
        cilindradaSelectElement.value = cilindrada;
        completoSelectElement.value = completo;
        eletricaSelectElement.value = eletrica;
    }

    function hideFilter(filterId) {
        var filterElement = document.getElementById(filterId);
        if (filterElement) {
            filterElement.style.display = 'none';
        }
    }

    function showFilter(filterId) {
        var filterElement = document.getElementById(filterId);
        if (filterElement) {
            filterElement.style.display = 'block';
        }
    }

    toggleCompletoFilter();
    toggleEletricaFilter();
});
