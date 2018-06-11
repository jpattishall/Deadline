function ContactPanelManager(panelId){
    var panel = $("#"+panelId);
    this.contacts = [];

    this.loadContacts = function(contacts){
        this.contacts = contacts;
        
        for(var ii=0; ii< contacts.length; ii++){
            var contact = contacts[ii];
            $(panel).append("<p>" + contact.name + "</p>")
        }
    }
    
}