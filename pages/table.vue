<template>
  <div class="home">
       <Navbar />
       <Footer />
    <div class="tier">
      <div class="container">
        <div style="width:1213px">
          <table id="tablaUsuarios" class="table-striped table-bordered; box-shadow: 0px 10px 10px -6px black;"
          style="margin-top: 80px;">
            <thead>
              <tr style="background-color: #65b2e8;color: #FFFF;">
                <th scope="col">Domain</th>
                <th scope="col">Subject Areas</th>
                <th scope="col">Version</th>
                <th scope="col">Published</th>
                <th scope="col">Docs</th>
                <th scope="col">Description</th>
                <th scope="col">GitHub</th>
              </tr>
            </thead>
            <tbody id="con">
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
            }
        },
        async asyncData({$content, params}) {
            const doc = await $content('about').fetch();
            return { doc }
        },
        components: {
          Footer,
          Navbar
        }
    }
</script>
