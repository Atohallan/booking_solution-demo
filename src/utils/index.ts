export function exchangeDate(data : any){
    return data === "" 
        ? new Date().getDate().toString()+' '+new Date().toLocaleString("default", { month: "short" })+' '+new Date().getFullYear().toString()
        : new Date(data).getDate().toString()+' '+new Date(data).toLocaleString("default", { month: "short" })+' '+new Date(data).getFullYear().toString()
}