// reused grammar rules are defined in the main grammar file

insertStmt
  = "INSERT" _ value:value _ "INTO" _ target:selector _ ";" {
      return {
        type: "INSERT",
        values: value,
        target: target
      };
    }
