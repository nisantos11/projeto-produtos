/**
 * APLICAÇÃO: Cálculo Imposto Produtos
 * DESCRIÇÃO: Sistema de cadastro de produtos com cálculo automático de impostos
 * TECNOLOGIA: JavaScript Puro (Vanilla JS)
 * 
 * FUNCIONALIDADES:
 * - Cadastro de produtos com validação
 * - Cálculo automático de impostos por tipo
 * - Listagem dinâmica de produtos
 * - Alteração de quantidade em tempo real
 * - Remoção de produtos
 */

// ===== CONFIGURAÇÕES E CONSTANTES =====

const TAX_RATES = {
    1: 0,      // Tipo 1: Isento de imposto
    2: 0.08,   // Tipo 2: 8% de imposto
    3: 0.10,   // Tipo 3: 10% de imposto
    4: 0.12,   // Tipo 4: 12% de imposto
    5: 0.17    // Tipo 5: 17% de imposto
};

const PRODUCT_TYPE_NAMES = {
    1: 'Tipo 1 - Isento',
    2: 'Tipo 2 - 8%',
    3: 'Tipo 3 - 10%',
    4: 'Tipo 4 - 12%',
    5: 'Tipo 5 - 17%'
};

// ===== ESTADO DA APLICAÇÃO =====

let products = [];
let productIdCounter = 0;

// ===== ELEMENTOS DO DOM =====

const productForm = document.getElementById('productForm');
const productsList = document.getElementById('productsList');

// ===== EVENT LISTENERS =====

productForm.addEventListener('submit', handleAddProduct);

// ===== FUNÇÕES PRINCIPAIS =====

/**
 * Manipulador para adicionar novo produto
 * Valida os dados, cria o produto e atualiza a listagem
 */
function handleAddProduct(event) {
    event.preventDefault();

    // Captura os dados do formulário
    const formData = new FormData(productForm);
    
    const product = {
        id: productIdCounter++,
        name: formData.get('productName'),
        characteristics: formData.get('productCharacteristics'),
        value: parseFloat(formData.get('productValue')),
        unit: formData.get('productUnit'),
        type: parseInt(formData.get('productType')),
        quantity: 1
    };

    // Validação básica
    if (!validateProduct(product)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Adiciona o produto ao array
    products.push(product);

    // Limpa o formulário
    productForm.reset();

    // Atualiza a listagem
    renderProducts();
}

/**
 * Valida os dados do produto
 */
function validateProduct(product) {
    return (
        product.name.trim() !== '' &&
        product.characteristics.trim() !== '' &&
        product.value > 0 &&
        product.unit !== '' &&
        product.type >= 1 && product.type <= 5
    );
}

/**
 * Renderiza a listagem de produtos
 */
function renderProducts() {
    // Limpa a listagem
    productsList.innerHTML = '';

    // Se não há produtos, mostra mensagem vazia
    if (products.length === 0) {
        productsList.innerHTML = '<p class="empty-message">Nenhum produto cadastrado ainda. Adicione um para começar!</p>';
        return;
    }

    // Renderiza cada produto
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsList.appendChild(productCard);
    });
}

