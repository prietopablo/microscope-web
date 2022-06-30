/* eslint-disable no-unused-vars */
const debugMiddleware = (store) => (next) => (action) => {
  // console.log("debbug middleware");
  // console.log(action, store, next);
  console.log(`L'action ${action.type} est appelée`);
  next(action);
};

export default debugMiddleware;
