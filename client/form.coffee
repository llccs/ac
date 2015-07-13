Template.contact.events {
  'submit form': (e,template)->
    e.preventDefault()

    Meteor.call 'newSubscription',{
      name: template.find('input[name="name"]').value
      email: template.find('input[name="emailadd"]').value
    },false,(err,res)->
      if err
        console.log "Failed to send request",err
        return alert "Failed to send request",err
      alert "Thanks! We'll get right back with you."
      template.find('form').reset()
      console.log "Response:",res

}
