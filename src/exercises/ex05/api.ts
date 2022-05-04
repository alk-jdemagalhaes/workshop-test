const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchUserApi = async (id: number) => {
  await delay(800);
  return {
    user: {
      firstname: "Foo",
      lastname: "Bar",
      id,
    },
  };
};
