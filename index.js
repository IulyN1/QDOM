import { parse } from './parser.js';

let code = `SELECT COUNT(*) FROM '#main';

SELECT SUM('.item') FROM '.container';

INSERT '<div>OK</div>' INTO '#wrapper';

UPDATE '#myDiv' SET color = 'red', fontSize = '20px', visible = true;

DELETE div FROM '#main';

DELETE * FROM '#container';

DROP '#main';

CREATE TRIGGER click ON '#btn' EXECUTE DELETE 'div' FROM '#container';

EXECUTE TRIGGER click ON '#btn';`;

code = code
	.split('\n')
	.map((line) => line.trim())
	.filter((line) => line.length > 0);

for (const command of code) {
	try {
		const result = parse(command);
		console.log(command, '-->', result);
	} catch (err) {
		console.error('Parse error:', command, err.message);
	}
}
