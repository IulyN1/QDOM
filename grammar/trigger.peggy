// reused grammar rules are defined in the main grammar file

triggerStmt
  = "CREATE" _ "TRIGGER" _ event:identifier _ "ON" _ target:selector _ "EXECUTE" _ stmt:statement {
      return {
        type: "CREATE_TRIGGER",
        event: event,
        target: target,
        statement: stmt
      };
    }
  / "EXECUTE" _ "TRIGGER" _ event:identifier _ "ON" _ target:selector _ ";" {
      return {
        type: "EXECUTE_TRIGGER",
        event: event,
        target: target
      };
    }

statement
  = deleteStmt
  / updateStmt
  / insertStmt
