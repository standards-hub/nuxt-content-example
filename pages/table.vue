<template>
  <div class="home">
    <Navbar />
    <div class="tier">
      <div class="container" style="margin-top: 50px;">
        <button id="toggle" type="button" class="collapsible">GLOBAL SEARCH</button>
          <div style="font-size: 15px; background: linear-gradient(90deg,#65b2e8 0%,#534588 100%);" id="sel1">
            <button id="all" style="background: #554f91;color: white;margin-left: 25px;margin-top: 10px;">All</button>
            <button id="last" style="background: #554f91;color: white;margin-top: 10px;margin-bottom: 10px;">Latest</button>
          </div>

        <div style="width:1213px">
            <table id="tablaUsuarios" class="table-striped table-bordered; box-shadow: 0px 10px 10px -6px black;">
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
            { src: "https://cdn.datatables.net/v/dt/sp-1.3.0/sl-1.3.3/datatables.min.js", body: true },
          ],
          link: [
            { rel: 'stylesheet', href: "https://cdn.datatables.net/v/dt/sp-1.3.0/sl-1.3.3/datatables.min.css", body: true},
          ]
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
          var dt = window.$('#tablaUsuarios').dataTable();
          dt.fnDestroy();
        }),
        window.$(document).ready(function () {
            const url = 'https://raw.githubusercontent.com/standards-hub/cim_github_pages/gh-pages/cim_subject_areas_library.json';
            var table = window.$('#tablaUsuarios').DataTable({
              ajax: {
                url: url,
                dataSrc: function (json) {
                  let j = json;
                  let jf = [];
                  for (let i = 0, ien = json.domains.length; i < ien; i++) {
                    for (let j = 0, jen = json.domains[i].subjectAreas.length; j < jen; j++) {
                      for (let k = 0, ken = json.domains[i].subjectAreas[j].versions.length; k < ken; k++) {
                        let name = json.domains[i].name;
                        let subjectAreas = json.domains[i].subjectAreas[j].name;
                        let version = json.domains[i].subjectAreas[j].versions[k].version;
                        let versionDate = json.domains[i].subjectAreas[j].versions[k].versionDate;
                        let diagramURL = json.domains[i].subjectAreas[j].versions[k].diagramURL;
                        let descriptionURL = json.domains[i].subjectAreas[j].versions[k].descriptionURL;
                        let gitHubURL = json.domains[i].subjectAreas[j].versions[k].gitHubURL;
                        jf.push({
                          name: name,
                          subjectAreas: subjectAreas,
                          version: version,
                          versionDate: (versionDate.year + '-' + versionDate.month + '-' + versionDate.day),
                          diagramURL: diagramURL,
                          descriptionURL: descriptionURL,
                          gitHubURL: gitHubURL
                        });
                      }
                    }
                  }
                  return jf;
                }
              },
              columns: [
                {
                  "data": "name",
                  "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).css('vertical-align', 'top')
                    $(nTd).css('padding', '44px 10px')
                  },
                  "render": function (data, type, row, meta) {
                    return data;
                  }
                },
                {
                  "data": "subjectAreas",
                  "render": function (data, type, row, meta) {
                    return data;
                  }
                },
                {
                  "className": "text-center",
                  "data": "version",
                  "render": function (data, type, row, meta) {
                    return data;
                  }
                },
                {
                  "className": "text-center",
                  "data": "versionDate",
                  "render": function (data, type, row, meta) {
                    return data;
                  }
                },
                {
                  "className": "text-center",
                  "data": "diagramURL",
                  "render": function (data, type, row, meta) {
                    return '<a href="' + data + '" target="_blank"><img src="./img/doc.png" "height="20" width="20"></a>';
                  }
                },
                {
                  "data": "descriptionURL",
                  "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).css('font-size', '14px')
                  },
                  "render": function (data, type, row, meta) {
                    return data;
                  }
                },
                {
                  "className": "text-center",
                  "data": "gitHubURL",
                  "render": function (data, type, row, meta) {
                    return '<a href="' + data + '" target="_blank"><img src="./img/github.png" "height="20" width="20"></a>';
                  }
                },
              ],
              order: [[0, 'asc'], [1, 'asc'], [2, 'asc'], [3, 'asc']],
              rowsGroup: [0],
              rowReorder: {
                dataSrc: ['name']
              },
              
              columnDefs: [
                { "orderable": false, "targets": [4, 5, 6] },
              ],
              searchPanes: {
                    cascadePanes: true,
                },
                dom: 'Pfrtip'
              });
            $('#toggle').on( 'click', function () {
            var coll = document.getElementsByClassName("collapsible");
            var i;
            for (i = 0; i < coll.length; i++) {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                  content.style.maxHeight = null;
                } else {
                  content.style.maxHeight = content.scrollHeight + "px";
                } 
            } 
            table.searchPanes.container().toggle();
            });
            $('#all').on('click', function () {
              table.search('').columns().search('').draw();
            });

            $('#last').on('click', function () {
              table.column(2).search('1.1').draw();
            });
        })
      }
    }
</script>
<style>
.collapsible {
  background-color: #65b2e8;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #202020;
}

.collapsible:after {
  content: '\002B';
  color: white;
  font-weight: bold;
  margin-left: 20px;
}

.active:after {
  content: "\2212";
}
</style>
