'use strict'
if(!String.prototype.format){
    String.prototype.format = function() {
        var s = this;
        for (var i = 0; i < arguments.length; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i]);
        }
        return s;
    }
}

(function(){


    var generateCommands = function(){
        var _commands = new Commands();

        var cmdOptions = "\nUsage: fetch [options] \n \nOptions:  \n "


        for (var command in _commands){

            if(_commands.hasOwnProperty(command) && command !== "descriptions"){

                cmdOptions += "\n\t{0} - {1}".format(command, _commands["descriptions"][command] || "Returns {0}".format(command))

            }

        }

        cmdOptions +="\n ";

        return cmdOptions


    }



    var _finalize = function(div){
        $(div).find("a").css("color","#ffffff").css("font-weight","bold")
        $(div).find("a").each(function(index,value){

            value.innerHTML = value.innerHTML.replace(/[\;[\]!]+/g, '')

        })

    }

    var options = {
        finalize: _finalize
    }

    var printMessage = function printMessage(term, content){

        term.echo(content,options)

        if(options.raw){

            term.push(function(command){

                var message_to_be_printed = ""

                if(/no$/i.test(command.trim()) || /^n$/ig.test(command.trim())){

                    message_to_be_printed = "[[b;#2ABEFF;]Thank you for checking out my profile]"

                }
                else if(/yes$/i.test(command.trim()) || /^y$/ig.test(command.trim())){

                    document.getElementById('download_profile').click()

                    message_to_be_printed = "[[b;#2ABEFF;]Thank you for downloading my profile]"

                }
                    term.echo(message_to_be_printed)
                    term.pop();

                },
                {
                    prompt: "[[b;#ffffff;]Do you want to download my profile? (Yes / No)] "

                })
        }
    }

    var terminalFn = function terminalFn(command, term){
        var commands = new Commands()
        var error_msg ="[[;#FF4109;]Err: Command not found]"
        if(!/^fetch\s/.test(command) ){

            term.echo(error_msg)
            return
        }
        else if(/^fetch help$/g.test(command)){
            term.echo(error_msg)
            term.echo(commands.help())
            return
        }

        command = command.toLowerCase();

        var option = command.split('fetch')[1].trim()

        if(option.constructor == String){
            option = option.replace(/-+/g,"")
        }




        if(commands[option]){

            var output = commands[option]()
            if(output.constructor != String && output.then){

                options.raw = true;

                output.then(function(content){
                    printMessage(term, content)
                })
            }
            else{

                printMessage(term,output)
            }
        }
        else {

            term.echo("[[;#FF4109;]Err - Command not found]")
            term.echo(commands.help())

        }
    }

    var onDocumentReady = function(){



        var terminalOptions = {
            prompt:'[[b;#2ABEFF;]root]@shaulhameed [[b;#FF4109;]$] ',
            onInit: function init(term){
                term.echo("Last login:"+ Date())
            },
            greetings: messages.welcome + messages.name + messages.terminal + generateCommands()
        }


        $("#terminal-gen").terminal(terminalFn, terminalOptions)


    }



    $(document).ready(onDocumentReady)


})()