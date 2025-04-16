import { parse } from "./parser.js";

const queries = [
  "SELECT COUNT(*) FROM '#main';",
  "SELECT SUM('.item') FROM '.container';",
  "INSERT '<div>OK</div>' INTO '#wrapper';",
];

for (const q of queries) {
  try {
    const result = parse(q);
    console.log(q, "-->", result);
  } catch (err) {
    console.error("Parse error:", q, err.message);
  }
}
