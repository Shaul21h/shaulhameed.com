function TerminalCore(options){

    var defaults = {
        theme: "basic"
    }

    this.defaults = $.extend(defaults, options)


}

TerminalCore.prototype.init = function(term){
    term.echo("Last login:"+ Date())
}

TerminalCore.prototype.getOptions = function(){
    return this.defaults
}


function Commands(){

    texts = new Texts()

    this.basicinfo = function(){

        return texts.getBasicInfo()
    }

    this.publicprofiles = function(){
        return texts.getSocialProfiles()
    }

    this.experience = function(){
        return texts.getExperience()
    }

    this.profile = function(){
        return $.get('/assets/templates/profile.html')
    }

    this.help = function(){
        return texts.getHelp()

    }


}