/**
 * Cria um card de produto
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product-card ${product.type === 1 ? 'exempt' : ''}`;
    card.dataset.productId = product.id;

    const taxRate = TAX_RATES[product.type];
    const isTaxExempt = product.type === 1;

    card.innerHTML = `
        <div class="product-header">
            <h3 class="product-name">${escapeHtml(product.name)}</h3>
            <span class="product-type-badge ${isTaxExempt ? 'exempt' : 'taxed'}">
                ${PRODUCT_TYPE_NAMES[product.type]}
            </span>
        </div>

        <p class="product-characteristics">${escapeHtml(product.characteristics)}</p>

        <div class="product-info">
            <div class="info-item">
                <span class="info-label">Valor Unitário</span>
                <span class="info-value currency">R$ ${formatCurrency(product.value)}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Unidade</span>
                <span class="info-value">${product.unit}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Alíquota de Imposto</span>
                <span class="info-value">${isTaxExempt ? 'Isento' : (taxRate * 100).toFixed(0) + '%'}</span>
            </div>
        </div>

        <div class="quantity-control">
            <label for="quantity-${product.id}">Quantidade:</label>
            <input 
                type="number" 
                id="quantity-${product.id}" 
                class="quantity-input" 
                value="${product.quantity}" 
                min="1" 
                step="1"
                data-product-id="${product.id}"
            >
        </div>

        <div class="calculations">
            <div class="calculation-row">
                <span class="calculation-label">Valor Total do Item</span>
                <span class="calculation-value currency" data-value="total-${product.id}">
                    R$ ${formatCurrency(product.value * product.quantity)}
                </span>
            </div>
            <div class="calculation-row">
                <span class="calculation-label">Valor do Imposto</span>
                <span class="calculation-value tax" data-value="tax-${product.id}">
                    R$ ${formatCurrency((product.value * product.quantity) * taxRate)}
                </span>
            </div>
            <div class="calculation-row final">
                <span class="calculation-label">Valor Final (com imposto)</span>
                <span class="calculation-value total" data-value="final-${product.id}">
                    R$ ${formatCurrency((product.value * product.quantity) * (1 + taxRate))}
                </span>
            </div>
        </div>

        <div class="product-actions">
            <button class="btn-remove" data-product-id="${product.id}">Remover Produto</button>
        </div>
    `;

    // Adiciona event listeners para o card
    const quantityInput = card.querySelector(`#quantity-${product.id}`);
    quantityInput.addEventListener('change', (e) => handleQuantityChange(e, product.id));

    const removeBtn = card.querySelector(`[data-product-id="${product.id}"]`);
    removeBtn.addEventListener('click', () => handleRemoveProduct(product.id));

    return card;
}

/**
 * Manipulador para mudança de quantidade
 */
function handleQuantityChange(event, productId) {
    const newQuantity = parseInt(event.target.value);

    if (newQuantity < 1) {
        event.target.value = 1;
        return;
    }

    // Encontra o produto e atualiza a quantidade
    const product = products.find(p => p.id === productId);
    if (product) {
        product.quantity = newQuantity;
        updateProductCalculations(product);
    }
}

/**
 * Atualiza os cálculos de um produto específico
 */
function updateProductCalculations(product) {
    const taxRate = TAX_RATES[product.type];
    const totalValue = product.value * product.quantity;
    const taxValue = totalValue * taxRate;
    const finalValue = totalValue + taxValue;

    // Atualiza os valores no DOM
    const totalElement = document.querySelector(`[data-value="total-${product.id}"]`);
    const taxElement = document.querySelector(`[data-value="tax-${product.id}"]`);
    const finalElement = document.querySelector(`[data-value="final-${product.id}"]`);

    if (totalElement) totalElement.textContent = `R$ ${formatCurrency(totalValue)}`;
    if (taxElement) taxElement.textContent = `R$ ${formatCurrency(taxValue)}`;
    if (finalElement) finalElement.textContent = `R$ ${formatCurrency(finalValue)}`;
}

/**
 * Manipulador para remover produto
 */
function handleRemoveProduct(productId) {
    // Confirma a remoção
    if (!confirm('Tem certeza que deseja remover este produto?')) {
        return;
    }

    // Encontra o índice do produto
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        // Anima a remoção
        const card = document.querySelector(`[data-product-id="${productId}"]`);
        if (card) {
            card.classList.add('removing');
            setTimeout(() => {
                // Remove do array
                products.splice(index, 1);
                // Atualiza a listagem
                renderProducts();
            }, 300);
        }
    }
}

// ===== FUNÇÕES UTILITÁRIAS =====

/**
 * Formata um número como moeda brasileira
 */
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

/**
 * Escapa caracteres HTML para evitar XSS
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ===== INICIALIZAÇÃO =====

console.log('✓ Aplicação Cálculo Imposto Produtos iniciada com sucesso!');
console.log('Tipos de produtos disponíveis:', PRODUCT_TYPE_NAMES);
