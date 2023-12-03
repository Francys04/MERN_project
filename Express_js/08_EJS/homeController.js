const homeController = (req, res) => {
  const data = {
    name: "Alex",
  };
  res.render("index", data);
};

export { homeController };
