import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const user = ref(null)
  const authenticate = () =>{
    user.value = {
      unserName: 'Jane doe'
    }
  }
  return{
    user,
    authenticate,
  }
})
