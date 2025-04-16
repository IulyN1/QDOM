import fs from "fs/promises";
import path from "path";
import peggy from "peggy";

const grammarDir = "./grammar";

const buildParser = async () => {
  try {
    const files = await fs.readdir(grammarDir);

    // ensure the main grammar file is first
    const orderedFiles = [
      "main.peggy",
      ...files.filter((file) => file !== "main.peggy"),
    ];

    const grammarParts = await Promise.all(
      orderedFiles.map((file) =>
        fs.readFile(path.join(grammarDir, file), "utf-8")
      )
    );
    const grammar = grammarParts.join("\n");

    // generate the parser using es6 output format (modules)
    const parser = peggy.generate(grammar, { output: "source", format: "es" });

    await fs.writeFile("parser.js", parser);
    console.log("Parser generated successfully!");
  } catch (err) {
    console.error("Error at generating parser:", err.message);
  }
};

buildParser();
