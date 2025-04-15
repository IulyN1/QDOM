import peggy from "peggy";
import fs from "fs";

const grammar = fs.readFileSync("./select.peggy", "utf8");
const parser = peggy.generate(grammar);

const input = "SELECT COUNT(*) FROM '#main';";
const result = parser.parse(input);

console.log(result);
