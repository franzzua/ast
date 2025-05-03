import { ScopeAnalyzer } from './scope-analyzer';

const exampleCode = `
function greet(name) {
    const message = 'Hello, ' + name;
    console.log(message);
    return message;
}

const result = greet('World');
`;

const analyzer = new ScopeAnalyzer();
const graph = analyzer.analyze(exampleCode);

// Print the graph
console.log('Identifier Graph:');
analyzer.printGraph(); 