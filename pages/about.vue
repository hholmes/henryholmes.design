<template>
  <div class="mainstream container mt-rhythm">
    <h1>{{ page.title }}</h1>
    <div v-html="$md.render(page.body)" />
    <div id="flip-list-demo" class="demo">
      <button @mouseenter="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">
          {{ item }}
        </li>
      </transition-group>
    </div>
    <input 
      class="border-gray-100 border-solid border-2" 
      v-model="query"
      @mouseenter="showTopics = true"
      @mouseleave="showTopics = false">
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li
        class="inline-block mx-4"
        v-for="(item, index) in computedList"
        v-bind:key="item.msg"
        v-bind:data-index="index"
      >{{ item.msg }}</li>
    </transition-group>
    <SimpleList 
          class="w-full text-center md:text-left mt-rhythm md:mt-8"
          :useIcons="true"
          :items="[
            {
              icon: ['fab', 'spotify'],
              iconColor: 'text-green-300',
              content: 'Spotify for Dogs'
            },
            {
              icon: ['fab', 'lyft'],
              iconColor: 'text-red-400',
              content: 'Bat Cars'
            },
            {
              icon: ['fab', 'tumblr'],
              iconColor: 'text-blue-600',
              content: 'No Porn'
            }
          ]"
        />
  </div>
</template>

<script>
  import SimpleList from "~/components/SimpleList"
  const page = require('~/content/page/about.json')

  export default {
    data () {
      return {
        showTopics: false,
        numTopics: 0,
        page,
        items: [1,2,3,4,5,6,7,8,9],
        query: '',
        list: [
          { msg: 'Bruce Lee' },
          { msg: 'Jackie Chan' },
          { msg: 'Chuck Norris' },
          { msg: 'Jet Li' },
          { msg: 'Kung Fury' }
        ]
      }
    },
    computed: {
      computedList: function () {
        var vm = this
        if (this.showTopics)
          return this.list
        else 
          return []
      }
    },
    components: {
      SimpleList
    },
    head() {
      return {
        title: this.page.title
      }
    },
    methods: {
      shuffle: function () {
        this.items = _.shuffle(this.items)
      },
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter: function (el, done) {
        var i = el.dataset.index
        if (i > this.numTopics)
          this.numTopics = i
        var delay = i * 100
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1, height: '1.6em' },
            { complete: done }
          )
        }, delay)
      },
      leave: function (el, done) {
        var delay = (this.numTopics - el.dataset.index) * 100
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
          )
        }, delay)
      }
    }
  }
</script>

<style>
  h3 {
    @apply mb-4;
  }
  .flip-list-move {
    transition: transform 1s;
  }
</style>
