$(document).ready(function() {

        autor_val = [];
        avatar_val = [];
        titulo_val = [];
        contenido_val = [];
        fecha_val = [];

        function organizar_val(val){
            var i = 0;

            autor_val[i] = val[0];
            avatar_val[i] = "<img class='col-md-2' src='" + val[1] + "' height='100' width='100'></img>";
            titulo_val[i] = val[2];
            contenido_val[i] = val[3];
            fecha_val[i] = val[4];

            console.log(autor_val[i]);
            console.log(avatar_val[i]);
            console.log(titulo_val[i]);
            console.log(contenido_val[i]);
            console.log(fecha_val[i]);

            i++;
            return i;
        };

        $.getJSON("timeline.json")
        .done(function(data) {

            var i = 0;
            var valores = [];
            $.each(data,function (key,value){
                $.each(value,function (key,value){
                    $.each(value,function (key,value){
                        valores[i] = value;
                        i++;
                    });
                });
            });

            var id_perfil = organizar_val(valores) - 1;

            console.log(id_perfil);


			$("<h3>",{"class":"autor_noticia",
                html: titulo_val[id_perfil] + ". Mensaje de " + autor_val[id_perfil] + ". " + fecha_val[id_perfil],
			}).appendTo(".accordion");

			$("<div>",{"class":"noticia",
                html: avatar_val[id_perfil] + "<ul><li>" + contenido_val[id_perfil] +"</li></ul>",
			}).appendTo(".accordion");

			$( ".accordion" ).accordion({heightStyle: "content"});

            /*var timeline_divs = $(".timeline");

            $.each(timeline_divs,function (key,value){

                var html = $(value).html();
                $(value).html(html + "--wisel--");
            });*/
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
        },
        complete: function() {
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
            $( "#draggable" ).draggable({ axis: "x" });
        });

        $(function() {
            $( "#tabs" ).tabs();
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

        $(function() {
            $( "#accordion" ).accordion({
                collapsible: true,
                heightStyle: "content",
                navigation: true
            });
        });

});
