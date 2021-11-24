<template>
  <div class="default">
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters(["getErrorMessages", "getErrorStatus"])
  },
  watch:{
    "$store.state.errorStatus"(){
      if(Number(this.getErrorStatus) == 400){
        for(let error of this.getErrorMessages){
          this.$message.error(error, 6)
        }
        this.$store.commit("clearErrorMessages")
      }
      else if(Number(this.getErrorStatus) == 404){
        this.$message.error("Извините, такого запроса не существует!", 6)
      }
      else if(Number(this.getErrorStatus) == 403){
        this.$message.error("Извините, доступ закрыт!", 6)
      }
      else if(Number(this.getErrorStatus) > 499){
        this.$message.error("Извините, на сайте технические неполадки!", 6)
      }
      else if(Number(this.getErrorStatus) == 422){
        this.$message.error("Извините, вы неправильно что-то ввели!", 6)
      }
    }
  },
  created(){
    this.$store.commit("setErrorMessage", 0)
  },
}
</script>

<style scoped lang="scss">
</style>
