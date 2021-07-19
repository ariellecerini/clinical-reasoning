<template>
    <div>
        <div class="table-desc-box card"> 
            <span class="productive-heading-03" style="width: 100%;">Data table title</span><br/>
            <span class="body-short-01" style="width: 100%;">Additional description if needed</span>

            </div>
    <table>
        <tr class="table-header" v-for="item in dataVals.slice(0,1)" :key="item">
            <th  v-for="(value, name) in item" :key="name">
                {{ name }} 
            </th>
        </tr>
        <tr v-for="dataVal in dataVals" :key="dataVal.index">
            <td v-for="(value) in dataVal" :key="value">
               {{ value }}
                </td> 
        </tr>
    
    </table>
</div>
</template>

<script>
import '../dashboard.css';
// import '../../../assets/normalize.css'

export default {
 name: 'table-item',
 
 props: {
     title: {
      type: String,
      required: true
    }, 
    dataVals: { 
        type: Array, 
        required: true
    }
 },
 computed:{
  tableHeader(){
   var comp = this.dataVals;
   return comp[0];
   
  }
}
}
</script>

<style scoped>

table{
    width: 100%;
    text-align: left; 
    border-collapse: collapse;
}

th{
     padding: 3px 16px;
    color: var(--Gray100);
    letter-spacing: var(--letter-spacing-02);
    font-family: var(--font-familiy-primary);
    font-weight: var(--font-weight-semibold);
    height: 24px;

}

td{
     padding: 3px 16px;
    color: var(--Gray100);
    letter-spacing: var(--letter-spacing-04);
    font-family: var(--font-familiy-primary);
    font-weight: var(--font-weight-regular);
    height: 24px;
}

tr{
    box-shadow:  inset 0px 0px 4px #00000029;
    padding: .5%;
    border-top: 5px solid white; 
    background-color: var(--Gray10); 
}

tr.table-header{
    box-shadow:  inset 0px 0px 4px #00000029;
    padding: .5%;
    padding-left: 2%;
    border-top: none; 
    background-color: var(--Gray20);
}

.table-desc-box{
    width: 100%; 
    margin:0; 
    border-radius: 0;
    margin-bottom: 1%;
    box-shadow:  inset 0px 0px 6px #00000029;
    padding: 16px;
}
</style>