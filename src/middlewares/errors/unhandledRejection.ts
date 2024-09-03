import colors from "colors";
import logger from "../../logger";

process.on("unhandledRejection", (reason: Error | any) => {
  console.log(`Unhandled Rejection: ${colors.red(reason.message || reason)}`);

  throw new Error(reason.message || reason);
});

process.on("uncaughtException", (error: Error) => {
  console.log(`Uncaught Exception: ${colors.inverse(error.message)}`);

  logger.error({
    message: `Uncaught Exception: ${error.message}`,
  });

  // process.exit(1);
});

// ---------- previous code ----------

// import logger from "../../logger";

// process.on("unhandledRejection", (reason: Error | any) => {
//   console.log(`Unhandled Rejection: ${reason.message || reason}`.red);

//   throw new Error(reason.message || reason);
// });

// process.on("uncaughtException", (error: Error) => {
//   console.log(`Uncaught Exception: ${error.message}`.inverse);

//   logger.error({
//     message: `Uncaught Exception: ${error.message}`,
//   });

//   // process.exit(1);
// });
