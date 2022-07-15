/*Definição de variáveis de ambiente. Caso não exista a variável "meta.env.VITE_BACKEND_URL"
 irá pegar a variável de ambiente "http://localhost:8080"*/

export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";