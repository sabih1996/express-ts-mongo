module.exports = {
  apps: [
    {
      name: "Express ts BE",
      name: "backend",
      script: "npm",
      args: "run start",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
