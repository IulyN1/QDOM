# QDOM - Lightweight DOM Manipulation for DBAs

**QDOM** is a lightweight Domain-Specific Language (DSL) for manipulating the DOM declaratively, inspired by SQL-like syntax.

With QDOM, you can write simple and expressive statements like:

```qdom
INSERT '<div>Hello</div>' INTO '#app';
UPDATE '#title' SET innerText = 'Updated Title';
DELETE '*' FROM '.items';
```

✅ No JavaScript knowledge needed — QDOM parses and executes your commands automatically.

---

## 🔥 Features

-   ⚡ Lightweight (only ~53 KB)
-   🎯 Pure client-side execution
-   ✨ SQL-like syntax for DOM manipulation
-   🧩 Easy integration into any project via a `<script>` tag
-   🔒 Protection against XSS when inserting HTML

---

## 🚀 Installation

### Import QDOM into the HTML file

```html
<script src="https://your-cdn.com/qdom.min.js"></script>
```

### How to Use

1. **Add your QDOM statements in a `script` tag with `type="text/qdom"`** (you can also specify a `src` file to add the statements separately):

```qdom
INSERT '<p>Welcome to QDOM!</p>' INTO '#content';
UPDATE '#header' SET innerText = 'New Title';
```

2. **QDOM will automatically parse and execute** the commands when the page loads.

---

## ⚙️ Supported Commands

| Command                                                 | Description                               |
| :------------------------------------------------------ | :---------------------------------------- |
| `INSERT '<html>' INTO 'selector';`                      | Insert HTML into a DOM element            |
| `UPDATE 'selector' SET property = value;`               | Update properties of a DOM element        |
| `DELETE '*' FROM 'selector';`                           | Remove all children from an element       |
| `DROP 'selector';`                                      | Completely remove an element from the DOM |
| `SELECT COUNT(*) FROM 'selector';`                      | Count elements                            |
| `CREATE TRIGGER event ON 'selector' EXECUTE statement;` | Define triggers on DOM events             |
| `EXECUTE TRIGGER event ON 'selector';`                  | Manually execute a trigger                |

---

## 📚 Development

To build the minified version:

```bash
npm run build
```

QDOM uses:

-   [Vite](https://vite.dev/) for bundling
-   [Peggy](https://peggyjs.org/) for parsing the DSL
-   [DOMPurify](https://github.com/cure53/DOMPurify) for sanitizing content

---

## 📜 License

MIT License

---
