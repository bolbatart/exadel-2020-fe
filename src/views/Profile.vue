<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="4" sm="4" cols="4">
          <v-avatar size="90%">
            <img
              src="https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </v-avatar>
        </v-col>
        <v-col md="7" sm="7" cols="7">
          <h1 class="display-1">Vardenis Pavardenis</h1>
          <br />
          <h2 class="title">LinkedIn:</h2>
          <h2 class="title">Email:</h2>
          <h2 class="title">Phone number:</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-divider></v-divider>
          <v-row justify="center">
            <v-col align="center">
              <h3
                class="headline font-weight-bold"
              >Find people who want to help you bring your ideas to life</h3>
              <v-btn
                style="margin-top: 3%; margin-bottom: 3%;"
                class="mx-2"
                fab
                dark
                x-large
                color="blue darken-1"
              >
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <p class="body-2 font-weight-regular">Press plus icon to create a new project</p>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h3 class="headline" style="margin-top:5%; margin-bottom:3%">Your projects:</h3>
          <div>
            <v-card>
              <v-row>
                <v-col cols="4" style="padding-top:0px;">
                  <img width="100%" src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                </v-col>
                <v-col cols="8">
                  <v-row>
                    <v-col>
                      <div style="display:flex; justify-content: flex-end;">
                        <v-icon style="margin-right:4%">mdi-trash-can-outline</v-icon>
                        <v-icon style="margin-right:4%">mdi-pencil</v-icon>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card-title style="padding-top:0%;">Professionals needed:</v-card-title>
                      <ul style="list-style-type:none;">
                        <li>Designer</li>
                        <li>Back-end developer</li>
                      </ul>
                    </v-col>
                    <v-col>
                      <p>Project area: </p>
                      <p><v-icon>mdi-map-marker</v-icon> Location: </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <div style="margin:4%;">
                  <v-card-title style="padding-top: 0%;">Name of the project</v-card-title>
                  <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, explicabo id mollitia amet enim eos minus vel perferendis provident esse iure. Ipsam corporis animi quasi, amet accusantium sit error ea!</v-card-text>
                </div>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
   

<script>
export default {};
</script>

<style scoped>
</style>