module.exports = {
  apps: [
    {
      name: 'Admin',
      port: '3000',
      script: './.output/server/index.mjs',
    },
  ],
  deploy: {
    production: {
      user: 'admin_web',
      host: ['192.168.0.35'],
      ref: 'origin/master',
      repo: 'https://github.com/AlexeyNixel/frontend-admin.git',
      path: '/home/admin_web/infomania-web/frontend',
      'post-deploy':
        'npm i && npm run build && pm2 restart ecosystem.config.cjs',
    },
  },
};
