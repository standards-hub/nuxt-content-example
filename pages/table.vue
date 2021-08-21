<template>
  <div class="home">
    <Navbar />
    <div class="tier">
      <div class="container">
        <div style="width:1213px">
           <table id="tablaUsuarios"
             class="table-striped table-bordered; box-shadow: 0px 10px 10px -6px black;" style="margin-top: 150px;">
            <thead>
              <tr style="background-color: #65b2e8;color: #FFFF;">
                <td scope="col" v-for="subject in doc.subjects">{{ subject.title }}</td>
              </tr>
            </thead>
            <tbody id="con">
              <tr v-for="(i, iIndex) in maxItems">
                <td v-for="(l, sIndex) in doc.subjects.length">
                  {{ itemTitle(doc, sIndex, iIndex) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
    import $ from "jquery";
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    export default {
      head() {
        return {
          titleTemplate: `%s`,
          title: 'CIM - Table',
          script: [
            { src: "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js", body: true },
          ],
        }
      },
      methods: {
        itemTitle (doc, sIndex, iIndex) {
          if (doc) {
            let item = doc.subjects[sIndex].items[iIndex]
            return item ?  item.title : ''
          }
        }
      },
      async asyncData({$content, params}) {
        const doc = await $content('index').fetch()
        let maxItems = 0
        console.log( doc.subjects );

        for (let i=0; i < doc.subjects.length; i++) {
          if (maxItems < doc.subjects[i].items.length) {
            maxItems = doc.subjects[i].items.length
          }
        }

        return {
          doc,
          maxItems
        }
      },
      components: {
        Footer,
        Navbar
      },
      async mounted () {
        window.$(document).ready(function () {
            window.$('#tablaUsuarios').DataTable();
        })
      }
    }
</script>
