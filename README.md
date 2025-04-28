# QDOM - DOM Manipulation with SQL-like syntax

**QDOM** is a lightweight Domain-Specific Language (DSL) for manipulating the DOM declaratively, inspired by SQL-like syntax.

With QDOM, you can write simple and expressive statements like:

```qdom
INSERT '<div>Hello</div>' INTO '#app';
UPDATE '#title' SET text = 'Updated Title';
DELETE '*' FROM '.items';
```

✅ No JavaScript knowledge needed — QDOM parses and executes your commands automatically.

## 🔥 Features

-   ⚡ Lightweight (only ~53 KB)
-   🎯 Pure client-side execution
-   ✨ SQL-like syntax for DOM manipulation
-   🧩 Easy integration into any project via a `<script>` tag
-   🔒 Protection against XSS when inserting HTML

## 🚀 Installation

### Import QDOM into the HTML file

You can include the minified version directly in your project with a `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/qdom-dsl/dist/qdom.min.js"></script>
```

### How to Use

1. **Add your QDOM statements in a `script` tag with `type="text/qdom"`** (you can also specify a `src` file to add the statements separately):

```qdom
INSERT '<p>Welcome to QDOM!</p>' INTO '#content';
UPDATE '#header' SET text = 'New Title';
```

2. **QDOM will automatically parse and execute** the commands when the page loads.

## ⚙️ Supported Commands

| Command                                                 | Description                               |
| :------------------------------------------------------ | :---------------------------------------- |
| `INSERT '<html>' INTO 'selector';`                      | Insert HTML into a DOM element            |
| `UPDATE 'selector' SET property = value;`               | Update properties of a DOM element        |
| `DELETE '*' FROM 'selector';`                           | Remove all children from an element       |
| `DROP 'selector';`                                      | Completely remove an element from the DOM |
| `SELECT COUNT(*) FROM 'selector';`                      | Count elements from a selected element    |
| `CREATE TRIGGER event ON 'selector' EXECUTE statement;` | Define triggers on DOM events             |
| `EXECUTE TRIGGER event ON 'selector';`                  | Manually execute a trigger                |

`SELECT` only allows applying aggregation functions, not directly selecting elements as that can be done with CSS selectors. `SELECT` supports `COUNT`, `SUM`, `AVG`, `MIN` and `MAX` operations. Both `SELECT` and `DELETE` support `*` selector alongside with normal CSS selectors.

You can also have a `SELECT` as content instead of HTML values for `INSERT`. The same also goes for the value of any property in the `UPDATE` statement. So, you can have something like this for example:

```qdom
INSERT (SELECT COUNT(*) FROM '.list') INTO '#total';
UPDATE '#cart' SET text = (SELECT SUM('.item') FROM '.list');
```

QDOM also adds interactivity on the page by implementing triggers (which use event listeners). It also allows for custom events, not just the ones provided by the browser by default (such as `click`) without changing the syntax at all. An example for adding and manually executing a `click` event on an element is the following:

```qdom
CREATE TRIGGER click ON '#btn' EXECUTE DELETE 'div' FROM '#container';
EXECUTE TRIGGER click ON '#btn';`;
```

## 📚 Development

To build the minified version:

```bash
npm run build
```

QDOM uses:

-   [Vite](https://vite.dev/) for bundling
-   [Peggy](https://peggyjs.org/) for parsing the DSL
-   [DOMPurify](https://github.com/cure53/DOMPurify) for sanitizing content
