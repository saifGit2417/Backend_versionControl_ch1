const fsModule=require('fs')
const jsonFile = JSON.parse(fsModule.readFileSync("./data.json", "utf-8"));
const users = jsonFile.users;

exports.addNewUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};

exports.getAllUser = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = +req.params.id;
  const idOfUser = users.find(p => p.id === id);
  res.json(idOfUser);
};

exports.putUser = (req, res) => {
  const id = +req.params.id;
  const idOfUser = users.find(p => p.id === id);
  users.splice(idOfUser, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.patchUser = (req, res) => {
  const id = +req.params.id;
  const idOfUser = users.find(p => p.id === id);
  const user = users[idOfUser];
  products.splice(idOfUser, 1, { ...user, ...req.body });
  res.status(201).json();
};

exports.deleteUserById = (req, res) => {
  const id = +req.params.id;
  const idOfUser = users.find(p => p.id === id);
  const user = users[idOfUser];
  users.splice(idOfUser, 1);
  res.status(201).json(user);
};


