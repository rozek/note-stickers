import { defineConfig } from 'vite'

export default defineConfig({
  build: {
  	sourcemap:true,
  	rollupOptions: {
  		external: [
  		  'javascript-interface-library','htm','preact','nanoid','nanoid-dictionary',
  		  'protoux','shareable-note-stickers','sns-boardview',
  		  'svelte-coordinate-conversion'
  		],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },

  worker: {
    format: "es",
  },
})