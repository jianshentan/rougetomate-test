var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'Team';


  // Render the view
  if (req.isMobile) {

    // Load the galleries by sortOrder
    view.query('teams', keystone.list('Teams').model.find().sort('sortOrder'));
    view.render('m_team', { layout: 'mobile' } );
  }
  else {

    // Load the galleries by sortOrder
    view.query('teams', keystone.list('Teams').model.find().sort('sortOrder'));

    view.render('team');
  }


};