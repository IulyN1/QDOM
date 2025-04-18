import { parse } from './parser';
import { execute } from './executor';

(async () => {
	const scripts = document.querySelectorAll('script[type="text/qdom"]');

	for (const script of scripts) {
		let code = '';
		if (script.src) {
			const res = await fetch(script.src);
			code = await res.text();
		} else {
			code = script.textContent;
		}

		if (!code) {
			console.error('No code found in script tag!');
			return;
		}

		// Remove new lines and extra spaces and filter out empty lines
		code = code
			.split('\n')
			.map((line) => line.trim())
			.filter((line) => line.length > 0);

		for (const command of code) {
			const ast = parse(command);
			execute(ast);
		}
	}
})();
