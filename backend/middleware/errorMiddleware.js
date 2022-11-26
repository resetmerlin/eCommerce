const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //   because when we're inside a route, I want to be able to set a status code before

  // we throw an error and we can set it to whatever we want for, for or for anyone, whatever it might
  res.status(statusCode);
  //Now we want to set  res.status to whatever that status code is.
  res.json({
    message: err.message,
    // I want to respond with is Jason and I want it to be an object with a message.
    //And that message is going to come from that our object
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    //   And now I also want to have the stack trace, but only if we're in and if we're not in production.

    //   So we'll say process start ENV.
    //
  });
};

export { notFound, errorHandler };
