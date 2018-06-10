var Contact = function(args){
    this.name = args.hasOwnProperty("name") ? args.name : "";
    this.reachability = args.hasOwnProperty("reachability") ? args.reachability : 1;
    this.organization = args.hasOwnProperty("organization") ? args.organization : "";
};