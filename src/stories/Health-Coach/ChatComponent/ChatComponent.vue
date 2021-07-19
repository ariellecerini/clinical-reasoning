
<template>

   
        <div > 
                <slot></slot>
        </div>
         
</template>



<script>
    export default {
        name: 'ChatComponent',        
        props: {
            chatclass: {
                type: String, 
                default: "top-left-chat"
            }
        },
    }
</script>


<style>
.row .row-grid{
    display: -webkit-box !important;
    flex-wrap: nowrap !important;
}
</style>


 
