function ContactPanelManager(panelId){
    var panel = $("#"+panelId);
    this.contacts = [];
    var organizations = [];
    var categorizedContacts = [];
    var createContactMarkup = function(contact){
        
        var html = "<div class='story-contact-info'>";
            html += "<div class='story-contact-info-name'>" + contact.name + "</div>";
            html += "<div>";
            html += "<div class='story-contact-info-title'>"  + contact.title + "</div>";
            html += "<div class='story-contact-info-phone'>" + contact.phoneNumber + "</div>";
            html += "</div>";
            html += "</div>";
        
            return html;
    }

    var updateOrganizations = function(organization){
        if(organizations.indexOf(organization) < 0){
            organizations.push(organization);
            categorizedContacts.push(
                {
                    organization: organization, 
                    html: "<h2>" + organization + "</h2><div>"
                });
        }
    }

    this.loadContacts = function(contacts){
        this.contacts = contacts;
        
        for(var ii=0; ii< contacts.length; ii++){
            var contact = contacts[ii];

            updateOrganizations(contact.organization);
            var currentOrgIndex = organizations.indexOf(contact.organization);
            var html = createContactMarkup(contact);
            categorizedContacts[currentOrgIndex].html += html; 
        }
        for(var ii=0; ii < categorizedContacts.length; ii++){
            categorizedContacts[ii].html += "</div>";
            $(panel).append(categorizedContacts[ii].html);
        }
        
        $(panel).accordion({active:false, collapsible: true});
    }

}
