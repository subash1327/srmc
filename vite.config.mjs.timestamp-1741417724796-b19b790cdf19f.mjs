// vite.config.mjs
import { babel } from "file:///home/howdychat/livekit-client/node_modules/@rollup/plugin-babel/dist/es/index.js";
import dns from "dns";
import { resolve } from "path";
import { defineConfig } from "file:///home/howdychat/livekit-client/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/home/howdychat/livekit-client";
dns.setDefaultResultOrder("verbatim");
var vite_config_default = defineConfig({
  server: {
    port: 8081,
    open: true,
    allowedHosts: [
      "srm.focus.ind.in",
      "video.srmctele.com",
      "video.srmctele.com"
    ]
  },
  build: {
    minify: "esbuild",
    target: "es2019",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "Livekit Client SDK JS",
      // the proper extensions will be added
      fileName: "livekit-client"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {},
      plugins: [
        babel({
          babelHelpers: "bundled",
          plugins: ["@babel/plugin-proposal-object-rest-spread"],
          presets: ["@babel/preset-env"],
          extensions: [".js", ".ts", ".mjs"]
        })
      ]
    }
  },
  test: {
    environment: "happy-dom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvaG93ZHljaGF0L2xpdmVraXQtY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ob3dkeWNoYXQvbGl2ZWtpdC1jbGllbnQvdml0ZS5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2hvd2R5Y2hhdC9saXZla2l0LWNsaWVudC92aXRlLmNvbmZpZy5tanNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IGJhYmVsIH0gZnJvbSAnQHJvbGx1cC9wbHVnaW4tYmFiZWwnO1xuaW1wb3J0IGRucyBmcm9tICdkbnMnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmRucy5zZXREZWZhdWx0UmVzdWx0T3JkZXIoJ3ZlcmJhdGltJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDgwODAsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICBhbGxvd2VkSG9zdHM6IFtcbiAgICAgICdzcm0uZm9jdXMuaW5kLmluJyxcbiAgICAgICd2aWRlby5zcm1jdGVsZS5jb20nXG4gICAgXVxuICB9LFxuICBidWlsZDoge1xuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIHRhcmdldDogJ2VzMjAxOScsXG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ0xpdmVraXQgQ2xpZW50IFNESyBKUycsXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgZmlsZU5hbWU6ICdsaXZla2l0LWNsaWVudCcsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZG4ndCBiZSBidW5kbGVkXG4gICAgICAvLyBpbnRvIHlvdXIgbGlicmFyeVxuICAgICAgZXh0ZXJuYWw6IFtdLFxuICAgICAgb3V0cHV0OiB7fSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgYmFiZWwoe1xuICAgICAgICAgIGJhYmVsSGVscGVyczogJ2J1bmRsZWQnLFxuICAgICAgICAgIHBsdWdpbnM6IFsnQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQnXSxcbiAgICAgICAgICBwcmVzZXRzOiBbJ0BiYWJlbC9wcmVzZXQtZW52J10sXG4gICAgICAgICAgZXh0ZW5zaW9uczogWycuanMnLCAnLnRzJywgJy5tanMnXSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbScsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGFBQWE7QUFDdEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUo3QixJQUFNLG1DQUFtQztBQU16QyxJQUFJLHNCQUFzQixVQUFVO0FBRXBDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBO0FBQUEsTUFFTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUdiLFVBQVUsQ0FBQztBQUFBLE1BQ1gsUUFBUSxDQUFDO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUCxNQUFNO0FBQUEsVUFDSixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUMsMkNBQTJDO0FBQUEsVUFDckQsU0FBUyxDQUFDLG1CQUFtQjtBQUFBLFVBQzdCLFlBQVksQ0FBQyxPQUFPLE9BQU8sTUFBTTtBQUFBLFFBQ25DLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
