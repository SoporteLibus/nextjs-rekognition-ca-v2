import Swal from "sweetalert2";
import { UserApi } from "../../types";
import { axiosDelete } from "@/app/services";
import { Capitalize } from "../capitalize/Capitalize";

export const alertSuccess = (object: UserApi) => {
  const info = `
    Nombre: ${object.name},
    Legajo: ${object.docket},
    Registro: ${object.date}
  `;

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Validado!',
    text: info,
    showConfirmButton: false,
    timer: 5500
  })
}

export const alertError = (error: string) => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Error en la validacion!',
    text: error,
    showConfirmButton: false,
    timer: 5500
  })
}

export const alertDeleteEmployee = (firstname: string, lastname: string, id: string) => {
  Swal.fire({
  title: 'Eliminar Empleado',
  text: `Desea eliminar a ${Capitalize(firstname)} ${Capitalize(lastname)}?`,
  showCancelButton: true,
  confirmButtonText: 'Eliminar',
  confirmButtonColor: '#c00738'
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        axiosDelete(`eliminar/${id}`)
        Swal.fire('Empleado eliminado!', '', 'success')
      } catch (error) {
        Swal.fire('Error!', 'La peticion no se pudo realizar!', 'info')
      }
    }
  })
}