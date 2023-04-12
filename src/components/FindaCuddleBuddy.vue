<template>
    <div class="cuddlebuddy">
      <br>
      <h1>
        AI based <span style="color:#FFBD59 ;">Recommendation system </span>to find your new pet!
      </h1>
      <br>
      <p>
        pet adoption Random stuff about what approach and how it works. Random stuff about what approach and how it works. Random stuff about what approach and how it works. Random stuff about what approach and how it works. Random stuff about what approach and how it works. Random stuff about what approach and how it works. Random stuff about what approach and how it.
      </p>
      <br>
      <form @submit.prevent="submitForm" v-if="!formSubmitted">
        <span class="heading">What kind of furry friend are you looking for?</span>
        <br>
        <br>
          <select v-model="selectedItem" class="dropdown-button">
            <option disabled value="">Please select one</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        <input 
          type="radio" 
          v-model="gender" 
          value="Foster" 
        />
        <label>Foster</label>
        <input 
          type="radio" 
          v-model="gender" 
          value="Adopt" 
        />
        <label>Adopt</label>
        <br>
        <br>
        <br>
        <span class="heading" >Select Relevant Qualities</span>
        <br>
        <br>
        <label v-for="(option, index) in options" :key="index">
         <input type="checkbox" :value="option" v-model="selectedOptions" @input="updateSelectedOptions">
         {{ option }}
        </label>
        <br>    
        <br> 
        <br>   
        <span class="heading">Detect my location to show me pets nearby</span>
        <button @click="getPetsNearMe"><img class="location" src="@/assets/location.png" alt="Logo"/></button>
        <ul>
          <li v-for="pet in pets" :key="pet.id">
            {{ pet.name }} - {{ pet.distance }} km away
          </li>
        </ul>
      </form>
  </div>
</template>
<script>
export default {
    data() {
      return {
        options: ['Calm', 'Playful', 'Vaccinated', 'Small Space','House Trained', 'Hypoallergic'],
        selectedOptions: [],
        selectedItem: '',
        pets:[]
      };
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
    }
  }
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
form {
    padding: 30px;
    border: 2px solid;
    margin: 20px;
    border-radius: 20px;
    background-color: #ffbd59;
    text-align: justify;
  }

input {
    padding: 4px 8px;
    margin: 4px;
  }
.dropdown-button {
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
.heading {
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
</style>
