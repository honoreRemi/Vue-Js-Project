// errorHandler.js
export const errorHandler = (err, vm, info) => {
  // Log l'erreur à un service de suivi des erreurs
  console.error('Error: ', err);
  console.log('Vue instance: ', vm);
  console.log('Info: ', info);
  // Vous pouvez également afficher une notification ou une modal
};
