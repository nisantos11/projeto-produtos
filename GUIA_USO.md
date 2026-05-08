# Guia de Uso - Cálculo Imposto Produtos

## Introdução

Bem-vindo ao **Cálculo Imposto Produtos**! Este guia irá ajudá-lo a utilizar a aplicação de forma eficiente para cadastrar produtos e calcular impostos automaticamente.

---

## 1. Abrindo a Aplicação

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari ou Edge)
- Conexão com a internet (opcional - a aplicação funciona offline)

### Passos
1. Localize o arquivo `index.html` no diretório do projeto
2. Clique duas vezes no arquivo ou arraste-o para o navegador
3. A aplicação carregará completamente
4. Você verá o header "Cálculo Imposto Produtos" com o formulário e a listagem

---

## 2. Cadastrando um Novo Produto

### Passo 1: Preencher o Formulário

Localize a seção **"Adicionar Novo Produto"** no lado esquerdo (desktop) ou no topo (mobile).

Preencha os seguintes campos:

#### **Produto** (obrigatório)
- Digite o nome do produto
- Exemplos: "Notebook", "Mouse", "Teclado", "Monitor"
- Máximo de caracteres: sem limite

#### **Características** (obrigatório)
- Descreva as características do produto
- Exemplos: "Intel i7, 16GB RAM, SSD 512GB"
- Use a textarea para múltiplas linhas
- Máximo de caracteres: sem limite

#### **Valor Unitário** (obrigatório)
- Digite o preço do produto em reais
- Formato: números com até 2 casas decimais
- Exemplos: "1500.00", "99.99", "5000"
- O sistema aceita valores com ou sem centavos

#### **Unidade** (obrigatório)
- Selecione a unidade de medida no dropdown
- Opções disponíveis:
  - **UN** - Unidade (para produtos individuais)
  - **KG** - Quilograma (para produtos em peso)
  - **L** - Litro (para produtos líquidos)
  - **M** - Metro (para produtos em comprimento)
  - **CX** - Caixa (para produtos em caixas)

#### **Tipo de Produto** (obrigatório)
- Selecione uma das 5 opções de tipo
- Cada tipo tem uma alíquota de imposto diferente:

| Tipo | Descrição | Alíquota |
|------|-----------|----------|
| Tipo 1 | Isento | 0% (sem imposto) |
| Tipo 2 | Normal | 8% de imposto |
| Tipo 3 | Intermediário | 10% de imposto |
| Tipo 4 | Especial | 12% de imposto |
| Tipo 5 | Premium | 17% de imposto |

**Dica**: Produtos isentos (Tipo 1) serão destacados com uma borda verde na listagem.

### Passo 2: Enviar o Formulário

1. Após preencher todos os campos, clique no botão **"ADICIONAR PRODUTO"**
2. O produto aparecerá na listagem abaixo com uma animação suave
3. O formulário será automaticamente limpo para um novo cadastro

### Validação

A aplicação valida automaticamente:
- ✓ Todos os campos são obrigatórios
- ✓ O valor unitário deve ser maior que zero
- ✓ Se algum campo estiver vazio, um alerta será exibido

---

## 3. Visualizando a Listagem de Produtos

### Estrutura de um Card de Produto

Cada produto cadastrado é exibido em um **card** com as seguintes informações:

#### **Cabeçalho do Card**
- Nome do produto em destaque
- Badge com o tipo e alíquota de imposto

#### **Características**
- Descrição em itálico cinza
- Ajuda a identificar o produto

#### **Informações Básicas**
- Valor Unitário (em moeda brasileira)
- Unidade de medida
- Alíquota de imposto

#### **Controle de Quantidade**
- Campo de entrada para alterar a quantidade
- Padrão: 1 unidade
- Mínimo: 1 unidade

#### **Cálculos Automáticos**
- **Valor Total do Item**: quantidade × valor unitário
- **Valor do Imposto**: valor total × alíquota
- **Valor Final**: valor total + imposto

#### **Botão de Remoção**
- Botão vermelho "Remover Produto"
- Permite deletar o produto da listagem

---

## 4. Alterando a Quantidade de um Produto

### Como Fazer

1. Localize o produto na listagem
2. Encontre o campo **"Quantidade:"** no card
3. Clique no campo de entrada
4. Altere o número para a quantidade desejada
5. Pressione **Enter** ou clique fora do campo

### Atualização Automática

Assim que você alterar a quantidade, os cálculos serão atualizados automaticamente:
- Valor Total do Item
- Valor do Imposto
- Valor Final

**Exemplo:**
- Produto: Notebook
- Valor Unitário: R$ 2.000,00
- Tipo: 3 (10% de imposto)

| Quantidade | Valor Total | Imposto | Valor Final |
|-----------|------------|---------|------------|
| 1 | R$ 2.000,00 | R$ 200,00 | R$ 2.200,00 |
| 2 | R$ 4.000,00 | R$ 400,00 | R$ 4.400,00 |
| 5 | R$ 10.000,00 | R$ 1.000,00 | R$ 11.000,00 |

---

## 5. Removendo um Produto

### Passo 1: Localizar o Produto
- Encontre o card do produto que deseja remover
- Procure pelo botão vermelho **"Remover Produto"** na parte inferior do card

### Passo 2: Confirmar a Remoção
1. Clique no botão **"Remover Produto"**
2. Uma caixa de diálogo aparecerá perguntando: "Tem certeza que deseja remover este produto?"
3. Clique em **"OK"** para confirmar ou **"Cancelar"** para desistir

### Passo 3: Produto Removido
- O produto desaparecerá da listagem com uma animação suave
- Você poderá adicionar um novo produto imediatamente

---

## 6. Entendendo os Cálculos

### Fórmulas Utilizadas

