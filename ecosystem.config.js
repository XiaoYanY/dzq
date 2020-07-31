const port = 6000;

module.exports = {
  apps: [
    {
      name: 'home',
      script: './server.js',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '2G',
      env_production: {
        PORT: 80,
        NODE_ENV: 'production',
        INIT_ENV: 'prod',
        APP_NAME: 'home',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_dev: {
        PORT: port,
        NODE_ENV: 'dev',
        INIT_ENV: 'dev',
        APP_NAME: 'home',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_prod: {
        PORT: 80,
        NODE_ENV: 'production',
        INIT_ENV: 'prod',
        APP_NAME: 'home',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_local: {
        PORT: port,
        NODE_ENV: 'local',
        INIT_ENV: 'local',
        APP_NAME: 'home',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_test: {
        PORT: port,
        NODE_ENV: 'dev',
        INIT_ENV: 'test',
        APP_NAME: 'home',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      }
    }
  ]
};
