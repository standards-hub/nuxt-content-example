<template>
  <Default :title="doc.title">
    <div>{{ doc.prueba }}</div>
    <div>{{ doc.subjects.image }}</div>
     <table style="table-layout: fixed;width: 1200px;">
       <tr style="border: 1px solid #ffffff00;">
        <td style="text-align: center;" v-for="(item, index) in title" :key="index">{{ item }}</td>
       </tr>
       <tr style="background: white; ">
        <td class="td"> 
          <button class="button button4 button2" v-for="(item1, index1) in items1" :key="index1">{{ item1 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item2, index2) in items2" :key="index2">{{ item2 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item3, index3) in items3" :key="index3">{{ item3 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item4, index4) in items4" :key="index4">{{ item4 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item5, index5) in items5" :key="index5">{{ item5 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item6, index6) in items6" :key="index6">{{ item6 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item7, index7) in items7" :key="index7">{{ item7 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item8, index8) in items8" :key="index8">{{ item8 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item9, index9) in items9" :key="index9">{{ item9 }}</button>
        </td>
        <td class="td"> 
          <button class="button button4 button2" v-for="(item10, index10) in items10" :key="index10">{{ item10 }}</button>
        </td>
       </tr>
       
     </table>
     <div>
  </div>
  </Default>
</template>


<script>
export default {
  head() {
    return {
      titleTemplate: `%s`,
      title: 'Nuxt Content Example',
    }
  },
  async asyncData({$content, params}) {
    const doc = await $content('index').fetch();
    return { doc }
  },
  name: "BaseBlock",
  data() {
    return {
      title: ["Setup", "Hire", "Produce", "Market", "Sell", "Service", "Fulfill","Interact", "Finance", "Analyze"],
      items1: ["Software Host", "Software Tenant", "Software User", "Software App", "Software Test", "Software Service", "Soft. Batch Job","IoT Device", "Data Model"],
      items2: ["Job Application", "Employee", "Compensation", "Training", "Location", "Work Territory", "Work Report","Biz Process", "Biz Continuity"],
      items3: ["Supplier", "Product", "Inventory Received", "Inventory Product", "Inventory Transfer", "Electronic Media", "Purchase Order","Sales Agreement"],
      items4: ["Party", "Party Resolution", "Privacy Consent", "Market Audience", "Campaign", "Promotion", "Trade Event","Ad Buy", "Web Site"],
      items5: ["Price Book", "Shopping Cart", "Quote", "Contract", "Opportunity", "Opportunity Forecast", "Sales Order","Loyalty Program", "Loyalty Program"],
      items6: ["AI Assistant", "Asset", "Web Content", "Case", "Task", "Event"],
      items7: ["Fulfillment Order", "Shipment", "Return Order", "Work Order", "Work Resource", "Work Forecast"],
      items8: ["Engagement", "Conversation", "Appointment", "Software Event", "Data Connector", "Data Movement", "Loyalty Journey"],
      items9: ["Budget", "Invoice", "Payment Method", "Payment", "Credit Memo", "Financial Ledger", "Account Forecast","Calendar", "Tax Policy"],
      items10: ["AI Model", "AI Application", "IoT Device Use", "Data Lineage", "Blockchain", "Survey", "Loyalty Journal"],
    };
  },

}
</script>
<style>
  .button1 {background-color: #e7e7e7; color: black; border-color: #efefef;}
  .button2 {background-color: #DAE8FC; border: 4px solid #00285f; color: rgb(120, 9, 148); }
  .button3 {background-color: #DAE8FC; border: 4px solid #00285f; color: rgb(120, 9, 148);border-style: dotted;}
  .button4 {border-radius: 12px; }
  .button {
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 110px;
}
.imagen{
    max-width: 50%;
    align-content: baseline;
    margin-top: 12.5px;
    margin-bottom: 2px;
    margin-left: 37px;
    margin-right: auto;
 }
table {
   width: 100%;
   border: 1px solid #000;
}
th, td {
   width: 25%;
   text-align: left;
   vertical-align: top;
   border: 1px solid #ffffff00;
}
.td{
  border: 1px solid #e8e8e800;
  padding: 3px 1px;
}
h5{
  color: rgb(120, 9, 148)
}
 
</style>