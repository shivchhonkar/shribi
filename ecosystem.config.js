module.exports = {
  apps: [
    {
      name: 'shribi',
      cwd: '.',
      script: 'npm',
      args: 'start',
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 3000,
      exp_backoff_restart_delay: 100,
      kill_timeout: 5000,
      max_memory_restart: '512M',
      merge_logs: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
      },
      env_file: '.env.local',
      error_file: './logs/shribi-error.log',
      out_file: './logs/shribi-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
}
