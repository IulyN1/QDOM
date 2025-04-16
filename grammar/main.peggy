start
  = selectStmt
  / insertStmt

selector
  = "'" chars:[a-zA-Z0-9.#_/\[\]()>+=~:"-]+ "'" { return chars.join(""); }

_ "whitespace"
  = [ \t\n\r]*
