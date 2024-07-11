import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: 'src/assets',
					dest: '',
				},
			],
		}),
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: 'src/index.tsx',
			name: 'BedtimeStories',
			formats: ['es', 'cjs'],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react/jsx-runtime'],
		},
	},
});
