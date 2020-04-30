<template>
  <div class="about-page">
    <sub-header
      title="About FAS"
      text="Farming advices system"
    />
    <div class="container container--small">
      <div class="about-page__row">
        <h2 class="about-page__heading">
          What is FAS?
        </h2>
        <p class="about-page__text">
          This website aims to provide answers to any farming topic that's relevant to this geographic area. 
          While searching for an answer, the user will come across a variety of topics and tips. 
          However, if that does not help them, the user may ask a custom question, which the admins will answer and e-mail back to them.
          <b>Our mission</b> - To help Nigerian farmers with farming and growing crops and animals
          Just 
          <router-link to="/ask">ask an question!</router-link>
        </p>
      </div>
      <div class="about-page__row">
        <h2 class="about-page__heading">
          Why?
        </h2>
        <p class="about-page__text">
          We created this website as part of our Group Project for 
          <a href="https://www.aber.ac.uk/en/modules/deptfuture/CS22220/AB0/">CS22220</a>
          Module at
          <a href="https://www.aber.ac.uk/en/">Aberystwyth University</a>
        </p>
      </div>
      <div class="about-page__row">
        <h2 class="about-page__heading">
          Application architecture
        </h2>
        <p class="about-page__text">
          The whole application is based on 2 smaller parts – Front-end part (Vue.js) 
          and the Back-end part (Node.js + Express.js + MongoDB). Splitting the 
          application into 2 smaller parts lets us create better agnostic architecture. 
          We do not have to build one big monolithic website. This approach has great 
          benefits for continuing application maintenance. At the same time, two teams 
          (front-end and back-end) can work synchronously on application development. 
          Front-end application works as SPA, everything renders at the client’s side.
        </p>
      </div>
      <div class="about-page__row">
        <h2 class="about-page__heading">
          Front-end
        </h2>
        <p class="about-page__text">
          Vue.js is a progressive framework for building user interfaces. 
          It is the easiest JavaScript framework, which provides a bunch of methods and architecture for Front-End application.
          A large eco system around Vue allows for careful and accurate selection of additional tools and libraries. In addition, writing applications based on components allows you to write a lot of reusable code.
        </p>
        <h3 class="about-page__sub-heading">
          Front-end technologies:
        </h3>
        <ul class="about-page__list">
          <li class="about-page__list-item">
            Vue.js (JavaScript framework)
          </li>
          <li class="about-page__list-item">
            Vuex (Flux implementation for Vue – global store)
          </li>
          <li class="about-page__list-item">
            Vue Router (Eouting on the front-end side)
          </li>
          <li class="about-page__list-item">
            Vee-Validate (Forms validation library)
          </li>
          <li class="about-page__list-item">
            Axios (AJAX library based on es6 promises)
          </li>
          <li class="about-page__list-item">
            SCSS/SASS (CSS pre-processor)
          </li>
          <li class="about-page__list-item">
            ElementUI (UI library based on Vue.js components)
          </li>
          <li class="about-page__list-item">
            PWA (Progressive web application)
          </li>
        </ul>
      </div>
      <div class="about-page__row">
        <h2 class="about-page__heading">
          Back-end
        </h2>
        <p class="about-page__text">
          Node.js is a JavaScript runtime environment that executes JavaScript code outside of a web browser.
          Which means that it allows to write back-end code and run on the VPS or hosting. Node.js is very fast, 
          with MongoDB it’s a great combination. The whole server application has used MVC pattern, however, 
          instead of normal “views” it has routing based on REST API pattern. Therefore application works as API,
          it doesn’t have any rendered views, but it returns raw JSON data (for AJAX calls). 
        </p>
        <p class="about-page__text">
          As we decided to use Node.js with Express.js we migrated 
          from SQLite to the MongoDB. MongoDB works great with the Node.js, 
          that is why we decided to migrate. Passport.js is responsible for 
          authentication and storing hashed password. 
          That’s why user doesn’t have password field in the collection, 
          instead of it there are salt and hash fields. They are in charge of 
          encrypt and decrypt passwords based on user unique ID. 
        </p>
        <p class="about-page__text">
          MongoDB is uploaded on the web server, connection requires password, 
          moreover file with the connection settings is located in the node.js server file, 
          therefore it’s secured. Questions table collects all questions from users. In the dashboard administration 
          is able to answer and edit questions. Each of items record is connected 
          by id and parentID, therefore Node.js will handle these connections 
          and returns items with children array which has other records, 
          and it goes so on – better solution for the front-end part to handle data.
        </p>
        <h3 class="about-page__sub-heading">
          Back-end technologies:
        </h3>
        <ul class="about-page__list">
          <li class="about-page__list-item">
            Node.js
          </li>
          <li class="about-page__list-item">
            Express.js (Node.js framework)
          </li>
          <li class="about-page__list-item">
            MongoDB (NoSQL database migrated from SQLite)
          </li>
          <li class="about-page__list-item">
            REST API (design pattern)
          </li>
          <li class="about-page__list-item">
            MVC (design pattern)
          </li>
          <li class="about-page__list-item">
            Passport (authentication middleware for Node.js)
          </li>
          <li class="about-page__list-item">
            JWT (Web Tokens for authentication and authorization)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const SubHeader = () => import('@/components/SubHeader/SubHeader.vue');

export default {
  name: 'AboutPage',
  components: {
    SubHeader,
  },
};
</script>

<style lang="scss" src="./About.scss" />
