insertStmt
  = "INSERT" _ value:htmlValue _ "INTO" _ target:selector _ ";"? {
      return {
        type: "INSERT",
        value: value,
        target: target
      };
    }

htmlValue
  = "'" content:htmlChars+ "'" { return content.join(""); }

htmlChars
  = [^']  // any character apart from a single quote
