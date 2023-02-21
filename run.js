/* eslint-disable */
const { build } = require('esbuild');
const chokidar = require('chokidar');
const { createServer } = require('http-server');
const env = process.env.NODE_ENV;

function runServer() {
  const server = createServer({
    root: './public',
    showDir: true,
    autoIndex: false,
    gzip: true,
    brotli: true,
  });
  const PORT = 4000;
  server.listen(PORT);
  console.log('You can now view the app in the browser.\n');
  console.log('   Local:            http://localhost:' + PORT);
  console.log('   On Your Network:  http://192.168.1.3:' + PORT);
}

function runBuild() {
  build({
    // stdio: 'inherit',
    minify: true,
    entryPoints: ['./src/index.tsx'],
    outfile: './public/dist/bundle.js',
    // minify: 'production' === env,
    bundle: true,
    format: 'esm',
    define: {
      'process.env.NODE_ENV': `'${env}'`,
    },
    // sourcemap: 'development' === env
  }).catch((err) => {
    console.log(err);
    process.exit(1);
  });
}

chokidar.watch('./src/**', {
  ignoreInitial: true,
}).on('all', (event, path) => {
  console.log('=> ', event, path);
  runBuild();
}).on('ready', () => {
  runServer();
  runBuild();
  console.log('\n=====================================');
  console.log('Esbuild is waiting for changes...');
  console.log('======================================\n');
});

process.on('warning', (warning) => {
  console.log(warning.stack);
});
