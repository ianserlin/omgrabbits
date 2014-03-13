Rabbits = new Meteor.Collection('rabbits');

if (Meteor.isClient) {
  Meteor.subscribe('rabbits');

  Template.rabbits.helpers({
    rabbits: function(){
      return Rabbits.find({});
    }
  });

  Template.rabbit.events({
    'click .remove': function(){
      Rabbits.remove({_id: this._id});
      return false;
    }
  });

  Template.newRabbit.events({
    'click #newRabbit': function(){
      var rabbit = {
        name: $("#rabbitName").val()
        , age: $("#rabbitAge").val()
      };

      $("#rabbitName").val('');
      $("#rabbitAge").val('');

      Rabbits.insert(rabbit);
      return false;
    }
  });  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish('rabbits', function(){
    return Rabbits.find({});
  });
}
