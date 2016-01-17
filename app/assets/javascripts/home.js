(function(){

    var onDocumentReady = function(){

        core = new TerminalCore()

        texts = new Texts()
        console.log(texts.getWelcomeMessage())

        terminalOptions = {
            prompt:'[[b;#2ABEFF;]root]@shaulhameed [[b;#FF4109;]$] ',
            onInit: core.init,
            greetings: texts.getWelcomeMessage()
        }


        $("#terminal-gen").terminal(terminalFn, terminalOptions)


    }

    function terminalFn(command, term){
        commands = new Commands()
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

        option = command.split('fetch')[1].trim()

        if(option.constructor == String){
            option = option.replace(/-+/g,"")
        }
        var _finalize = function(div){
            $(div).find("a").css("color","#ffffff").css("font-weight","bold")
            $(div).find("a").each(function(index,value){

                value.innerHTML = value.innerHTML.replace(/[\;[\]!]+/g, '')

            })


        }






        if(commands[option]){

            output = commands[option]()

            options = {
                finalize: _finalize
            }


            function printMessage(content){


                term.echo(content,options)

                if(options.raw){

                    term.push(function(command){

                        var message_to_be_printed = ""

                        if(/no$/i.test(command.trim())){

                            message_to_be_printed = "[[b;#2ABEFF;]Thank you for checking out my profile]"

                        }
                        else if(/yes$/i.test(command.trim())){

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

            if(output.constructor != String && output.then){

                options.raw = true;

                output.then(printMessage)
            }
            else{

                printMessage(output)
            }
        }
        else {

            term.echo("[[;#FF4109;]Err - Command not found]")
            term.echo(commands.help())

        }



    }



    $(document).ready(onDocumentReady)




})()