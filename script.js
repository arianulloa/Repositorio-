document.addEventListener("DOMContentLoaded", () =>{
   const formulario = document.getElementById("form-inscripcion");
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