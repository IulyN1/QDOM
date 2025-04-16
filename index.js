import { parse } from "./parser.js";

const queries = [
  "SELECT COUNT(*) FROM '#main';",
  "SELECT SUM('.item') FROM '.container';",
  "INSERT '<div>OK</div>' INTO '#wrapper';",
  "UPDATE '#myDiv' SET color = 'red', fontSize = '20px', visible = true;",
  "DELETE div FROM '#main';",
  "DELETE * FROM '#container';",
  "DROP '#main';",
  "CREATE TRIGGER click ON '#btn' EXECUTE DELETE 'div' FROM '#container';",
  "EXECUTE TRIGGER click ON '#btn';",
];

for (const q of queries) {
  try {
    const result = parse(q);
    console.log(q, "-->", result);
  } catch (err) {
    console.error("Parse error:", q, err.message);
  }
}
