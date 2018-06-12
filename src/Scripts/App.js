function Game(args){
    var contactPanelManager = args.contactPanelManager;
    var story = args.story;
    var contacts = args.contacts;
    var terminal = args.terminal;

    this.start = function(){
        contactPanelManager.loadContacts(contacts);
    };
}