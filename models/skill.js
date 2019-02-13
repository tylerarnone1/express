const skills = [
  {todo: 'JS Skills', done: true},
  {todo: 'Express skills', done: false},
  {todo: 'node.js Skills', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id){
  skills.splice(id, 1);

}
function create(skill){
  skills.push(skill);
}

function getOne(id) {
  return skills[id];
}

function getAll() {
  return skills;
}