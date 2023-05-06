const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`)
);

exports.checkId = (req, res, next, val) => {
  if (val > tours.length) {
    return res.status(404).json({
      status: "failed",
      data: "No Data Found!",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: "failed",
      data: "Missing price or name!",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = +tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.getTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((el) => el.id === id);

  // //   if (id > tours.length) {
  // if (!tour) {
  //   return res.status(404).json({
  //     status: "failed",
  //     data: "No Data Found!",
  //   });
  // }

  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours: "Tour Updated...",
    },
  });
};

exports.deleteTour = (req, res) => {
  // if (+req.params.id > tours.length) {
  //   return res.status(404).json({
  //     status: "failed",
  //     data: "No Data Found!",
  //   });
  // }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
