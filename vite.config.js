import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: 'qdom.js',
			name: 'QDOM',
			fileName: 'qdom',
			formats: ['es']
		},
		outDir: 'dist',
		emptyOutDir: true,
		minify: 'esbuild'
	}
});
