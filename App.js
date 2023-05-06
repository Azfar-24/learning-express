const express = require("express");
const morgan = require("morgan");

const tourRoutes = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);
// app.get("/api/v1/tours/:id", getTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/users", userRoutes);

// app.get("/", (req, res) => {
//   res.status(200).json({ messahe: "Hello from the server.." });
// });
// app.post("/", (req, res) => {
//   res.status(200).json({ messahe: "Hello from the server.." });
// });

module.exports = app;
