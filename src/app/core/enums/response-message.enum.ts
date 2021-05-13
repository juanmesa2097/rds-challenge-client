export enum ResponseSuccessMessage {
  Post = 'El registo se guardó correctamente',
  Put = 'El registro se actualizó correctamente',
  Delete = 'El registro se eliminó correctamente',
}

export enum ResponseErrorMessage {
  Get = 'Ocurrió un problema al intentar consultar los datos',
  Post = 'Ocurrió un problema al intentar guardar el registro',
  Put = 'Ocurrió un problema al intentar actualizar el registro',
  Delete = 'Ocurrió un problema al intentar eliminar el registro',
}
