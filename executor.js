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
			return DOM.insert(ast.values).into(ast.target);
		case 'UPDATE':
			const entriesArray = ast.entries.map((entry) => {
				return { [entry.property]: entry.value };
			});
			const entries = Object.assign({}, ...entriesArray);
			return DOM.update(ast.target).set(entries);
		case 'DELETE':
			return DOM.delete(ast.target).from(ast.from);
		case 'DROP':
			return DOM.drop(ast.target);
		case 'CREATE_TRIGGER':
			return DOM.createTrigger(ast.event).on(ast.target).execute(ast.statement);
		case 'EXECUTE_TRIGGER':
			return DOM.executeTrigger(ast.event).on(ast.target);
		default:
			throw new Error('Unknown AST node type: ' + ast.type);
	}
}
