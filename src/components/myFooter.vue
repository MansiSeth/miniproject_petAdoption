<template>
  <div class="footer-bg">
    <div class="content">
      <h1>About Us</h1>
      <p>
        For our PBL project, we didn’t forget last semester’s service learning
        which is why we want to get the maximum stray pets adopted using a
        Machine Learning recommender system that matches a pet parent with their
        perfectly matched pet baby.
      </p>
    </div>
    <div class="socials">
      <img class="insta" src="@/assets/insta.png" />
      <img class="twitter" src="@/assets/twitter.png" />
      <img class="linkedin" src="@/assets/linkedin.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "myFooter",
};
</script>

<style lang="scss" scoped>
.footer-bg {
  background-color: #ffbd59;
  display: flex;
  justify-content: center;

}
.socials {
  display: flex;
  justify-content:space-between;

}
.insta {
  width: 32px;
  height: 32px;
}
.twitter {
  width: 32px;
  height: 32px;
}

.linkedin {
  width: 32px;
  height: 32px;
}
.content {
  width:50%;
 
  background-color: #ffbd59;

}

</style>
