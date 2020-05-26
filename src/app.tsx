/**
 * https://umijs.org/zh-CN/plugins/plugin-initial-state
 */
async function getInitialState() {
  // const data = await fetchXXX();
  // return data;
  return {
    userId: '',
    role: '',
  };
}

export type InitialState = AsyncFunctionTheArg<typeof getInitialState>;

export {
  getInitialState,
};
