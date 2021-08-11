<template>
  <div class="home">
       <Navbar />
       <Footer />
    <div class="tier">
      <div class="container">
          <table id="customers" style="margin-top: 80px;">
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
            <thead v-for="domains of table.domains" >
              <tr v-for="subjectAreas of domains.subjectAreas">
                <td>{{ domains.name }}</td>
                <td>{{ subjectAreas.name }}</td>
                <td v-for="versions of subjectAreas.versions">{{ versions.version }}</td>
                <td v-for="versions of subjectAreas.versions">{{ versions.versionDate.year }}/{{ versions.versionDate.month }}/{{ versions.versionDate.day }}</td>
                <td v-for="versions of subjectAreas.versions">
                  <a :href="versions.diagramURL" target="_blank"><img src="~static/assets/img/doc.png" style="height:20px; width:20px"></a>
                </td>
                <td v-for="versions of subjectAreas.versions" style="font-size: 14px;">{{ versions.descriptionURL }}</td>
                <td v-for="versions of subjectAreas.versions" >
                  <a :href="versions.gitHubURL" target="_blank"><img src="~static/assets/img/github.png" style="height:20px; width:20px"></a>
                </td>
              </tr>
            </thead>
            <tbody id="con">
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
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
        },
        data() {
          return {
            table: []
          }
        },
      async fetch() {
        this.table = await fetch(
          'https://raw.githubusercontent.com/standards-hub/cim_github_pages/gh-pages/cim_subject_areas_library.json'
        ).then(res => res.json())
      }
    }
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #65b2e8;
  color: white;
}
</style>
