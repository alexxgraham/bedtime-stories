import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: 'node_modules/@ag108/bedtime-stories/dist/covers',
					dest: 'dist/covers',
				},
			],
		}),
	],
	build: {
		assetsInlineLimit: 0,
	},
});
