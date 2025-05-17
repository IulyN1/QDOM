start
  = selectStmt
  / insertStmt
  / updateStmt
  / deleteStmt
  / triggerStmt

// utils - reused grammar rules
selector
  = "'" chars:[a-zA-Z0-9.#_/\[\]()>+=~:"\x20-]+ "'" { return chars.join(""); }
  / identifier

starSelector
  = "*" { return "*"; }
  / sel:selector { return sel; }

value
  = "'" chars:[^']* "'" { return chars.join(""); }
  / "\"" chars:[^\"]* "\"" { return chars.join(""); }
  / identifier

identifier
  = chars:[a-zA-Z0-9_-]+ { return chars.join(""); }

_ "whitespace"
  = [ \t\n\r]*
