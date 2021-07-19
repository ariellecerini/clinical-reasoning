<template>
    
                <div class="page-container">
                    <div class="row">
                        <div class="col-3">
                        <side-panel v-bind="{showing: true, title: 'Diabetes Review'}" />
                        </div>
                        <div class="col-9 dashboard bodycontent">
                            <div class="row dashboard bodycontent top-bar" style="padding-bottom: 30px;">
                                <div>Patient: John Doe</div>
                                <div>Age: ##</div>
                                <div>Gender: ##</div>

                            </div>
                            
                                <div class="row dashboard bodycontent" style="padding-bottom: 40px;">
                                    <div class="four-col">
                                        <profile-card :profile='{data}'/>
                                    </div>
                                     <div class="four-col">
                                        <info-module v-bind="{title: 'Chart 1'}"/>
                                    </div>
                                     <div class="four-col">
                                        <info-module v-bind="{title: 'Chart 1'}"/>
                                    </div>
                                     <div class="four-col">
                                        <info-module v-bind="{title: 'Chart 1'}"/>
                                    </div>
                              
                                </div>
                                <div class="row dashboard bodycontent">
                                    <div style="width: 66%; padding: 0;">
                                        <info-module v-bind="{title: 'Chart 1'}"/>
                                    </div>
                                    <div style="width: 33%;">
                                        <info-module v-bind="{title: 'Chart 1'}"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
          
</template>

<script>
import './stories/Dashboard/dashboard.css';
import './stories/style-tokens.css';
import SidePanel from './stories/Dashboard/Menu/SidePanel/SidePanel.vue'
import InfoModule from './stories/Dashboard/Components/InfoModule/InfoModule.vue';
import ProfileCard from './stories/Dashboard/Components/ProfileCard/ProfileCard.vue'; 
import './assets/bootstrap-4.1.3-dist/css/bootstrap-grid.min.css';
import profileData from "./assets/profileData.json";

export default { 
    name: "dashboard-layout",
    components: {
    InfoModule,
    SidePanel,
    ProfileCard
  },
    
    props:{
        title: String
    }, 
   data(){
        return{
            data: profileData
        }
      }
  
}
</script>

<style scoped>
.page-container{ 
    width: 100%; 
    padding: 0;
    margin: 0; 
    display:flexbox;
    justify-content: space-between;
}

.row.dashboard.bodycontent{
    width: 100%; 
    display: flexbox; 
    justify-content: space-between;
 
}
.col-9.dashboard.bodycontent{
    width: 100%; 
    padding: 35px 30px 35px 0;
   
}

.three-col{
    width: 33%;
}

.four-col{
    width: 22%;
}

iframe.sb-show-main.sb-main-padded{
    padding: 0 !important;
}
.card{
    width: 100%;
}
</style>
