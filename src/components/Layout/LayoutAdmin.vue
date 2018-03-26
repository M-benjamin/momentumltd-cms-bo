<template>
  <!-- begin::Body -->
  <div class="m-grid m-grid--hor m-grid--root m-page">
    <!-- BEGIN: Header  Component-->
    <Header />
    <!-- END: Header -->

    <!-- begin::Body -->
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
      <!-- BEGIN: Left Aside -->
      <button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
        <i class="la la-close"></i>
      </button>

      <!-- ASIDE COMPONENT HERE -->
      <AsideNav />
      <!-- END: AsideNav-->
      <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <!-- Content Goes here -->
            <router-view></router-view> 
        <!-- ENd : Content Goes here -->
      </div>

    </div>
    <!-- end:: Body -->

    <!-- begin::Footer -->
    <Footer />
    <!-- end::Footer -->
  </div>
  <!-- end:: Page -->
</template>

<script>
  import AsideNav from "@/components/Navigation/AsideNav";
  import Header from "@/components/Navigation/Header";
  import Footer from "@/components/Footer/Footer";
  import Home from "@/components/Content/Home";

  export default {
    // > INCLUDE COMPONENT HERE
    components: {
      AsideNav,
      Header,
      Home,
      Footer
    }, 
    data() {
      return {
        currentView: 'Home'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
