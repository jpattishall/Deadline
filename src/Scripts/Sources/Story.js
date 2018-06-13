function Story () {
    var phoneIndexes = ['202-555-0001', '202-555-0002', '202-555-0003', '719-555-0004',
        '719-555-0005', '719-555-0006', '617-555-0007', '781-555-0008',
        '901-555-0009', '617-555-0010', '508-555-0011', '212-555-0012',
        '212-555-0013', '212-555-0014', '212-555-0015'];

    var phoneConversations = [
        {
            phoneNumber: '202-555-0001',//senator's aid
            lineDead: false,
            hello: {
                normal: "Senator Jones' office, this is Henry.",
                problem: "Not a good time."
            },
            answeringMachineMessage : "Senator Jones, appreciates your call. Please leave your name, number, and a brief message after the tone. God bless America. *beep*",
            questions: [
                {
                    id: 0,
                    asked: false,
                    unlockCondition: 'none',
                    text: "Hello?",
                    response: {
                        useless: "Hello?",
                        useful: "I don't have the time for this, there's a situation.",
                        cryptic: "Not now.",
                        panic: "Oh no! Oh no! Please, please, please help!",
                        clueless: "You called me... you don't need to say hello."
                    }
                },
                {
                    id: 1,
                    asked: false,
                    unlockCondition: 'none',
                    text: "Is everything ok over there?",
                    response: {
                        useless: "What do you think? Of course not!",
                        useful: "They haven't broken through our gates yet. They aren't strong or smart.",
                        cryptic: "The Senator's police escort has been called back.",
                        panic: "We're all going to die!! Send HELP! HELP!!",
                        clueless: "Yeah? We're a bit busy with the campaign. What is this about?"
                    }
                },
                {
                    id: 2,
                    asked: false,
                    unlockCondition: 'none',
                    text: "I know about the coverup.",
                    response: {
                        useless: "Ok, so what do you want? I have more important things to deal with.",
                        useful: "The Governor doesn't want to start a panic, who would believe something like this?",
                        cryptic: "A cover up? No one will believe you.",
                        panic: "Don't tell anyone, oh god, what have we done?!",
                        clueless: "Sigh... ok which one?"
                    }
                },
                {
                    id: 3,
                    asked: false,
                    unlockCondition: 'none',
                    text: "Where is the Senator?",
                    response: {
                        useless: "That is classified.",
                        useful: "He's in his panic room, the whole residence is locked down.",
                        cryptic: "Somewhere we can't afford to be.",
                        panic: "Not here! I don't know!",
                        clueless: "The Senator is in meetings all day."
                    }
                },
                {
                    id: 4,
                    asked: false,
                    unlockCondition: 'none',
                    text: "What's the situation?",
                    response: {
                        useless: "What situation?",
                        useful: "The Governor is about to order the national guard to evacuate the capital, full weapons layout.",
                        cryptic: "Moving faster than anticipated.",
                        panic: "Situation?! That's what you are calling it?!?",
                        clueless: "Everythings ok, situation normal."
                    }
                },
                {
                    id: 5,
                    asked: false,
                    unlockCondition: 'none',
                    text: "Has the disaster affected you yet?",
                    response: {
                        useless: "Of course it has.",
                        useful: "No, but we know they'll be here eventually.",
                        cryptic: "Not yet, the epicenter isn't close enough.",
                        panic: "YES. IT'S A DISASTER! WHY IS THIS HAPPENING?!",
                        clueless: "The Senator is not ready confirm or deny the existence of a disaster."
                    }
                },

            ]
        },
        {}
    ];

    this.makeCall = function (number) {
        var index = phoneIndexes.indexOf(number);
        return phoneConversations[index];
    }
}

