const DOM = {
	insert(content) {
		return {
			into(selector) {
				let elements;

				if (selector) {
					elements = document.querySelectorAll(selector);
					elements = elements.length === 0 ? elements : Array.from(elements);

					if (!elements.length) {
						console.error(`No element with ${selector} selector!`);
						return;
					}
					elements.forEach((elem) => {
						elem.innerHTML += content;
					});
				} else {
					console.error('No selector provided!');
					return;
				}

				elements = null;
			}
		};
	},
	update(selector) {
		return {
			set(content) {
				let elements;

				if (selector) {
					elements = document.querySelectorAll(selector);
					elements = elements.length === 0 ? elements : Array.from(elements);

					if (!elements.length) {
						console.error(`No element with ${selector} selector!`);
						return;
					}
				} else {
					console.error('No selector provided!');
					return;
				}

				if (typeof content === 'object') {
					Object.entries(content).forEach((entry) => {
						const [key, value] = entry;
						if (key === 'text') {
							elements.forEach((elem) => {
								elem.innerText = value;
							});
							return;
						}
						if (key === 'html') {
							elements.forEach((elem) => {
								elem.innerHTML = value;
							});
							return;
						}
						elements.forEach((elem) => {
							elem.style[key] = value;
						});
					});
				} else if (content !== undefined) {
					console.error('Invalid content type! Expected object!');
				} else {
					console.error('No content provided to update!');
				}

				elements = null;
			}
		};
	},
	delete(contentSelector) {
		return {
			from(selector) {
				let elements;

				if (selector) {
					elements = document.querySelectorAll(selector);
					elements = elements.length === 0 ? elements : Array.from(elements);

					if (!elements.length) {
						console.error(`No element with ${selector} selector!`);
						return;
					}
				} else {
					console.error('No selector provided!');
					return;
				}

				if (!contentSelector || contentSelector === '*') {
					elements.forEach((elem) => {
						elem.innerHTML = '';
					});
				} else {
					elements.forEach((elem) => {
						let children = elem.querySelectorAll(contentSelector);
						children = children.length === 0 ? children : Array.from(children);

						if (!children.length) {
							console.error(`No child element with ${contentSelector} selector!`);
							return;
						}
						children.forEach((child) => {
							child.innerHTML = '';
						});

						children = null;
					});
				}

				elements = null;
			}
		};
	},
	drop(selector) {
		let elements;

		if (selector) {
			elements = document.querySelectorAll(selector);
			elements = elements.length === 0 ? elements : Array.from(elements);

			if (!elements.length) {
				console.error(`No element with ${selector} selector!`);
				return;
			}
			elements.forEach((elem) => {
				elem.remove();
			});
		} else {
			console.error('No selector provided!');
			return;
		}

		elements = null;
	},
	createTrigger(event) {
		return {
			on(selector) {
				let elements;

				if (selector) {
					elements = document.querySelectorAll(selector);
					elements = elements.length === 0 ? elements : Array.from(elements);

					if (!elements.length) {
						console.error(`No element with ${selector} selector!`);
						return;
					}
				} else {
					console.error('No selector provided!');
					return;
				}
				return {
					execute(callback) {
						elements.forEach((elem) => {
							elem.addEventListener(event, callback);
						});

						elements = null;
					}
				};
			}
		};
	},
	executeTrigger(event) {
		return {
			on(selector) {
				let elements;

				if (selector) {
					elements = document.querySelectorAll(selector);
					elements = elements.length === 0 ? elements : Array.from(elements);

					if (!elements.length) {
						console.error(`No element with ${selector} selector!`);
						return;
					}
					elements.forEach((elem) => {
						let ev = new Event(event);
						elem.dispatchEvent(ev);
						ev = null;
					});
				} else {
					console.error('No selector provided!');
					return;
				}

				elements = null;
			}
		};
	}
};

export { DOM };
