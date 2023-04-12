<template>
    <div>

        <button class="standardButton" @click="$emit('click')"> {{ text }} </button>

    </div>
</template>

<script>

    export default {
        name: 'MyButton',
        props: {
            text: String,
            color: String
        }
        
    }
</script>

<style >

.standardButton {
  background: #FFBD59;
  background-image: -webkit-linear-gradient(top, #FFBD59, #e6bb7a);
  background-image: -moz-linear-gradient(top, #FFBD59, #e6bb7a);
  background-image: -ms-linear-gradient(top, #FFBD59, #e6bb7a);
  background-image: -o-linear-gradient(top, #FFBD59, #e6bb7a);
  background-image: linear-gradient(to bottom, #FFBD59, #e6bb7a);
  -webkit-border-radius: 20;
  -moz-border-radius: 20;
  border-radius: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;;
  color: black;
  font-size: 13px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  border-width: 0;
  text-align: center;
  cursor: pointer;
}

.standardbutton:hover {
  background: #e0aa5a;
  background-image: -webkit-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -moz-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -ms-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -o-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: linear-gradient(to bottom, #e0aa5a, #f5b55a);
  text-decoration: none;
}

</style>