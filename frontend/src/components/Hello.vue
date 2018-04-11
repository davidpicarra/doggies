<template>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="dog in dogs" :key="dog.id">
      <div class="card">
        <div class="card-image">
          <a :href="dog.href" target="_blank">
            <figure class="image is-4by3">
              <img :src="dog.thumbnail" :alt="dog.name">
            </figure>
          </a>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48 is-round">
                <img :src="dog.thumbnail" :alt="dog.name">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ dog.name }}</p>
              <p class="subtitle is-6">@{{ dog.location}}</p>
            </div>
          </div>

          <div class="content">
            {{ dog.size }} {{ dog.sex }} - {{ dog.breed }}
            <time :datetime="dog.date_published">{{ dog.date_published }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      dogs: []
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      return this.$http.get('/api/battersea', { responseType: 'json' }).then((response) => {
        console.log(response.body)
        this.dogs = response.body
      })
    }
  }
}
</script>

<style lang="scss">
@import '~bulma';

.card-image::after {
  display: block;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #fff 100%);
  margin-top: -150px;
  height: 150px;
  width: 100%;
  content: '';
}

figure.is-round {
  margin-top: 8px 8px 0;

  img {
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: #ecf0f1;
    box-shadow: 0 0px 3px 1px rgba(0,0,0,0.3);
    outline: 0;
  }
}
</style>
