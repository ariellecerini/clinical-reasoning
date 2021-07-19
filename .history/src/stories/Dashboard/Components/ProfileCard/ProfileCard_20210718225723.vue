<template>
  <Card class="card">
   <div class="profile-card">
       <div class="left-side">
            <div class="profile-image">
                    <img :src="profile.image"> 
                </div> 

            {{profile.name}}
        </div> 

        <div class="right-side">
            <div v-for="(value, name) in profile" :key="value">
                <!-- <div v-for="newDataValue in newDataValues" :key="newDataValue"> -->
                 <div style="display: flex; justify-content: space-between;"><div><p><strong>{{name}}</strong></p></div><div><p>{{value}}</p></div></div>
                    <!-- </div> -->
                </div>   
            </div>
        </div>
  </Card>
</template>

<script>
import '../../dashboard.css';
import Card from '../Card/Card.vue';

// import '../../../assets/normalize.css'

// import '../../../assets/style.css'

export default {
  name: 'profile-card',
  components: { Card },
  props: {
    title: {
      type: String,
      required: true,
      default: "Insert Title Here"
    }, 
    profile:{
      type: Array, 
      required: true
    }
  }
};
</script>

<style scoped>
.profile-card{
  display: flex; 
  justify-content: space-between;
}
</style>