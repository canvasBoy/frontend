import $$ from "../../_common/js/custom";
console.log($$('input[name=consigneeName]'))

$$('input[name=consigneeName]').onchange = function(){
  console.log('onchange')
  if(this.value.length > 10){
    this.value = this.value.substring(0,9);
    console.log(this.value)
  }
}
$$('input[name=mobile]').onchange = function(){
  console.log('onchange')
  if(this.value.length > 11){
    this.value = this.value.substring(0,11);
    console.log(this.value)
  }
}