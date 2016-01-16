function Texts(){

    messages = {
        welcome :
            "\n__          __  _                            _"+
            "\n\\ \\        / / | |                          | |"+
            "\n \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___  | |_ ___"+
            "\n  \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\ | __/ _ \\"+
            "\n   \\  /\\  /  __/ | (_| (_) | | | | | |  __/ | || (_) |"+
            "\n    \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/"+
            "\n ",
        name:
            "\n     _                 _ _                                   _ _"+
            "\n    | |               | | |                                 | ( )"+
            "\n ___| |__   __ _ _   _| | |__   __ _ _ __ ___   ___  ___  __| |/ ___"+
            "\n/ __| '_ \\ / _` | | | | | '_ \\ / _` | '_ ` _ \\ / _ \\/ _ \\/ _` | / __|"+
            "\n\\__ \\ | | | (_| | |_| | | | | | (_| | | | | | |  __/  __/ (_| | \\__ \\"+
            "\n|___/_| |_|\\__,_|\\__,_|_|_| |_|\\__,_|_| |_| |_|\\___|\\___|\\__,_| |___/"+
            "\n ",
        terminal:
            "\n _                      _             _"+
            "\n| |                    (_)           | |"+
            "\n| |_ ___ _ __ _ __ ___  _ _ __   __ _| |"+
            "\n| __/ _ \\ '__| '_ ` _ \\| | '_ \\ / _` | |"+
            "\n| ||  __/ |  | | | | | | | | | | (_| | |"+
            "\n \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|"+
            "\n "+
            "\n ",

        commands :
            "\nUsage: fetch [options]"+
            "\n "+
            "\nOptions: "+
            "\n "+
            "\n\t basicinfo - Returns a basic information"+
            "\n\t publicprofiles - Returns public profiles"+
            "\n\t experience - Returns professional exprience"+
            "\n\t profile - Returns a complete profile"+
            "\n "
        ,

        basic_info :
            "\n [[b;#2df5e0;]Name]  :    [[b;#ffffff;]Shaul Hameed]"+
            "\n [[b;#2df5e0;]DOB]   :    [[b;#ffffff;]21/03/1990]"+
            "\n [[b;#2df5e0;]Sex]   :    [[b;#ffffff;]Male]"+
            "\n [[b;#2df5e0;]Email] :    shaul21h@gmail.com"+
            "\n ",
        social_profile:
            "\n [[b;#2df5e0;]LinkedIn]  :    https://in.linkedin.com/in/shaulhameed"+
            "\n [[b;#2df5e0;]Github]    :    https://github.com/shaul21h"+
            "\n [[b;#2df5e0;]Facebook]  :    https://www.facebook.com/shaul21h"+
            "\n [[b;#2df5e0;]Twitter]   :    https://twitter.com/ziaudeen_ar"+
            "\n ",
        experience:
            "\n [[b;#2df5e0;]Software Engineer] - [[b;#ffffff;]Poshmark India] [April 2015 - Present]"+
            "\n [[b;#2df5e0;]Associate Software Engineer] - [[b;#ffffff;]Pearson English] [May 2013 - March 2015]"+
            "\n [[b;#2df5e0;]Software Developer] - [[b;#ffffff;]The Customer Labs] [June 2012 - April 2013]"+
            "\n "
    }


    this.getWelcomeMessage = function(){
        return messages.welcome + messages.name + messages.commands
    }

    this.getBasicInfo = function(){
        return messages.basic_info
    }

    this.getExperience = function(){
        return messages.experience
    }

    this.getSocialProfiles = function(){
        return messages.social_profile
    }
    this.getProfile = function(){
        return messages.basic_info +  messages.experience + messages.social_profile
    }

    this.getHelp = function(){
        return messages.commands
    }
}