# Design Patterns (with Typescript)

Padrões de projeto são soluções de software elegantes para problemas cotidianos na programação. São divididos em 3 categorias:

- **Creational (Criação)**: Visam abstrair o processo de como objetos são criados na aplicação.
- **Structural (Estrutural)**: Lidam com a composição de classes e objetos.
- **Behavioural (Comportamentais)**: Caracterizam como as classes e objetos interagem e distribuem responsabilidades na aplicação.

## Princípios do Design Orientado a Objetos (SOLID)

- **Single Responsibility Principle (Princípio da Responsabilidade Única)**: Uma classe deve ter apenas 1 motivo para mudar.
- **Open/closed principle (Princípio do aberto/fechado)**: Classes ou objetos e métodos devem estar abertos para extensão, mas fechados para modificações.
- **Liskov substitution principle (Princípio da substituição de Liskov)**: Classes derivadas devem ser capazes de substituir totalmente classes-bases.
- **Interface segregation principle (Princípio da segregação de interface)**: Os clientes não devem ser forçados a depender de interfaces que não utilizam.
- **Dependency inversion principle (Princípio da inversão de dependência)**: Módulos de alto nível não devem ser dependentes de módulos de baixo nível. Ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso.

## Padrão Singleton

Tem a intenção de garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.

Geralmente é usado para acesso a recursos compartilhados, como acesso à base de dados, interfaces gráficas, sistema de arquivos, servidores de impressão e mais.

Também é usado para substituir variáveis globais, como em casos de uso de objetos de configuração do sistema como um todo.

## Padrão Builder

Tem a intenção de separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

O builder é comumente usado em objetos:

- com construtores complexos;
- com composição de vários objetos (composite);
- com algoritmo de criação complexo;
