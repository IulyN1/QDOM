const DOM = {
	select(selector) {
		return {
			count(target) {
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

				if (target) {
					let count = 0;
					if (target === '*') {
						count = elements.reduce((acc, elem) => acc + elem.children.length, 0);
					} else {
						elements.forEach((elem) => {
							count += elem.querySelectorAll(target).length;
						});
					}
					// free up memory
					elements = null;

					return count;
				} else {
					console.error('No target provided to count!');
					return;
				}
			},
			sum(target) {
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

				if (target) {
					let sum = 0,
						children;

					if (target === '*') {
						elements.forEach((elem) => {
							children = Array.from(elem.children);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								sum += isNaN(value) ? 0 : value;
							});
						});
					} else {
						elements.forEach((elem) => {
							children = elem.querySelectorAll(target);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								sum += isNaN(value) ? 0 : value;
							});
						});
					}
					// free up memory
					children = null;
					elements = null;

					return sum;
				} else {
					console.error('No target provided to sum!');
					return;
				}
			},
			avg(target) {
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

				if (target) {
					let sum = 0,
						count = 0,
						children;

					if (target === '*') {
						elements.forEach((elem) => {
							children = Array.from(elem.children);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								sum += isNaN(value) ? 0 : value;
								count++;
							});
						});
					} else {
						elements.forEach((elem) => {
							children = elem.querySelectorAll(target);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								sum += isNaN(value) ? 0 : value;
								count++;
							});
						});
					}
					// free up memory
					children = null;
					elements = null;

					return count > 0 ? sum / count : 0;
				} else {
					console.error('No target provided to average!');
					return;
				}
			},
			min(target) {
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

				if (target) {
					let min = Infinity,
						children;

					if (target === '*') {
						elements.forEach((elem) => {
							children = Array.from(elem.children);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								min = Math.min(min, isNaN(value) ? Infinity : value);
							});
						});
					} else {
						elements.forEach((elem) => {
							children = elem.querySelectorAll(target);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								min = Math.min(min, isNaN(value) ? Infinity : value);
							});
						});
					}
					// free up memory
					children = null;
					elements = null;

					return min === Infinity ? null : min;
				} else {
					console.error('No target provided to minimum!');
					return;
				}
			},
			max(target) {
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

				if (target) {
					let max = -Infinity,
						children;

					if (target === '*') {
						elements.forEach((elem) => {
							children = Array.from(elem.children);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								max = Math.max(max, isNaN(value) ? -Infinity : value);
							});
						});
					} else {
						elements.forEach((elem) => {
							children = elem.querySelectorAll(target);
							children.forEach((child) => {
								const value = parseFloat(child.innerText);
								max = Math.max(max, isNaN(value) ? -Infinity : value);
							});
						});
					}
					// free up memory
					children = null;
					elements = null;

					return max === -Infinity ? null : max;
				} else {
					console.error('No target provided to maximum!');
					return;
				}
			}
		};
	},
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
				// free up memory
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
				// free up memory
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
						// free up memory
						children = null;
					});
				}
				// free up memory
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
		// free up memory
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
						// free up memory
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

						// free up memory
						ev = null;
					});
				} else {
					console.error('No selector provided!');
					return;
				}
				// free up memory
				elements = null;
			}
		};
	}
};

export { DOM };
