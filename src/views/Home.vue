<template>
  <div class="home-page">
    <div class="hp-welcome-image">
      <v-parallax class="myclass" dark src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <v-row align="center" justify="center">
          <v-col id="welcomePicText" class="text-center" cols="4" style>
            <h1 class="display-3 .font-weight-light mb-4">Team searching</h1>
            <h4 class="overline font-weight-thin">Develop or help to create</h4>
            <br />
            <v-btn class="ma-2" outlined color="white">Find a project</v-btn>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    
    <div class="hp-information">
      <v-container class="white">
        <v-row no-gutters>
          <v-col>
            <v-row>
              <h1>
                Make your project come alive <br> 
                with the help of others
              </h1>
            </v-row>
          </v-col>
        </v-row>
        <v-row center>
          <v-col>
            <v-card class="pa-2" elevation="0" tile>
              <v-card-title>Publish your idea</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt consectetur dolore rem corporis nam! Ad, at in veniam nemo perferendis quidem porro magnam iste placeat, doloremque repellat nobis, eligendi harum!</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" elevation="0" tile>
              <v-card-title>Connect with your dream team</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt consectetur dolore rem corporis nam! Ad, at in veniam nemo perferendis quidem porro magnam iste placeat, doloremque repellat nobis, eligendi harum!</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row center>
          <v-col>
            <v-card class="pa-2" elevation="0" tile>
              <v-card-title>Find project finders</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt consectetur dolore rem corporis nam! Ad, at in veniam nemo perferendis quidem porro magnam iste placeat, doloremque repellat nobis, eligendi harum!</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" elevation="0" tile>
              <v-card-title>Get advice from the crowd</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt consectetur dolore rem corporis nam! Ad, at in veniam nemo perferendis quidem porro magnam iste placeat, doloremque repellat nobis, eligendi harum!</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="this-week-features">
      <v-container>
        <v-row no-gutters>
          <v-col cols="6">
            <div class="this-week-features-items">
              <h3 style="margin-bottom: 10px;" class="headline"	>Featured this week</h3>
              <p class=".body-1	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a numquam laborum, quidem vitae sit impedit reiciendis pariatur recusandae totam. Quas, corporis consectetur impedit amet voluptate hic laboriosam quo autem.</p>
            </div>
          </v-col>
          <v-col cols="6">
             <v-img src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" contain max-height="300"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="banner">
      <v-container>
        <v-banner >
          <h1 class="headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut delectus expedita error molestias eveniet ab nihil saepe?</h1>
          <template v-slot:actions>
            <v-btn  color="primary">Join Today</v-btn>
            <v-btn outlined color="primary">Contact Us</v-btn>
          </template>
        </v-banner>
      </v-container>
    </div>

  </div>
</template>
   

<script>
export default {};
</script>

<style scoped>
.this-week-features-items {
  margin-top: 15%; 
  margin-top: 15%;
}


#welcomePicText {
  background: linear-gradient(rgba(255, 0, 0, 0), rgb(0, 0, 0));
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
}

.hp-information {
  margin-top: 100px;
  margin-bottom: 100px;
}

.this-week-features {
  align-items: center;
  justify-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background: rgba(214, 214, 214, 0.653);
}

/* .vertical-center {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  margin: auto;
} */

</style>