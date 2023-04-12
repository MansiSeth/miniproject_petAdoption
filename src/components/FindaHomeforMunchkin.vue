<template>
    <div class="cuddlebuddy">
      <br>
      <h1>
        Help an animal find a <span style="color:#FFBD59 ;">New Home</span>
      </h1>
      <br>
      <p>
        List out the information of the pet you want to find a new home for and our model will connect you to potential adopters that are matched through a recommender system to ensure that our munchkin finds a nice and loving home!
      </p>
      <br>
      <form class="form2" @submit.prevent="submitForm" v-if="!formSubmitted">
        <span class="heading2">Category</span>
        <br>
        <br>
          <select v-model="selectedItem" class="dropdown-button2">
            <option disabled value="">Please select one</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        <br>
        <br>
        <br>
        <span class="heading2">Age</span>
        <input
          type="text" 
          v-model="age" 
          placeholder="Enter the age" 
          class="infodesign"
        />
        <br>
        <br>
        <br>
        <span class="heading2" >Select Relevant Qualities</span>
        <br>
        <br>
        <label v-for="(option, index) in options" :key="index">
         <input type="checkbox" :value="option" v-model="selectedOptions" @input="updateSelectedOptions">
         {{ option }}
        </label>
        <br>    
        <br> 
        <br>   
        <span class="heading2">Detect my location to show me pets nearby</span>
        <button @click="getPetsNearMe"><img class="location" src="@/assets/location.png" alt="Logo"/></button>
        <ul>
          <li v-for="pet in pets" :key="pet.id">
            {{ pet.name }} - {{ pet.distance }} km away
          </li>
        </ul>
        <br>
        <br>
        <div class="container">
            <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
              <h1 style="text-align: center; padding: 10px;">Upload images</h1>
              <div class="dropbox">
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                  accept="image/*" class="input-file">
                  <p v-if="isInitial">
                    Drag your file(s) here to begin<br> or click to browse
                  </p>
                  <p v-if="isSaving">
                    Uploading {{ fileCount }} files...
                  </p>
              </div>
            </form>
        </div>
        <br>
        <span class="heading2">Your Details</span>
        <input
          type="text" 
          v-model="name" 
          placeholder="Enter your name" 
          class="infodesign"
        />
        <input
          type="text" 
          v-model="number" 
          placeholder="Enter your phone number" 
          class="infodesign"
        />
      </form>
  </div>
</template>
<script>
import axios from 'axios';

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
    data() {
      return {
        age:"",
        options: ['Calm', 'Playful', 'Vaccinated', 'Small Space','House Trained', 'Hypoallergic'],
        selectedOptions: [],
        selectedItem: '',
        pets:[],
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos'
      };
    },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      }
    },
    methods: {
      submitForm: function () {
        this.formSubmitted = true
      },
      updateSelectedOptions() {
      this.$emit('selected-options', this.selectedOptions);
      },
      async getPetsNearMe() {
      // Get the user's current location
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
      }
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        // Use a pet API to fetch nearby pets
        const response = await axios.get(`https://api.petfinder.com/v2/animals?type=dog&location=${latitude},${longitude}`);
        this.pets = response.data.animals.map(pet => ({
          id: pet.id,
          name: pet.name,
          distance: pet.distance
        }));
      }, error => {
        alert(`Error getting location: ${error.message}`);
      });
    },
    reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

        upload(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        // save it
        this.save(formData);
      }
  },
  mounted() {
      this.reset();
    },
};
</script>
<style>
.cuddlebuddy
{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  align-items: center;
  text-align: center;
  margin: 30px;
}
.infodesign
{
    width:230px;
    margin-left:20px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 8px;
}
.form2 {
    padding: 30px;
    border: 2px solid;
    margin: 20px;
    left: 121px;
    top: 324px;
    background-color: #FFE7C2;
    text-align: justify;
  }

input {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
}
.dropdown-button2 {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  margin-right: 20px;
}
.heading2 {
    font-size: 25px;
    margin: 4px;
    font-weight: 500;
  }

.submit {
    font-size: 15px;
    color: #fff;
    background: #222;
    padding: 6px 12px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 5px;
  }
.location
{
  padding-left: 30px;
  width: 60px;
  height:30px
}
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: white;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
    border-radius: 20px;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: #FFE7C2 ; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
