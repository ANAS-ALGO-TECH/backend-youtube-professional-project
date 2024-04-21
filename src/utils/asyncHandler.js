//! for Handling Promises Case
export const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

//? Some understanding Stuff
// const asyncHandler = (fn) =>{}
// const asyncHandler = (fn) =>{()=>{}}
// const asyncHandler = (fn) =>()=>{}
// const asyncHandler = (fn) =>async ()=>{}

//! for Handling try/catch Case
// export const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
