function Game(args) {
    var contactPanelManager = args.contactPanelManager;
    console.log(args.story);
    var story = args.story;
    var contacts = args.contacts;
    var terminal = args.terminal;
    var currentContact;
    this.start = function () {
        contactPanelManager.loadContacts(contacts);
    };

    this.call = function (number) {
        terminal.clear();
        terminal.write({ message: "Calling " + number + "...", type: 'system', typingSpeed: 1000 / 30 });
        var contact = story.makeCall(number);

        if (contact) {
            currentContact = contact;

            if (contact.lineDead) {
                terminal.write({ message: contact.answeringMachineMessage, type: 'system', typingSpeed: 1000 / 30 });
            }
            else {
                terminal.write({ message: contact.hello.normal, type: 'contact', typingSpeed: 1000 / 30 });
            }
        }
        else {
            var message = "I'm sorry; the number you have reached is not in service, or temporarily disconnected. The number you have reached is not in service at this time. This is a recording.";
            terminal.write({ message: message, type: 'system', typingSpeed: 1000 / 30 })
        }
    };
}