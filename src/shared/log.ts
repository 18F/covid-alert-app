export const captureMessage = async (message: string, params: {[key in string]: any} = {}) => {
  // force return for production
  return;

  const finalMessage = message;
  const finalParams = params;

  if (!__DEV__) {
    return;
  }
  console.log(finalMessage, finalParams); // eslint-disable-line no-console
};

export const captureException = async (message: string, error: any, params: {[key in string]: any} = {}) => {
  // force return for production
  return;

  const finalMessage = `Error: ${message}`;
  const finalParams = {
    ...params,
    error: {
      message: error && error.message,
      error,
    },
  };
  if (!__DEV__) {
    return;
  }
  console.log(finalMessage, finalParams); // eslint-disable-line no-console
};
