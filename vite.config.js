import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: 'index.js',
			name: 'QDOM',
			fileName: 'qdom',
			formats: ['es']
		},
		outDir: 'dist',
		emptyOutDir: true,
		minify: 'esbuild'
	}
});
