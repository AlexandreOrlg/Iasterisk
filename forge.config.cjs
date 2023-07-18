module.exports = {
  packagerConfig: {
    ignore: [
      /^\/src/,
      /(.eslintrc.json)|(.gitignore)|(electron.vite.config.ts)|(forge.config.cjs)|(tsconfig.*)/,
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-vite',
      config: {
        // `build` can specify multiple entry builds, which can be
        // Main process, Preload scripts, Worker process, etc.
        build: [
          {
            // `entry` is an alias for `build.lib.entry`
            // in the corresponding file of `config`.
            entry: 'src/main/index.js',
            config: 'electron.vite.config.mjs'
          },
          {
            entry: 'src/preload/index.js',
            config: 'electron.vite.config.mjs'
          }
        ],
        renderer: [
          {
            name: 'main_window',
            entry: 'src/renderer/index.js',
            config: 'electron.vite.config.mjs'
          }
        ]
      }
    }
  ]
};