#### Valor Total do Item
```
Valor Total = Quantidade × Valor Unitário
```

#### Valor do Imposto
```
Valor Imposto = Valor Total × Alíquota
```

#### Valor Final
```
Valor Final = Valor Total + Valor Imposto
```

### Exemplo Prático Completo

**Cenário**: Você quer comprar 3 mouses de R$ 50,00 cada, tipo 2 (8% de imposto)

**Cálculos**:
1. Valor Total = 3 × 50 = **R$ 150,00**
2. Valor Imposto = 150 × 0.08 = **R$ 12,00**
3. Valor Final = 150 + 12 = **R$ 162,00**

---

## 7. Diferenciação Visual

### Produtos Isentos (Tipo 1)

Produtos do **Tipo 1** (isentos de imposto) são visualmente diferenciados:
- Borda esquerda verde
- Fundo com leve tonalidade verde
- Badge em verde com texto "Tipo 1 - Isento"

Isso facilita a identificação rápida de produtos sem tributação.

### Produtos Tributados

Produtos dos **Tipos 2, 3, 4 e 5** têm:
- Borda padrão cinza
- Badge em laranja com a alíquota
- Cálculos de imposto visíveis

---

## 8. Responsividade (Diferentes Telas)

### Desktop (Telas grandes > 768px)

```
┌─────────────────────────────────────────────┐
│         CÁLCULO IMPOSTO PRODUTOS            │
├──────────────────┬──────────────────────────┤
│                  │                          │
│  Formulário      │   Listagem de Produtos   │
│  (esquerda)      │   (direita)              │
│                  │                          │
│                  │   Card 1                 │
│  - Produto       │   Card 2                 │
│  - Características│  Card 3                 │
│  - Valor         │   ...                    │
│  - Unidade       │                          │
│  - Tipo          │                          │
│  - Botão         │                          │
│                  │                          │
└──────────────────┴──────────────────────────┘
```

### Tablet/Mobile (Telas pequenas < 768px)

```
┌─────────────────────────────┐
│ CÁLCULO IMPOSTO PRODUTOS    │
├─────────────────────────────┤
│                             │
│  Formulário                 │
│  - Produto                  │
│  - Características          │
│  - Valor                    │
│  - Unidade                  │
│  - Tipo                     │
│  - Botão                    │
│                             │
├─────────────────────────────┤
│                             │
│  Listagem de Produtos       │
│                             │
│  Card 1                     │
│  Card 2                     │
│  Card 3                     │
│  ...                        │
│                             │
└─────────────────────────────┘
```

---

## 9. Dicas e Truques

### Dica 1: Adicionar Múltiplos Produtos Rapidamente
- Após adicionar um produto, o formulário é limpo automaticamente
- Você pode adicionar o próximo produto imediatamente
- Não precisa recarregar a página

### Dica 2: Verificar Cálculos
- Os cálculos são feitos em tempo real
- Não há delay ou necessidade de salvar
- Altere a quantidade e veja os valores atualizarem instantaneamente

### Dica 3: Usar Nomes Descritivos
- Use nomes claros para os produtos
- Inclua modelos e especificações nas características
- Isso facilita a identificação posterior

### Dica 4: Organizar por Tipo
- Adicione produtos isentos primeiro (Tipo 1)
- Depois adicione produtos tributados
- Assim fica mais fácil visualizar a diferença

### Dica 5: Testar Diferentes Alíquotas
- Teste cada tipo de produto (1 a 5)
- Observe como os impostos mudam
- Entenda o impacto de cada alíquota

---

## 10. Limitações e Considerações

### Armazenamento de Dados
- Os dados são armazenados apenas na memória do navegador
- Se você recarregar a página, todos os produtos serão perdidos
- Para manter os dados, você precisaria implementar localStorage ou um banco de dados

### Compatibilidade
- A aplicação funciona em navegadores modernos
- Recomenda-se usar as versões mais recentes
- Navegadores antigos podem ter problemas

### Sem Conexão com Internet
- A aplicação funciona completamente offline
- Não há sincronização com servidores
- Tudo é processado no seu navegador

---

## 11. Solução de Problemas

### Problema: Formulário não aceita meu produto

**Solução**: Verifique se todos os campos estão preenchidos:
- ✓ Nome do produto
- ✓ Características
- ✓ Valor unitário (número positivo)
- ✓ Unidade selecionada
- ✓ Tipo de produto selecionado

### Problema: Cálculos estão errados

**Solução**: Verifique:
- O tipo de produto selecionado (alíquota correta?)
- A quantidade inserida
- O valor unitário
- Recalcule manualmente para comparar

### Problema: Produto não aparece na listagem

**Solução**:
- Verifique se clicou no botão "Adicionar Produto"
- Procure na listagem abaixo do formulário
- Se a listagem estiver vazia, significa que nenhum produto foi adicionado

### Problema: Não consigo remover um produto

**Solução**:
- Clique no botão vermelho "Remover Produto"
- Confirme a ação na caixa de diálogo
- Se ainda não funcionar, recarregue a página

---

## 12. Contato e Suporte

Para dúvidas ou problemas, entre em contato:

**Desenvolvedor**: Nicolly Santos  
**E-mail**: nicolly.r.santos11@aluno.senai.br  
**Instituição**: SENAI - Centro de Educação e Tecnologia Albano Franco

---

## 13. Changelog

### Versão 1.0.0 (Maio 2026)
- ✓ Cadastro de produtos
- ✓ Cálculo automático de impostos
- ✓ Listagem dinâmica
- ✓ Alteração de quantidade
- ✓ Remoção de produtos
- ✓ Design responsivo
- ✓ Validação de formulário
- ✓ Animações suaves

---

**Fim do Guia de Uso**

Aproveite a aplicação! 🚀
