module.exports = {
  apps: [
    {
      name: "sitename",
      port: 3137,
      exec_mode: "cluster",
      instances: "1",
      script: "./.output/server/index.mjs",
      args: "preview",
    },
  ],
};
