import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTodo: function() {
      this.set('model.isEditing', true);
    },
    acceptChanges: function() {
      // Remove is editing property
      this.set('model.isEditing', false);
      
      // If the todo is empty, delete it
      // otherwise save it with the new title
      if(Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo');
      } else {
        var todo = this.get('model');
        todo.save();
      }
    },
    removeTodo: function() {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});
