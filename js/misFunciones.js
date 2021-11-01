//FUNCION CATEGORIAS
function mostrarCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://144.22.58.141:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategoria(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            });
        }
    })
}

function pintarRespuestaCategoria(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionCategoria("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategoria("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategoria() {
    let var2 = {
    name: $("#nameCategory").val(),
    description: $("#descriptionCategory").val(),
};
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var2),
    url: "http://144.22.58.141:8080/api/Category/save",
    success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
    },
});
}

function actualizarInformacionCategoria(idElemento){
    let myData={
        id:idElemento,
        name:$("#nameCategory").val(),
        description:$("#descriptionCategory").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            mostrarCategoria();
            alert("se actualizo correctamente")
        }
    });
}

function borrarCategoria(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            mostrarCategoria();
            alert("Registro eliminado")
        }
    });
}


// FUNCION CABIN
function mostrarCabin(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://144.22.58.141:8080/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabin(respuesta);
            
            let $select = $("#select-cabin");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })
}

function pintarRespuestaCabin(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].rooms + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable+="<td> <button onclick='actualizarInformacionCabin("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCabin("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionCabin() {
    let var3 = {
        name: $("#nameCabin").val(),
        brand: $("#brandCabin").val(),
        rooms: $("#roomsCabin").val(),
        description: $("#descriptionCabin").val()
};
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var3),
    url: "http://144.22.58.141:8080/api/Cabin/save",
    success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
    },
});
}

function actualizarInformacionCabin(idElemento1){
    let myData={
        id:idElemento1,
        name: $("#nameCabin").val(),
        brand: $("#brandCabin").val(),
        rooms: $("#roomsCabin").val(),
        description: $("#descriptionCabin").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Cabin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#nameCabin").val("");
            $("#brandCabin").val("");
            $("#roomsCabin").val("");
            $("#descriptionCabin").val("");
            mostrarCabin();
            alert("se actualizo correctamente")
        }
    });
}

function borrarCabin(idElemento1){
    let myData={
        id:idElemento1
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Cabin/"+idElemento1,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            mostrarCabin();
            alert("Registro eliminado")
        }
    });
}


//FUNCION CLIENTE
function mostrarCliente(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://144.22.58.141:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function (idClient,email) {
                $select.append('<option value='+email.idClient+'>'+email.email+'</option>');
                console.log("select "+email.idClient);
            }); 
        }    
    })
}

function pintarRespuestaCliente(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable+="<td> <button onclick='actualizarInformacionCliente("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCliente("+respuesta[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionCliente() {
    let var4 = {
        email: $("#emailClient").val(),
        password: $("#passwordClient").val(),
        name: $("#nameClient").val(),
        age: $("#ageClient").val()
};
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var4),
    url: "http://144.22.58.141:8080/api/Client/save",
    success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
    },
});
}

function actualizarInformacionCliente(idElemento){
    let myData={
        idClient:idElemento,
        email: $("#emailClient").val(),
        password: $("#passwordClient").val(),
        name: $("#nameClient").val(),
        age: $("#ageClient").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idClient").val("");
            $("#emailClient").val("");
            $("#passwordClient").val("");
            $("#nameClient").val("");
            $("#ageClient").val("");
            mostrarCliente();
            alert("se actualizo correctamente")
        }
    });
}


function borrarCliente(idElemento2){
    let myData={
        idClient:idElemento2
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Client/"+idElemento2,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            mostrarCliente();
            alert("Registro eliminado")
        }
    });
}




//FUNCION MENSAJE
function mostrarMensaje(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://144.22.58.141:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta);
            let $select = $("#select-message");
            $.each(respuesta, function (idMessage, messageText) {
                $select.append('<option value='+messageText.idMessage+'>'+messageText.messageText+'</option>');
                console.log("select "+messagetext.idMessage);
            }); 
        }
    
    })
}

function pintarRespuestaMensaje(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable+="<td> <button onclick=' actualizarInformacionMensaje("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarMensaje("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensaje() {
    let var5 = {
        messageText: $("#messageText").val(),
    };
    $.ajax({
        type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var5),
    url: "http://144.22.58.141:8080/api/Message/save",
    success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
    },
});
}

function actualizarInformacionMensaje(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#messageText").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            mostrarMensaje();
            alert("se actualizo correctamente")
        }
    });
}

function borrarMensaje(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            mostrarMensaje();
            alert("Registro eliminado")
        }
    });
}

//FUNCION RESERVACIONES
function mostrarReservacion(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://144.22.58.141:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservacion(respuesta);
            let $select = $("#select-reservation");
            $.each(respuesta, function (idReservation, name) {
                $select.append('<option value='+name.idReservation+'>'+name.name+'</option>');
                console.log("select "+name.idReservation);
            }); 
        }
    
    })
}

function pintarRespuestaReservacion(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].statusReservation+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionReservacion("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarReservacion("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservacion() {
    let var6 = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val()
};
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var6),
    url: "http://144.22.58.141:8080/api/Reservation/save",
    success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
    },
});
}

function actualizarInformacionReservacion(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#statusReservation").val("created");
            mostrarReservacion();
            alert("se actualizo correctamente")
        }
    });
}

function borrarReservacion(idElemento){
    let myData={
        idReservation:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            mostrarReservacion();
            alert("Registro eliminado")
        }
    });
}
function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://144.22.58.141:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta.status);
            pintarRespuestaStatus(respuesta);
        }
    });
}
function pintarRespuestaStatus(respuesta){
    let myTable="<table>";
        myTable+="<tr>"
        myTable+="<th>completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>"
    myTable+="</table>"
    $("#resultadoStatus").html(myTable);
}

function traerReporteDate(){

    var fechaInicio =document.getElementById("RstartDate").value;
    var fechaCierre =document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    $.ajax({
        url:"http://144.22.58.141:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta){
    let myTable="<table>";
        myTable+="<tr>"
        for(i=0;i<respuesta.length;i++){
            myTable+="<th>total</th>";
            myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
            myTable+="<td>"+respuesta[i].startDate+"</td>";
            myTable+="<td>"+respuesta[i].status+"</td>";
            myTable+="</tr>"
        }
    myTable+="</table>"
    $("#resultadoDate").html(myTable);
}



function traerReporteCliente(){

    $.ajax({
        url:"http://144.22.58.141:8080/api/Reservation/report-clients/",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta);
        }
    });
}
function pintarRespuestaCliente(respuesta){
    let myTable="<table>";
        myTable+="<tr>"
        for(i=0;i<respuesta.length;i++){
            myTable+="<th>total</th>";
            myTable+="<td>"+respuesta[i].total+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td>"+respuesta[i].client.email+"</td>";
            myTable+="<td>"+respuesta[i].client.age+"</td>";
            myTable+="</tr>"
        }
    myTable+="</table>"
    $("#resultadoCliente").html(myTable);
}
