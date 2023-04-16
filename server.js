const app = require("./src/app");
const { port } = require("./src/configs/app");

const server = app.listen(port, () => {
  console.log(`Ứng dụng được chạy trên Port:::${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Tiến hành tắt ứng dụng.`);
  });
});
