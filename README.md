# Cálculo Imposto Produtos

## Descrição do Projeto

Aplicação web simples para cadastro de produtos com cálculo automático de impostos. O sistema permite que usuários registrem produtos com suas características, valores unitários e tipos, e calcula automaticamente os impostos e valores finais conforme a tipificação de cada produto.

## Objetivo

Desenvolver uma aplicação web funcional utilizando **HTML**, **CSS** e **JavaScript puro** (sem frameworks) para demonstrar o entendimento de conceitos fundamentais de desenvolvimento front-end, manipulação do DOM e lógica de negócio.

## Funcionalidades Implementadas

### RF01 – Cadastro de Produto
- Formulário com campos para:
  - **Produto**: Nome/descrição do produto
  - **Características**: Detalhes do produto (textarea)
  - **Valor Unitário**: Preço unitário em reais
  - **Unidade**: Seleção entre UN, KG, L, M, CX
  - **Tipo de Produto**: Radio buttons para 5 tipos diferentes

### RF02 – Listagem dos Produtos
- Exibição dinâmica de produtos cadastrados
- Cada item mostra:
  - Nome do produto
  - Valor unitário
  - Unidade
  - Campo de entrada para quantidade (editável)
  - Valor total do item (quantidade × valor unitário)
  - Valor do imposto (conforme tipo)
  - Valor final (total + imposto)

### RF03 – Limpeza do Formulário
- Formulário é automaticamente resetado após cada envio

### RF04 – Remoção de Produto
- Botão de exclusão em cada produto
- Confirmação antes de remover
- Animação suave ao remover

## Regras de Negócio

### Validação
- Não é permitido envio com campos vazios
- Valores devem ser maiores que zero

### Cálculo de Impostos
A aplicação implementa as seguintes alíquotas por tipo de produto:

| Tipo | Descrição | Alíquota |
|------|-----------|----------|
| 1 | Isento | 0% |
| 2 | Normal | 8% |
| 3 | Intermediário | 10% |
| 4 | Especial | 12% |
| 5 | Premium | 17% |

### Fórmulas de Cálculo
- **Valor Total do Item**: quantidade × valor unitário
- **Valor do Imposto**: valor total × alíquota
- **Valor Final**: valor total + valor do imposto

### Persistência
- Dados armazenados em memória (array JavaScript)
- Sem persistência em banco de dados (conforme requisito)

## Estrutura de Arquivos

```
projeto_produtos/
├── index.html          # Estrutura HTML principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # Lógica JavaScript
├── README.md           # Este arquivo
└── ideas.md            # Documento de ideias de design
```

## Design e Estilização

### Filosofia de Design
O projeto segue a abordagem **Moderno e Profissional** com:
- Paleta de cores profissional (azul primário com destaques verdes e laranja)
- Layout responsivo (desktop e mobile)
- Hierarquia visual clara
- Transições suaves e animações
- Acessibilidade garantida

### Características Visuais
- **Header**: Gradiente azul com título e subtítulo
- **Formulário**: Seção à esquerda com campos bem organizados
- **Listagem**: Seção à direita com cards de produtos
- **Responsividade**: Layout em duas colunas no desktop, stack vertical no mobile
- **Diferenciação**: Produtos isentos de imposto destacados com borda verde

### Paleta de Cores
- Primária: Azul (#1e40af)
- Sucesso: Verde (#10b981) - para isentos
- Aviso: Laranja (#f97316) - para impostos
- Neutros: Cinza em várias tonalidades

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos com Flexbox e Grid
- **JavaScript Vanilla**: Lógica pura sem dependências externas

## Como Usar

### Abrir a Aplicação
1. Abra o arquivo `index.html` em um navegador moderno
2. A aplicação carregará completamente

### Adicionar um Produto
1. Preencha todos os campos do formulário
2. Selecione o tipo de produto
3. Clique em "Adicionar Produto"
4. O produto aparecerá na listagem abaixo

### Modificar Quantidade
1. Localize o produto na listagem
2. Altere o valor no campo "Quantidade"
3. Os cálculos serão atualizados automaticamente

### Remover um Produto
1. Clique no botão "Remover Produto"
2. Confirme a ação
3. O produto será removido com animação

## Requisitos Não Funcionais

- ✓ Aplicação client-side (sem backend)
- ✓ Código organizado e legível
- ✓ JavaScript puro (sem frameworks)
- ✓ Compatível com navegadores modernos
- ✓ Layout responsivo
- ✓ Sem persistência de dados (memória)

## Fluxo da Aplicação

```
1. Usuário preenche o formulário
   ↓
2. Clica em "Adicionar Produto"
   ↓
3. JavaScript captura os dados
   ↓
4. Valida os campos
   ↓
5. Cria novo elemento na lista
   ↓
6. Exibe na tela com animação
   ↓
7. Formulário é limpo automaticamente
   ↓
8. Usuário pode modificar quantidade ou remover
```

## Funcionalidades Adicionais (Diferenciais)

- ✓ Animações suaves (entrada, remoção, hover)
- ✓ Validação de formulário
- ✓ Confirmação antes de remover
- ✓ Cálculos em tempo real
- ✓ Formatação de moeda brasileira
- ✓ Escape de HTML para segurança
- ✓ Design responsivo completo
- ✓ Diferenciação visual de produtos isentos

## Navegadores Suportados

- Chrome/Chromium (versão 90+)
- Firefox (versão 88+)
- Safari (versão 14+)
- Edge (versão 90+)

## Notas de Desenvolvimento

### Organização do Código
- **HTML**: Estrutura semântica com classes descritivas
- **CSS**: Variáveis CSS para fácil manutenção, metodologia BEM
- **JavaScript**: Funções bem documentadas, separação de responsabilidades

### Segurança
- Função `escapeHtml()` previne XSS
- Validação de entrada antes de processar
- Sem uso de `eval()` ou `innerHTML` inseguro

### Performance
- Sem dependências externas
- Carregamento rápido
- Manipulação eficiente do DOM
- Animações otimizadas com CSS

## Autor

Desenvolvido por: Nicolly Santos  
Matrícula: nicolly.r.santos11@aluno.senai.br  
Instituição: SENAI - Centro de Educação e Tecnologia Albano Franco  
Curso: Ensino Médio Integrado em Desenvolvimento de Sistemas para Internet  
Unidade Curricular: Codificação Front-End

## Data de Conclusão

Maio de 2026

## Licença

MIT

---

**Desenvolvido para fins educacionais como parte da atividade ATIVIDADE03DEV-Produtos**
