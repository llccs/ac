Meteor.methods({
   'newSubscription': function(opts) {
      check(opts.name,Match.NonEmptyString);
      check(opts.email,Match.Email);
      if(this.isSimulation) {
         return;
      }

      var email = {
         to: 'll@cycoresys.com',
         from: 'web@cycoresys.com',
         headers: {
            'X-CyCore-Id': Random.id(),
            'Date': moment().format("ddd, D MMM YYYY HH:mm:ss ZZ")
         },
         subject: "AC Contact",
         text: "Contact \""+ opts.name +"\" <"+ opts.email +">."
      };

      return Email.send(email);
   }
});
