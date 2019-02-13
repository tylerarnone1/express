var Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};
function deleteTodo(req, res){
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res){
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res){
  res.render('skills/new');
}
function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('skills/show', {
    skills: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}
