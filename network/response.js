const { location } = require("express/lib/response");

exports.succes = (req, res, message, status) => {
    res.status(status || 200).send({
      "error": "",
      "body": message,
    });
  }

exports.error = (req,res, message, status, details) => {
  console.error(`[error en la respuesta] ${details}`);
  res.status(status || 500).send({
    "error": message,
    "body": "",
  });
}

exports.redirect = (req,res, message, status, url, details) => {
  console.log(res);
  // console.log(message);
  res.redirect(status = 300, url);
}
