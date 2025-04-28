import { DOM } from './engine.js';

export function execute(ast) {
	switch (ast.type) {
		case 'SELECT':
			switch (ast.func) {
				case 'COUNT':
					return DOM.select(ast.from).count(ast.target);
				case 'SUM':
					return DOM.select(ast.from).sum(ast.target);
				case 'AVG':
					return DOM.select(ast.from).avg(ast.target);
				case 'MIN':
					return DOM.select(ast.from).min(ast.target);
				case 'MAX':
					return DOM.select(ast.from).max(ast.target);
				default:
					throw new Error('Unknown function: ' + ast.func);
			}
		case 'INSERT':
			let insertValue;
			if (typeof ast.values === 'string') {
				insertValue = ast.values;
			} else {
				insertValue = execute(ast.values[1]); // ignore parenthesis
			}
			return DOM.insert(insertValue).into(ast.target);
		case 'UPDATE':
			const resolvedEntries = {};
			for (const entry of ast.entries) {
				let value = entry.value;
				if (typeof value !== 'string') {
					value = execute(value[1]); // ignore parenthesis
				}
				resolvedEntries[entry.property] = value;
			}
			return DOM.update(ast.target).set(resolvedEntries);
		case 'DELETE':
			return DOM.delete(ast.target).from(ast.from);
		case 'DROP':
			return DOM.drop(ast.target);
		case 'CREATE_TRIGGER':
			const statementCallback = () => execute(ast.statement);
			return DOM.createTrigger(ast.event).on(ast.target).execute(statementCallback);
		case 'EXECUTE_TRIGGER':
			return DOM.executeTrigger(ast.event).on(ast.target);
		default:
			throw new Error('Unknown AST node type: ' + ast.type);
	}
}
