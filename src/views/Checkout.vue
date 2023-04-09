<template>
  <div>
    <h1>checkout</h1>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Address</v-expansion-panel-header>
        <v-expansion-panel-content
          style="background-color: #f8f2ea; padding: 10px; border: none"
        >
          <div
            v-for="(address, index) in addresses"
            :key="index"
            style="
              background-color: #f8f2ea;
              padding: 10px;
              margin-bottom: 10px;
            "
          >
            <input type="radio"
              :value="'Address' + (index + 1) "
              :checked="selectedAddress === index"
              @change="selectAddress(index)"
            ><h3>Address {{ index + 1 }}</h3>
            <div>
              <p>{{ fullAddress(index) }}</p>
              <v-btn @click="editAddress(index)" style="margin-right: 10px"
                >Edit</v-btn
              >
              
            </div>
            <div v-show="editMode[index]">
              <v-text-field
                v-model="nameInputs[index]"
                label="Name"
              ></v-text-field>
              <v-text-field
                v-model="zipcodeInputs[index]"
                label="Zipcode"
              ></v-text-field>
              <v-text-field
                v-model="addressInputs[index]"
                label="Address"
              ></v-text-field>
              <v-btn @click="saveAddress(index); editMode[index] = false">Save</v-btn>
              <v-btn @click="cancelEdit(index); editMode[index] = false">Cancel</v-btn>
            </div>
          </div>
          <v-btn @click="addAddress">Add Address</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Payment Method</v-expansion-panel-header>
        <v-expansion-panel-content
          style="background-color: #f8f2ea; padding: 10px; border: none"
        >
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Summary</v-expansion-panel-header>
        <v-expansion-panel-content
          style="background-color: ; padding: 10px; border: none">
          <div v-if="selectedAddress !== -1">
            <h3>Selected Address:</h3>
            <p>{{ fullAddress(selectedAddress) }}</p>
          </div>
          <div>
            <My-cart :cart-items="cartItems"></My-cart>
          </div>
          
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import MyCart from '@/components/MyCart.vue'

export default {
  components: {
    MyCart
  },
  data () {
    return {
      panel: [0, 1],
      addresses: ['123 Main St.', '456 Maple Ave.'],
      selectedAddress: -1,
      editMode: [false, false],
      nameInputs: [''],
      zipcodeInputs: [''],
      addressInputs: [''],
      cartItems: []
    }
  },
  methods: {
    fullAddress (index) {
      return `${this.addressInputs[index]}, ${this.zipcodeInputs[index]} ${this.nameInputs[index]}`
    },
    selectAddress (index) {
      this.selectedAddress = index
    },
    editAddress (index) {
      this.editMode[index] = true
    },
    saveAddress (index) {
      this.editMode[index] = false
      this.selectedAddress = -1
    },
    cancelEdit (index) {
      this.editMode[index] = false
      this.selectedAddress = -1
    },
    addAddress () {
      this.addresses.push('')
      this.editMode.push(true)
      this.nameInputs.push('')
      this.zipcodeInputs.push('')
      this.addressInputs.push('')
    }
  }
}

</script>



