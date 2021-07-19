<template>
    <div>
        <div class="accordion card"> 
            <div class="accordion-header" onClick="toggleContent();">
                <div class="accordion-headline-text">
                    <span class="productive-heading-03" style="width: 100%;">{{ title }}</span><br/>
                    <span class="body-short-01" style="width: 100%;">Additional description if needed</span>
                </div> 
                <h3> + </h3>
            </div>

            <div class="toggled-content accordion">

                {{ content }}

            </div>

        </div>
    </div>
</template>

<script>
import '../../dashboard.css';
// import '../../../assets/normalize.css'

export default {
 name: 'accordion',

 props: {
     title: {
      type: String,
      required: true
    }, 
    desc: {
      type: String,
      required: false
    }, 
    content: { 
        type: String, 
        required: true
    }
 }, 
 methods: {
        toggleContent: function(){
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                panel.style.display = "none";
                } else {
                panel.style.display = "block";
                }
              
            }
    }
}
</script>

<style scoped>
.accordion-header{
    display: flex; 
    justify-content: space-between;
}

.accordion-heading{
   width: 80%;
}

.toggled-content{
    display: none; 
}

.active{
    display: inline-block;
}

</style>