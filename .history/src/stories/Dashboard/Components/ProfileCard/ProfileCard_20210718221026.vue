<template>
  <Card class="card">
   <div class="profile-card">
       <div class="left-side">
            <div class="profile-image">
                    <img :src="profile.image"> 
                </div> 

            {{name}}
        </div> 

        <div class="right-side">
            <div v-for="item in profile" :key="item">
                <div v-for="newDataValue in newDataValues" :key="newDataValue">
                   <ListItem :entry="newDataValue"/>
                    </div>
                </div>   
            </div>
        </div>
  </Card>
</template>

<script>
import '../../dashboard.css';
import Card from '../Card/Card.vue';
import ListItem from '../ListItem/ListItem.vue';
import _ from 'lodash'
// import '../../../assets/normalize.css'

// import '../../../assets/style.css'

export default {
  name: 'profile-card',
  components: { Card, ListItem },
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
  },
  computed:{
    newDataValues(){
      var comp = this.profile; 
      var newLines = {};
      var i = 0;
        _.forEach(comp,(inside, outside) => {
          i=i+1; 
          var newStuff = outside + ": " + inside; 
            newLines.push(newStuff);
        }
        );

      return newLines;
    
    }
  } 
};
</script>
