function Commands(){

    this.basicinfo = function(){

        return messages.basic_info
    }

    this.publicprofiles = function(){
        return messages.social_profile
    }

    this.experience = function(){
        return messages.experience
    }

    this.profile = function(){
        return $.get('/assets/templates/profile.html')
    }

    this.help = function(){
        return messages.commands
    }

    this.descriptions = {
        basicinfo : "Returns basic information",
        publicprofiles: "Returns public profiles",
        experience : "Returns professional exprience",
        profile : "Returns complete profile"
    }
}
