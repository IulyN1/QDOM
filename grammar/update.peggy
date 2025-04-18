// reused grammar rules are defined in the main grammar file

updateStmt
  = "UPDATE" _ element:selector _ "SET" _ entries:entriestList _ ";" {
      return {
        type: "UPDATE",
        target: element,
        entries: entries
      };
    }

entriestList
  = head:entry tail:(_ "," _ entry)* {
      return [head, ...tail.map(t => t[3])]; // extract only the entry from the tuple
    }

entry
  = property:identifier _ "=" _ val:value {
      return { property: property, value: val };
    }
