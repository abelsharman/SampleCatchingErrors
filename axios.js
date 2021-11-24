export default function({ $axios, store, redirect }) {
    $axios.onError(error => {
        if(error.response.status == 401){
            redirect("/Login")
        }
        else if(error.response.status == 400){
            for(const [key, value] of Object.entries(error.response.data)){
                store.commit("setErrorMessages", value)
            }
        }
        store.commit("setErrorMessage", error.response.status)
    });
}
