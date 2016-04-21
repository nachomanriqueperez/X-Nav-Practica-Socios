$(document).ready(function() {

        autor_val_up = [];
        avatar_val_up = [];
        titulo_val_up = [];
        contenido_val_up = [];
        fecha_val_up = [];

        autor_val = [];
        avatar_val = [];
        titulo_val = [];
        contenido_val = [];
        fecha_val = [];

        autor_val_mine = [];
        avatar_val_mine = [];
        titulo_val_mine = [];
        contenido_val_mine = [];
        fecha_val_mine = [];
        /*$(function() {
            $( "#accordion" ).accordion({
                collapsible: true,
                heightStyle: "content",
                navigation: true
            });
        });*/

        $(function() {
            $( "#tabs" ).tabs();
        });

        function organizar_val(val,num){
            var i_datos = 0;
            console.log("MIRAR ESTO");
            for (user = 0; user<num; user++){
                autor_val[user] = val[i_datos];
                console.log("autor:")
                console.log(autor_val[user]);
                i_datos++;
                avatar_val[user] = "<img class='col-md-2' src='" + val[i_datos] + "' height='100' width='100'></img>";
                console.log("avatar:")
                console.log(avatar_val[user]);
                i_datos++;
                titulo_val[user] = val[i_datos];
                console.log("titulo:")
                console.log(titulo_val[user]);
                i_datos++;
                contenido_val[user] = val[i_datos];
                console.log("contenido:")
                console.log(contenido_val[user]);
                i_datos++;
                fecha_val[user] = val[i_datos];
                console.log("fecha:")
                console.log(fecha_val[user]);
                i_datos++;
            };
            console.log("HASTA AQUI");
        };

        function organizar_val_myline(val,num){
            var i_datos = 0;

            for (user = 0; user<num; user++){
                autor_val_mine[user] = val[i_datos];
                //console.log("autor:")
                //console.log(autor_val_mine[user]);
                i_datos++;
                avatar_val_mine[user] = "<img class='col-md-2' src='" + val[i_datos] + "' height='100' width='100'></img>";
                //console.log("avatar:")
                //console.log(avatar_val_mine[user]);
                i_datos++;
                titulo_val_mine[user] = val[i_datos];
                //console.log("titulo:")
                //console.log(titulo_val_mine[user]);
                i_datos++;
                contenido_val_mine[user] = val[i_datos];
                //console.log("contenido:")
                //console.log(contenido_val_mine[user]);
                i_datos++;
                fecha_val_mine[user] = val[i_datos];
                //console.log("fecha:")
                //console.log(fecha_val_mine[user]);
                i_datos++;
            };
        };

        function organizar_val_update(val,num){
            var i_datos = 0;

            for (user = 0; user<num; user++){
                autor_val_up[user] = val[i_datos];
                //console.log("autor:")
                //console.log(autor_val_up[user]);
                i_datos++;
                avatar_val_up[user] = "<img class='col-md-2' src='" + val[i_datos] + "' height='100' width='100'></img>";
                //console.log("avatar:")
                //console.log(avatar_val_up[user]);
                i_datos++;
                titulo_val_up[user] = val[i_datos];
                //console.log("titulo:")
                //console.log(titulo_val_up[user]);
                i_datos++;
                contenido_val_up[user] = val[i_datos];
                //console.log("contenido:")
                //console.log(contenido_val_up[user]);
                i_datos++;
                fecha_val_up[user] = val[i_datos];
                //console.log("fecha:")
                //console.log(fecha_val_up[user]);
                i_datos++;
            };

        };
        $("#buttonmsg").click(function(){
            $.getJSON("update.json")
            .done(function(data) {
                var i = 0;
                var valores_up = [];
                var num_usuarios = 0;
                $.each(data,function (key,value){
                    num_usuarios++;
                    $.each(value,function (key,value){
                        $.each(value,function (key,value){
                            valores_up[i] = value;
                            i++;
                        });
                    });
                });

                organizar_val_update(valores_up, num_usuarios);

                for (user = 0; user<num_usuarios; user++){

        			$("<h3>",{"class":"autor_noticia" + user,
                        html: titulo_val_up[user] + ". Mensaje de " + autor_val_up[user] + ". " + fecha_val_up[user],
        			}).appendTo(".accordion2");

        			$("<div>",{"class":"noticia" + user,
                        html: avatar_val_up[user] + "<ul><li>" + contenido_val_up[user] +"</li></ul>",
        			}).appendTo(".accordion2");
                }
                $( ".accordion2" ).accordion({heightStyle: "content"});
                $("#buttonmsg").hide();
            })

            .fail(function(data){
                console.log("fallo");
            });

        });

        $.getJSON("timeline.json")
        .done(function(data) {

            var i = 0;
            var valores = [];
            var num_usuarios = 0;
            $.each(data,function (key,value){
                num_usuarios++;
                $.each(value,function (key,value){
                    $.each(value,function (key,value){
                        valores[i] = value;
                        i++;
                    });
                });
            });

            organizar_val(valores, num_usuarios);

            for (user = 0; user<num_usuarios; user++){

    			$("<h3>",{"class":"autor_noticia" + user,
                    html: titulo_val[user] + ". Mensaje de " + autor_val[user] + ". " + fecha_val[user],
    			}).appendTo(".accordion");

    			$("<div>",{"class":"noticia" + user,
                    html: avatar_val[user] + "<ul><li>" + contenido_val[user] +"</li></ul>",
    			}).appendTo(".accordion");
            }
            $( ".accordion" ).accordion({heightStyle: "content"});;

            /*var timeline_divs = $(".timeline");

            $.each(timeline_divs,function (key,value){

                var html = $(value).html();
                $(value).html(html + "--wisel--");
            });*/
        })
        .fail(function(data){
            console.log("fallo");
        });

        $.getJSON("myline.json")
        .done(function(data) {
            var i = 0;
            var valores_mine = [];
            var num_usuarios = 0;
            $.each(data,function (key,value){
                num_usuarios++;
                $.each(value,function (key,value){
                    $.each(value,function (key,value){
                        valores_mine[i] = value;
                        i++;
                    });
                });
            });

            //console.log("AQUIIIIIII");
            //console.log(valores_mine);

            organizar_val_myline(valores_mine, num_usuarios);
            //console.log(num_usuarios)
            for (user = 0; user<num_usuarios; user++){

                $("<h3>",{"class":"autor_noticia" + user,
                    html: titulo_val_mine[user] + ". Mensaje de " + autor_val_mine[user] + ". " + fecha_val_mine[user],
                }).appendTo(".accordion3");

                $("<div>",{"class":"noticia" + user,
                    html: avatar_val_mine[user] + "<ul><li>" + contenido_val_mine[user] +"</li></ul>",
                }).appendTo(".accordion3");
            }
            $( ".accordion3" ).accordion({heightStyle: "content"});

        })

        .fail(function(data){
            console.log("fallo");
        });

        $(function() {
            var progressTimer,
            progressbar = $( "#progressbar" ),
            progressLabel = $( ".progress-label" ),
            dialogButtons = [{
              text: "Cancelar descarga",
              click: closeDownload
            }],
            dialog = $( "#dialog" ).dialog({
              autoOpen: false,
              closeOnEscape: false,
              resizable: false,
              buttons: dialogButtons,
              open: function() {
                progressTimer = setTimeout( progress, 2000 );
              },
              beforeClose: function() {
                downloadButton.button( "option", {
                  disabled: false,
                  label: "Descargar"
                });
              }
        }),
        downloadButton = $( "#downloadButton" )
          .button()
          .on( "click", function() {
            $( this ).button( "option", {
              disabled: true,
              label: "Descargando..."
            });
            dialog.dialog( "open" );
        });

        progressbar.progressbar({
            value: false,
            change: function() {
              progressLabel.text( "Progreso: " + progressbar.progressbar( "value" ) + "%" );
        }, complete: function() {
              progressLabel.text( "Descargado!" );
              dialog.dialog( "option", "buttons", [{
                text: "Cancelar",
                click: closeDownload
              }]);
              $(".ui-dialog button").last().focus();
            }
        });

        function progress() {
            var val = progressbar.progressbar( "value" ) || 0;

            progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );

            if ( val <= 99 ) {
              progressTimer = setTimeout( progress, 50 );
            }
        }

        function closeDownload() {
            clearTimeout( progressTimer );
            dialog
              .dialog( "option", "buttons", dialogButtons )
              .dialog( "close" );
            progressbar.progressbar( "value", false );
            progressLabel
              .text( "Comenzando descarga..." );
            downloadButton.focus();
        }
        });

        $(function() {
            var dialog, form,

            name = $( "#name" ),
            allFields = $( [] ).add( name ),
            tips = $( ".validateTips" );

            function updateTips( t ) {
              tips
                .text( t )
                .addClass( "ui-state-highlight" );
              setTimeout(function() {
                tips.removeClass( "ui-state-highlight", 1500 );
              }, 500 );
            }

            function checkRegexp( o, regexp, n ) {
              if ( !( regexp.test( o.val() ) ) ) {
                o.addClass( "ui-state-error" );
                updateTips( n );
                return false;
              } else {
                return true;
              }
            }

            function addUser() {
              var valid = true;
              allFields.removeClass( "ui-state-error" );
              if ( valid ) {
                $( "#users tbody" ).append( "<tr>" +
                  "<td>" + name.val() + "</td>" +
                "</tr>" );
                dialog.dialog( "close" );
              }
              //console.log(name.val());
              //AQUI TENGO LA INFORMACION DE LA NOTICIA
              return valid;
            }

            dialog = $( "#dialog-form" ).dialog({
              autoOpen: false,
              height: 300,
              width: 350,
              modal: true,
              buttons: {
                "Publicar": addUser,
                Cancelar: function() {
                  dialog.dialog( "close" );
                }
              },
              close: function() {
                form[ 0 ].reset();
                allFields.removeClass( "ui-state-error" );
              }
            });

            form = dialog.find( "form" ).on( "submit", function( event ) {
              event.preventDefault();
              addUser();
            });

            $( "#create-msg" ).button().on( "click", function() {
              dialog.dialog( "open" );
            });
        });


        $(function() {
            $( "#draggable" ).draggable({ axis: "x" });
        });



        $(function() {
            $( "#menu" ).menu();
        });

        $(function() {
            $( "#dialogexit" ).dialog({
                autoOpen: false,
                show: {
                  effect: "blind",
                  duration: 1000
                },
                hide: {
                  effect: "explode",
                  duration: 1000
                }
            });

            $( "#openerexit" ).click(function() {
                $( "#dialogexit" ).dialog( "open" );
            });

            $( "#resp" ).click(function() {
                $( "#dialogresp" ).dialog( "open" );
                });
        });
});
