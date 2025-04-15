start
  = selectStmt

selectStmt
  = "SELECT" _ func:aggregateFunc _ "(" _ target:funcTarget _ ")" _ "FROM" _ from:selector _ ";"? {
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

funcTarget
  = "*" { return "*"; }
  / sel:selector { return sel; }

selector
  = "'" chars:[a-zA-Z0-9.#-]+ "'" { return chars.join(""); }

_ "whitespace"
  = [ \t\n\r]*
