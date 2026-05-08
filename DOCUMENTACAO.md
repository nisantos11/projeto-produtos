# Documentação Técnica - Cálculo Imposto Produtos

## 1. Visão Geral do Projeto

Este documento descreve a implementação técnica da aplicação "Cálculo Imposto Produtos", desenvolvida como parte da atividade ATIVIDADE03DEV-Produtos da unidade curricular de Codificação Front-End.

### Objetivo
Criar uma aplicação web funcional para cadastro de produtos com cálculo automático de impostos, utilizando apenas HTML, CSS e JavaScript puro, sem frameworks ou dependências externas.

### Tecnologias
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos
- **JavaScript Vanilla**: Lógica pura

---

## 2. Arquitetura da Aplicação

### 2.1 Estrutura de Diretórios

```
projeto_produtos/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos da aplicação
├── js/
│   └── script.js           # Lógica JavaScript
├── README.md               # Documentação principal
├── DOCUMENTACAO.md         # Este arquivo
└── ideas.md                # Conceitos de design
```

### 2.2 Fluxo de Dados

```
Usuário preenche formulário
    ↓
JavaScript captura dados (FormData)
    ↓
Validação de campos
    ↓
Criação de objeto produto
    ↓
Adição ao array products
    ↓
Renderização do DOM
    ↓
Atualização visual em tempo real
```

---

## 3. Componentes HTML

### 3.1 Header
- Título e subtítulo da aplicação
- Estilização com gradiente azul
- Responsivo em todas as telas

### 3.2 Formulário de Cadastro
Campos implementados:
- **Produto** (text input): Nome do produto
- **Características** (textarea): Descrição detalhada
- **Valor Unitário** (number input): Preço em reais
- **Unidade** (select): UN, KG, L, M, CX
- **Tipo de Produto** (radio buttons): 5 tipos com alíquotas diferentes

### 3.3 Listagem de Produtos
- Container dinâmico que renderiza cards de produtos
- Cada card contém:
  - Informações do produto
  - Campo de quantidade editável
  - Cálculos atualizados em tempo real
  - Botão de remoção

### 3.4 Footer
- Informações de copyright
- Texto descritivo

---

## 4. Estilos CSS

### 4.1 Variáveis CSS (Custom Properties)

```css
:root {
    /* Cores primárias */
    --primary-blue: #1e40af;
    --primary-blue-light: #3b82f6;
    --primary-blue-dark: #1e3a8a;
    
    /* Cores de status */
    --success-green: #10b981;
    --warning-orange: #f97316;
    --danger-red: #ef4444;
    
    /* Espaçamento */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
}
```

### 4.2 Layout Responsivo

**Desktop (>768px)**
- Grid de 2 colunas (formulário | listagem)
- Largura máxima: 1200px

**Tablet (768px)**
- Grid de 1 coluna
- Stack vertical

**Mobile (<480px)**
- Padding reduzido
- Botões em largura total
- Fontes ajustadas

### 4.3 Animações

1. **Entrada de Produtos**
   ```css
   @keyframes slideIn {
       from { opacity: 0; transform: translateY(20px); }
       to { opacity: 1; transform: translateY(0); }
   }
   ```
   Duração: 300ms

2. **Remoção de Produtos**
   ```css
   @keyframes slideOut {
       from { opacity: 1; transform: translateX(0); }
       to { opacity: 0; transform: translateX(-100%); }
   }
   ```
   Duração: 300ms

3. **Hover Effects**
   - Mudança de cor suave (150ms)
   - Elevação visual com sombra
   - Transformação de escala

---

## 5. Lógica JavaScript

### 5.1 Estrutura de Dados

```javascript
// Objeto Produto
{
    id: number,                    // ID único
    name: string,                  // Nome do produto
    characteristics: string,       // Características
    value: number,                 // Valor unitário
    unit: string,                  // Unidade (UN, KG, L, M, CX)
    type: number,                  // Tipo (1-5)
    quantity: number               // Quantidade
}

// Array Global
let products = [];                 // Armazena todos os produtos
let productIdCounter = 0;          // Contador para IDs únicos
```

### 5.2 Tabela de Alíquotas

```javascript
const TAX_RATES = {
    1: 0,      // Tipo 1: Isento
    2: 0.08,   // Tipo 2: 8%
    3: 0.10,   // Tipo 3: 10%
    4: 0.12,   // Tipo 4: 12%
    5: 0.17    // Tipo 5: 17%
};
```

### 5.3 Funções Principais

#### `handleAddProduct(event)`
- Captura dados do formulário
- Valida campos
- Cria objeto produto
- Adiciona ao array
- Limpa formulário
- Renderiza listagem

#### `validateProduct(product)`
- Verifica campos vazios
- Valida valores numéricos
- Retorna booleano

#### `renderProducts()`
- Limpa a listagem
- Itera sobre produtos
- Cria cards dinamicamente
- Adiciona event listeners

#### `createProductCard(product)`
- Gera HTML do card
- Calcula impostos
- Aplica estilos
- Adiciona interatividade

#### `handleQuantityChange(event, productId)`
- Atualiza quantidade
- Recalcula valores
- Atualiza DOM

#### `updateProductCalculations(product)`
- Calcula valor total
- Calcula imposto
- Calcula valor final
- Atualiza elementos do DOM

