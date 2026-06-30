const equipamiento=[
  "Guantes de Boxeo (12oz=65-70kg 14oz=75-80kg 16oz=+80kg)",
  "Protector Bucal de silicona",
  "Tibiales/espinilleras",
  "Vendas para manos (5 metros minimo)",
  "Pantalones cortos comodos",
  "Remera manga corta comoda"
];


document.addEventListener("DOMContentLoaded", () =>{
   const formulario = document.getElementById("form-inscripcion");
   const listaUl = document.getElementById("lista-equipamiento");
   const inputBuscador = document.getElementById("buscador-equipamiento");
   
   function mostrarEquipamiento(listaFiltrada){
      if (listaUl){
         listaUl.innerHTML ="";
         listaFiltrada.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.style.padding = "8px 0";
            li.style.fontSize ="16px";
            listaUl.appendChild(li);
         });
      }
   }
    function filtrarContenido(textoBusqueda){
      const resultado = equipamiento.filter(item =>
        item.toLowerCase().includes(textoBusqueda.toLowerCase())
      );
      mostrarEquipamiento(resultado);
    }
   if(inputBuscador){
      inputBuscador.addEventListener("input", (evento) =>{
       filtrarContenido(evento.target.value);
      })
   }
   if(listaUl){
      listaUl.addEventListener("mouseover", (evento) =>{
          if (evento.target.tagName === "LI"){
             evento.target.style.color = "#d9534f";
             evento.target.style.fontWeight = "bold";
             evento.target.style.cursor = "pointer";
          }
      });
      listaUl.addEventListener("mouseout", (evento) =>{
        if(evento.target.tagName === "LI"){
           evento.target.style.color = "";
           evento.target.style.fontWeight = "";
        }
      })
   }
    mostrarEquipamiento(equipamiento);
   
   function Vali_form (evento)
   {
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const edad = document.getElementById("edad").value.toString();
      const correo = document.getElementById("correo").value;
      const calle = document.getElementById("calle").value.toString();
      const localidad = document.getElementById("localidad").value;

      const exp_Marcada = document.querySelector('input[name="experiencia"]:checked');
      const comp_Marcada = document.querySelector('input[name="competicion"]:checked');

      try{
           if(
             nombre.trim() === "" ||
             apellido.trim() === "" ||
             edad.trim() === "" ||
             correo.trim() === "" ||
             calle.trim() === "" ||
             localidad.trim() === "" 
             
            ){
               throw new Error("Por favor, completá todos los campos de texto.");
               
             }
           if(!exp_Marcada){
             throw new Error("Por favor, tenes que responder si hiciste algún arte marcial.");
            }
            if(!comp_Marcada){
                throw new Error("Por favor, tenes que responder si vas a competir.");
            }
            alert("¡Inscripción completada con éxito!");

        }
        catch (error){
           evento.preventDefault();
           alert(error.message)
        } 
   }
    if(formulario){
      formulario.addEventListener("submit",Vali_form);
     }
})