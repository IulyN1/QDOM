// reused grammar rules are defined in the main grammar file

deleteStmt
  = "DELETE" _ target:starSelector _ "FROM" _ from:selector _ ";" {
      return {
        type: "DELETE",
        target,
        from
      };
    }
  / "DROP" _ sel:selector _ ";" {
      return {
        type: "DROP",
        target: sel
      };
    }
