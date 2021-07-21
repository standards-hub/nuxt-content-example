<template>
  <Default :title="doc.title">
    <div>{{ doc.prueba }}</div>
    <div class="container">
      <div class="row align-items-start">
        <div class="col p-0 gy-3" v-for="subject in doc.subjects" >
          <div class="subject-title">{{ subject.title }}</div>
          <div class="list-group">
            <div class="list-group-item border-0 d-flex align-items-center subject-item justify-content-center"
              v-for="item in subject.items">
              <div class="btn rounded-pill border-2"
              :class="[item.status == 'enable'? 'item-enabled' : 'item-not-enabled']"
              >{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: "BaseBlock"
}
</script>
<style>
.subject-title {
  text-align: center;
  font-weight: 800;
}

.subject-item {
  text-align: center;
  height: 5rem;
}

.item-enabled {
  background-color: #DAE9FC;
  border-color: #00285f;
}

.item-not-enabled {
  border-color: #00285f;
  border-style: dotted;
}

.imagen{
    max-width: 50%;
    align-content: baseline;
    margin-top: 12.5px;
    margin-bottom: 2px;
    margin-left: 37px;
    margin-right: auto;
 }
 
</style>
