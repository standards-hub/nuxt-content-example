<template>
  <Default :title="doc.title">
     <div>
      <Navbar />
      <Footer />
     </div>
  <div class="home">
  <div class="tier" style="padding: 50px 1px;">
    <div class="container" style="margin-top: 90px;"> 
     <table id="tablaUsuarios" style="table-layout: fixed;width: 1200px;">
       <tr style="border: 1px solid #ffffff00;">
         <td class="td" v-for="subject in doc.subjects"><img style="font-size: 50px; margin-left: 25px;" src="~static/assets/img/icon/hire.png" class="imagen"/></td>      
      </tr>
      <tr style="border: 1px solid #ffffff00;">
        <td style="text-align: center;" v-for="subject in doc.subjects">{{ subject.title }}</td>
      </tr>
      <tr style="background: white;">
        <td class="td" v-for="subject1 in doc.subjects">
            <button class="button button4 button2" v-for="item in subject1.items" v-if="item.status === 'enable'">
              {{ item.title }}
            </button>
            <button class="button button4 button3" v-for="item in subject1.items" v-if="item.status === 'progres'">
              {{ item.title }}
            </button>
            <button class="button button4" v-for="item in subject1.items" v-if="item.status === 'not'">
              {{ item.title }}
            </button>
        </td>
      </tr>
      <tr style="background: white; ">
        <td class="td">
          <button class="button button4 button2" style="margin-top: 35px;">Available</button>
        </td>
        <td class="td">
          <button class="button button4 button3" style="margin-top: 35px;" >Coming Spring '21</button>
        </td>
      </tr>
     </table>
    </div>
  </div>
  </div>
  </Default>
</template>

<script>
 import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";

export default {
  head() {
    return {
      titleTemplate: `%s`,
      title: 'CIM',
      script: [
        { src: "./assets/js/jquery.min.js", body: true },
        {src: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js", type: "text/javascript" },
      ],
    }
  },
  async asyncData({$content, params}) {
    const doc = await $content('index').fetch();
    return { doc }
  },
  components: { 
      Footer,
      Navbar
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