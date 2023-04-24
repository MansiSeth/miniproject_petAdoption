<template>
  <div>
    <div class="login-dummy-container">
      <div class="login-website-content">
        <span class="login-text">
          <span class="login-text1">
            Show some
            <span v-html="raw89bl"></span>
          </span>
          <span class="login-text2">Love</span>
          <span>to some four-legged furry angels</span>
        </span>
        <span class="login-text4">
          <span>
            Please consider making a donation to our pet adoption organization.
            Your generosity will help us provide food, shelter, and medical care
            for abandoned and stray animals. With your support, we can give these
            loving creatures a second chance at a happy, healthy life in a forever
            home. Every dollar counts and will make a real difference in the lives
            of these animals. Your donation is tax-deductible and greatly
            appreciated. Thank you for your support!
          </span>
        </span>
      </div>
      <div class="login-group2996">
        <div class="login-search">
          <div class="login-search-field">
            <div class="login-back-ground">
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6497916-0e16-47c0-888a-52f2d9d68107/fe8d45dc-cab7-4556-aa7c-e5ac48dbfb44?org_if_sml=11684"
                alt="Rectangle201168"
                class="login-rectangle20"
              />
            </div>
          </div>
        </div>
        <button @click="gotocheckout" class="login-text6"><span>Donate Now</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  data() {
    return {
      raw89bl: ' ',
    }
  },
  methods: {
    gotocheckout() {
    this.$router.push('/checkout')
    }
}
}
</script>

<style scoped>
.login-dummy-container {
  width: 100%;
  height: 900px;
}
.login-website-content {
  width: 828px;
  height: 233px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.login-text {
  left: 99.201416015625px;
  color: rgba(0, 0, 0, 1);
  width: 628px;
  height: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: Black;
  text-align: center;
  font-family: Inter;
  font-weight: 900;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.login-text1 {
  color: rgba(0, 0, 0, 1);
}
.login-text2 {
  color: rgba(255, 189, 89, 1);
}
.login-text4 {
  top: 113px;
  color: rgba(73, 73, 73, 1);
  width: 828px;
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.login-group2996 {
  width: 752px;
  height: 97px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: #FFBD59;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.login-search {
  top: 0px;
  left: 0px;
  width: 742px;
  height: 97px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.login-search-field {
  top: 0px;
  left: 0px;
  width: 742px;
  height: 97px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.login-rectangle20 {
  top: 7px;
  left: 10px;
  width: 723px;
  height: 82px;
  position: absolute;
  border-color: #FFBD59;
  border-radius: 77px;
  border-width: 50px;
}
.login-text6 {
  top: 35px;
  left: 250px;
  color: rgba(0, 0, 0, 1);
  width: 502px;
  height: auto;
  position: absolute;
  font-size: 42px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.login-dummy-container {
  margin-left:200px;
 
}
</style>
