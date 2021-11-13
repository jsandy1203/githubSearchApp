<template>
    <div>
    <!-- <nav class="navbar bg-primary">
        <h4><i class="fa fa-github"></i>
        {{title}}</h4>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
        </ul>
         <ul>
            <li>
                <router-link to="/">About</router-link>
            </li>
        </ul>
    </nav> -->

    <header>
    <nav>
      <div id="brand">
        <p><i class="fa fa-github"></i><span>GithubFinder</span></p>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Locations</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#"></a></li>
      </ul>
    </nav>
</header>

    </div>
</template>

<script>
    export default {
        data() {
            return {
            title: 'Github Finder'
            }
         
        }
    }
</script>

<style scoped>
    /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/
* {
  margin: 0;
}

header {
  background: #c31432;
  background: -webkit-gradient(linear, left top, right top, from(#240b36), to(#c31432));
  background: -o-linear-gradient(left, #240b36, #c31432);
  background: linear-gradient(to right, #240b36, #c31432);
  padding: 10px 0;
}

#brand {
  margin: 0 20px;
}

#brand span{
 font: 30px "Abril Fatface", cursive;
}

#brand i {
  font-size: 5em;
  margin-right: 5px;
}

nav {
  color: #ecf0f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

nav ul {
  margin: 0;
  padding: 0;
  font-size: 15px;
}

nav li {
  display: inline-block;
}

nav a {
  color: #ecf0f1;
  padding: 0 8px;
  padding-right: 38px;
  text-decoration: none;
}

nav a:hover {
  color: #270B36
}

@media(max-width: 767px) {
  nav{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

}

@media(max-width: 600px) {
  #brand,
  nav li {
    margin-bottom: 5px;
  }
}

</style>