<template>


<div id="app">
 <nav class="main-nav">
     <div class="logo">
      <div class="title"> {{ title }}</div><Burger onClick="toggleMenu();"></Burger>
     </div>
     
   </nav>
    <Sidebar class="sidebar menu navholder">
    
        <div class="menu-items">
            <menu-item @onClick="onClick" v-bind="{ active: true, hover: false, label: 'profile' }"/>
            <menu-item @onClick="onClick" v-bind="{ active: false, hover: false, label: 'summary' }"/>
            <menu-item @onClick="onClick" v-bind="{ active: false, hover: false, label: 'timeline' }"/>
            <menu-item @onClick="onClick" v-bind="{ active: false, hover: false, label: 'insights' }"/>
        </div> 
   </Sidebar>

        

<!-- onclick function needs to be added 
        set all 'active' props to false except for the menu item that was clicked 
        switch the displayed info to the page that corresponds with the menu item
    -->
    
    </div>
</template>

<script>
import '../MenuItem/Menu.css';
import MenuItem from '../MenuItem/MenuItem.vue';
import Burger from '../MenuItem/Burger.vue';
import Sidebar from '../SidePanel/Sidebar.vue';
// import '../../../assets/normalize.css'

export default {
 name: 'side-panel',
  components: { 
      MenuItem,
      Burger, 
      Sidebar 
      },
 props: {
     title: {
      type: String,
      required: true
    }
 },
 methods:{
   toggleMenu: function(){
    var sidepanel = document.getElementsByName("navholder"); 
    sidepanel.toggleAttribute("active");
    console.log("inactive");
   }
 }
}
</script>

<style scoped>
 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

  .active{ 
    
  }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>