#### `handleRemoveProduct(productId)`
- Solicita confirmação
- Anima remoção
- Remove do array
- Renderiza listagem

### 5.4 Funções Utilitárias

#### `formatCurrency(value)`
```javascript
// Formata número como moeda brasileira
value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
// Resultado: "1.234,56"
```

#### `escapeHtml(text)`
```javascript
// Previne XSS escapando caracteres HTML
// & → &amp;
// < → &lt;
// > → &gt;
// " → &quot;
// ' → &#039;
```

---

## 6. Fórmulas de Cálculo

### 6.1 Valor Total do Item
```
Valor Total = Quantidade × Valor Unitário
```

### 6.2 Valor do Imposto
```
Valor Imposto = Valor Total × Alíquota
```

### 6.3 Valor Final
```
Valor Final = Valor Total + Valor Imposto
```

### 6.4 Exemplo Prático

**Produto: Notebook**
- Valor Unitário: R$ 2.000,00
- Quantidade: 2
- Tipo: 3 (10% de imposto)

Cálculos:
- Valor Total = 2 × 2.000 = R$ 4.000,00
- Valor Imposto = 4.000 × 0.10 = R$ 400,00
- Valor Final = 4.000 + 400 = R$ 4.400,00

---

## 7. Segurança

### 7.1 Prevenção de XSS
Todos os dados do usuário são escapados antes de serem inseridos no DOM:
```javascript
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
```

### 7.2 Validação de Entrada
- Campos vazios são rejeitados
- Valores numéricos são validados
- Tipos de dados são verificados

### 7.3 Sem Uso de innerHTML Inseguro
- Utiliza `textContent` para textos
- Utiliza `appendChild` para elementos
- Evita injeção de código

---

## 8. Performance

### 8.1 Otimizações
- Sem dependências externas
- Carregamento rápido
- Manipulação eficiente do DOM
- Animações com CSS (não JavaScript)

### 8.2 Complexidade
- Adicionar produto: O(1)
- Renderizar listagem: O(n)
- Remover produto: O(n)
- Atualizar quantidade: O(1)

---

## 9. Compatibilidade

### Navegadores Suportados
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Recursos Utilizados
- ES6+ (const, let, arrow functions)
- FormData API
- querySelector/querySelectorAll
- Event Listeners
- CSS Grid e Flexbox
- CSS Variables

---

## 10. Testes Manuais

### 10.1 Teste de Cadastro
1. Preencher todos os campos
2. Clicar em "Adicionar Produto"
3. Verificar se o produto aparece na listagem
4. Verificar se o formulário foi limpo

### 10.2 Teste de Cálculo
1. Adicionar produto com tipo 2 (8%)
2. Alterar quantidade para 2
3. Verificar cálculos:
   - Valor Total = quantidade × valor
   - Imposto = valor total × 0.08
   - Final = valor total + imposto

### 10.3 Teste de Remoção
1. Adicionar um produto
2. Clicar em "Remover Produto"
3. Confirmar remoção
4. Verificar se o produto foi removido

### 10.4 Teste de Responsividade
1. Abrir em desktop (>768px)
2. Redimensionar para tablet (768px)
3. Redimensionar para mobile (<480px)
4. Verificar layout em cada tamanho

---

## 11. Fluxo de Desenvolvimento no GitHub

### 11.1 Branches
- **main**: Versão estável final
- **develop**: Integração de features
- **feature/cadastro-produto**: Funcionalidade de cadastro
- **feature/listagem-produtos**: Funcionalidade de listagem
- **feature/remocao-produto**: Funcionalidade de remoção

### 11.2 Commits Padronizados
- `feat:` Novas funcionalidades
- `fix:` Correção de bugs
- `style:` Alterações de estilo
- `docs:` Documentação
- `refactor:` Refatoração de código

### 11.3 Exemplo de Fluxo
```
1. Criar branch feature/cadastro-produto
2. Implementar funcionalidade
3. Realizar commits com mensagens descritivas
4. Fazer push para origin
5. Abrir Pull Request para develop
6. Revisar e mesclar
7. Ao final, mesclar develop para main
```

---

## 12. Melhorias Futuras

### Possíveis Expansões
1. **Persistência**: Salvar dados em localStorage
2. **Backend**: Integrar com servidor Node.js
3. **Banco de Dados**: Armazenar em MongoDB ou PostgreSQL
4. **Autenticação**: Sistema de login
5. **Relatórios**: Gerar PDF com resumo de vendas
6. **Gráficos**: Visualização de dados com Chart.js
7. **Filtros**: Buscar e filtrar produtos
8. **Exportação**: Exportar dados em CSV/Excel

---

## 13. Referências

### Documentação Utilizada
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/)
- [HTML5 Specification](https://html.spec.whatwg.org/)

### Padrões Seguidos
- Semantic HTML5
- BEM (Block Element Modifier) para CSS
- Clean Code principles
- DRY (Don't Repeat Yourself)

---

## 14. Autor e Data

**Desenvolvido por**: Nicolly Santos  
**Matrícula**: nicolly.r.santos11@aluno.senai.br  
**Instituição**: SENAI - Centro de Educação e Tecnologia Albano Franco  
**Curso**: Ensino Médio Integrado em Desenvolvimento de Sistemas para Internet  
**Unidade Curricular**: Codificação Front-End  
**Data**: Maio de 2026

---

**Fim da Documentação Técnica**
