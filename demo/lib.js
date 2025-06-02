QDOM.update('.greeting').set({ html: 'Welcome to <i>QDOM</i> store!', color: 'green' });

QDOM.createTrigger('click')
	.on('button[data-id="book"]')
	.execute(() => {
		QDOM.insert('<div>📘 Book - $<span>30</span></div>').into('#cart');
	});
QDOM.createTrigger('click')
	.on('button[data-id="pen"]')
	.execute(() => {
		QDOM.insert('<div>🖊️ Pen - $<span>3</span></div>').into('#cart');
	});
QDOM.createTrigger('click')
	.on('button[data-id="notebook"]')
	.execute(() => {
		QDOM.insert('<div>📒 Notebook - $<span>7</span></div>').into('#cart');
	});

QDOM.createTrigger('click')
	.on('.add-to-cart')
	.execute(() => {
		QDOM.update('#total span').set({ text: QDOM.select('#cart').sum('div span') });
		QDOM.update('#items span').set({ text: QDOM.select('#cart').count('*') });
	});
QDOM.createTrigger('click')
	.on('#clear-cart')
	.execute(() => {
		QDOM.delete('*').from('#cart');
		QDOM.update('#total span').set({ text: 0 });
		QDOM.update('#items span').set({ text: 0 });
	});
