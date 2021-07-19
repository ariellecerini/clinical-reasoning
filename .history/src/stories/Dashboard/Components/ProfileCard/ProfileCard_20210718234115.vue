<template>
  <Card class="card">
   <div class="profile-card">
       <div class="left-side">
            <div class="profile-image" style="width: 100%;">
                    <img src="../../../assets/place-holder.png" style="width: 100%;"> 
                </div> 

            {{profile.name}}
        </div> 

        <div class="right-side">
            <div v-for="(value, name) in profile" :key="value">
                <!-- <div v-for="newDataValue in newDataValues" :key="newDataValue"> -->
                 <div style="display: flex; justify-content: space-between;  font: normal normal 500 16px/20px IBM Plex Sans">
                    <div style="width: 45%;">
                        <p>
                          <strong>
                            {{name}}
                          </strong>
                        </p>
                    </div>
                    <div style="width: 45%; ">
                      <p>
                        {{value}}
                      </p>
                    </div>
                </div>
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
    }, 
    image:{
      type: String,
      required: false
          }
  }
};
</script>

<style scoped>
.profile-card{
  display: flex; 
  justify-content: space-between;
}

p{ 
  margin-top: 5px; 
  margin-bottom: 5px; 
  text-transform: capitalize;
}
.left-side{
  width: 30%;
}
</style>