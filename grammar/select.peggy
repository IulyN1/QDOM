// reused grammar rules are defined in the main grammar file

selectStmt
  = "SELECT" _ func:aggregateFunc _ "(" _ target:starSelector _ ")" _ "FROM" _ from:selector _ ";"? {
      return {
        type: "SELECT",
        func: func,
        target: target,
        from: from
      };
    }

aggregateFunc
  = "COUNT" { return "COUNT"; }
  / "SUM"   { return "SUM"; }
  / "MIN"   { return "MIN"; }
  / "MAX"   { return "MAX"; }
  / "AVG"   { return "AVG"; }
