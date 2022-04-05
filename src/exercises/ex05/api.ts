export const fetchUserApi = (id: number): { user: any } => ({
  user: {
    firstname: "Foo",
    lastname: "Bar",
    id,
  },
});
