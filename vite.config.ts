import { defineConfig } from 'vite'
import dts  from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  build: {  	
  	lib: {
  		entry:   path.resolve(__dirname, 'src/NoteStickers.ts'),
  		name:    'NoteStickers',
  		formats: ['es']
  	},
  	minify: false,
  	rollupOptions: {
  		external: [
  		  'javascript-interface-library','htm','preact','htm/preact','protoux','nanoid','nanoid-dictionary',
  		  'shareable-note-stickers','sns-boardview',
  		  'svelte-coordinate-conversion','localforage'
  		],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  plugins: [
    dts({ insertTypesEntry: true }),
  ],
})