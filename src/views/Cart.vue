<template>
  <div class="CartButton">
    <h2>Checkout</h2>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Address</v-expansion-panel-header>

        <v-expansion-panel-content
          style="background-color: #ffe7c2; padding: 10px; border: none"
        >
          <div
            v-for="(address, index) in addresses"
            :key="index"
            style="
              background-color: #ffe7c2;

              padding: 10px;

              margin-bottom: 10px;
            "
          >
            <input
              type="radio"
              :value="'Address' + (index + 1)"
              :checked="selectedAddress === index"
              @change="selectAddress(index)"
            /><b>Address {{ index + 1 }}</b>

            <div>
              <p>{{ fullAddress(index) }}</p>

              <v-btn @click="editAddress(index)" style="margin-right: 10px">
                <v-icon left> mdi-pencil </v-icon>
                Edit
              </v-btn>
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

              <v-btn
                @click="
                  cancelEdit(index);
                  editMode[index] = false;
                "
                :disabled="loading"
                class="ma-1"
                color="grey"
                plain
              >
                Cancel
              </v-btn>

              <v-btn
                @click="
                  saveAddress(index);

                  editMode[index] = false;
                "
                class="ma-1"
                color="error"
                plain
              >
                Save
              </v-btn>
            </div>
          </div>

          <v-btn class="ma-2" outlined color="indigo" @click="addAddress">
            Add Address </v-btn
          ><br />

          <v-btn @click="nextAddressPanel">Next</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Payment Method</v-expansion-panel-header>

        <v-expansion-panel-content
          style="background-color: #ffe7c2; padding: 10px; border: none"
        >
          <div>
            <input type="radio" id="UPI" value="UPI" v-model="selectedOption" />

            <label for="UPI">UPI</label>
          </div>

          <div>
            <input
              type="radio"
              id="Debit/Credit Card"
              value="Debit/Credit Card"
              v-model="selectedOption"
            />

            <label for="Debit/Credit Card">Debit/Credit Card</label>
          </div>

          <div>
            <input
              type="radio"
              id="Pay On Delivery"
              value="Pay On Delivery"
              v-model="selectedOption"
            />

            <label for="Pay On Delivery">Pay On Delivery</label>
          </div>

          <!-- Conditional rendering based on the option selected -->

          <div v-if="selectedOption === 'UPI'">
            <input type="text" placeholder="Enter UPI ID" />
          </div>

          <div v-if="selectedOption === 'Debit/Credit Card'">
            <input type="text" placeholder="Card Number" />

            <input type="text" placeholder="Card Holder Name" />

            <input type="date" placeholder="Valid Through" />

            <input type="number" placeholder="CVV" />
          </div>
          <div v-if="selectedOption === 'Pay On Delivery'">
            <input type="text" placeholder="Enter Phone Number" />
          </div>

          <v-btn @click="nextPaymentPanel">Next</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Summary</v-expansion-panel-header>

        <v-expansion-panel-content
          style="background-color: ; padding: 10px; border: none"
        >
          <div v-if="selectedAddress !== -1">
            <p><b>Selected Address:</b> {{ fullAddress(selectedAddress) }}</p>
          </div>
          <div>
            <h3>My Items</h3>

            <My-cart v-if="ShowCartFlag" :cart-items="CartItems"></My-cart>

            <My-cart v-else :cart-items="CartItems"></My-cart>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import MyCart from "../components/MyCart.vue";

export default {
  name: "Cart",
  components: { MyCart },

  data() {
    return {
      CartItems: [],
      ShowCartFlag: false,
      panel: [0, 1],
      addresses: ["123 Main St.", "456 Maple Ave."],
      selectedAddress: -1,
      editMode: [false, false],
      nameInputs: ["John Smith", "Jane Smith"],
      zipcodeInputs: ["411021", "400060"],
      addressInputs: ["123 Main St.", "456 Maple Ave."],
      cartItems: [],
      selectedOption: "",
    };
  },

  created() {
    console.log("created hook is called");
    const storedCartItems = JSON.parse(localStorage.getItem("CartItems"));
    if (storedCartItems) {
      this.CartItems = storedCartItems;
    }
  },

  methods: {
    addToCart(product) {
      this.CartItems.push(product);
      localStorage.setItem("CartItems", JSON.stringify(this.CartItems));
    },

    ShowCart() {
      this.ShowCartFlag = true;
    },

    navigateToCart(CartItems) {
      this.$router.push({ name: "Cart", props: CartItems });
    },

    gotocheckout() {
      this.$router.push({
        name: "Checkout",
        props: {
          CartItems: this.CartItems,
        },
      });
    },

    fullAddress(index) {
      return `${this.nameInputs[index]},${this.addressInputs[index]}, ${this.zipcodeInputs[index]} `;
    },
    selectAddress(index) {
      this.selectedAddress = index;
    },
    editAddress(index) {
      this.editMode[index] = true;
    },
    saveAddress(index) {
      this.editMode[index] = false;
      this.selectedAddress = -1;
    },
    cancelEdit(index) {
      this.editMode[index] = false;
      this.selectedAddress = -1;
      // Restore previous values
      this.nameInputs[index] = this.addresses[index].name;
      this.zipcodeInputs[index] = this.addresses[index].zipcode;
      this.addressInputs[index] = this.addresses[index].address;
    },
    addAddress() {
      this.addresses.push("");
      this.editMode.push(true);
      this.nameInputs.push("");
      this.zipcodeInputs.push("");
      this.addressInputs.push("");
    },
    nextAddressPanel() {
      // Close the Address panel and open the Payment Method panel
      this.panel = [1];
    },

    nextPaymentPanel() {
      this.panel = [2];
    },
  },
};
</script>
