<template>
  <div>
    <!-- BEGIN: Subheader -->
    <div class="m-subheader ">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            About Section
          </h3>
          <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
            <li class="m-nav__item m-nav__item--home">
              <a href="#" class="m-nav__link m-nav__link--icon">
                <i class="m-nav__link-icon la la-home"></i>
              </a>
            </li>
            <li class="m-nav__separator">
              -
            </li>
            <li class="m-nav__item">
              <a href="" class="m-nav__link">
                <span class="m-nav__link-text">
                  Page
                </span>
              </a>
            </li>
            <li class="m-nav__separator">
              -
            </li>
            <li class="m-nav__item">
              <a href="" class="m-nav__link">
                <span class="m-nav__link-text">
                  Section
                </span>
              </a>
            </li>
            <li class="m-nav__separator">
              -
            </li>
            <li class="m-nav__item">
              <a href="" class="m-nav__link">
                <span class="m-nav__link-text">
                  About Section
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover"
            aria-expanded="true">
            <a href="#" class="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
              <i class="la la-plus m--hide"></i>
              <i class="la la-ellipsis-h"></i>
            </a>
            <div class="m-dropdown__wrapper">
              <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
              <div class="m-dropdown__inner">
                <div class="m-dropdown__body">
                  <div class="m-dropdown__content">
                    <ul class="m-nav">
                      <li class="m-nav__section m-nav__section--first m--hide">
                        <span class="m-nav__section-text">
                          Quick Actions
                        </span>
                      </li>
                      <li class="m-nav__item">
                        <a href="" class="m-nav__link">
                          <i class="m-nav__link-icon flaticon-share"></i>
                          <span class="m-nav__link-text">
                            Activity
                          </span>
                        </a>
                      </li>
                      <li class="m-nav__item">
                        <a href="" class="m-nav__link">
                          <i class="m-nav__link-icon flaticon-chat-1"></i>
                          <span class="m-nav__link-text">
                            Messages
                          </span>
                        </a>
                      </li>
                      <li class="m-nav__item">
                        <a href="" class="m-nav__link">
                          <i class="m-nav__link-icon flaticon-info"></i>
                          <span class="m-nav__link-text">
                            FAQ
                          </span>
                        </a>
                      </li>
                      <li class="m-nav__item">
                        <a href="" class="m-nav__link">
                          <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                          <span class="m-nav__link-text">
                            Support
                          </span>
                        </a>
                      </li>
                      <li class="m-nav__separator m-nav__separator--fit"></li>
                      <li class="m-nav__item">
                        <a href="#" class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
                          Submit
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Subheader -->


    <div class="m-content">
      <!--Begin::Main Portlet-->
      <div class="m-portlet m-portlet--full-height">
        <!--begin: Portlet Head-->
        <div class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
                Edit About section :
              </h3>
            </div>
          </div>
          <div class="m-portlet__head-tools">
            <ul class="m-portlet__nav">
              <li class="m-portlet__nav-item">
                <a href="#" data-toggle="m-tooltip" class="m-portlet__nav-link m-portlet__nav-link--icon" data-direction="left" data-width="auto"
                  title="Get help with filling up this form">
                  <i class="flaticon-info m--icon-font-size-lg3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--end: Portlet Head-->
        <!--begin: Portlet Body-->
        <div class="m-portlet__body m-portlet__body--no-padding">
          <!--begin: Form Wizard-->
          <div class="m-wizard m-wizard--3 m-wizard--success" id="m_wizard">
            <!--begin: Message container -->
            <div class="m-portlet__padding-x">
              <!-- Here you can put a message or alert -->
            </div>
            <!--end: Message container -->
            <div class="row m-row--no-padding">

              <div class="col-xl-12 col-lg-12">
                <!--begin: Form Wizard Form-->
                <div class="m-wizard__form">

                  <form class="m-form m-form--label-align-left- m-form--state-" id="m_form">
                    <!--begin: Form Body -->
                    <div class="m-portlet__body m-portlet__body--no-padding">
                      <!--begin::Section-->

                      <div class="m-section">
                        <h3>Edit Block :</h3>
                        <hr>
                        <span class="m-section__sub">
                          You can see peview content in block below:
                        </span>
                        <i class="fa fa-mail-reply-all"></i>


                        <div class="m-section__content">

                          <!-- about section component -->
                          <div class="site-header">
                            <div class="row">
                              <div class="col-md-8">
                                <h1 class="site-header-title">{{ titleAbout }} </h1>
                                <!-- <div class="form-group m-form__group site-header-title"> -->
                                  <!-- <label for="exampleInputEmail1">
                                    Edit title:
                                  </label>
                                  <input type="text" class="form-control m-input"   placeholder="Enter email"
                                  v-model="title"> -->
                                <!-- </div> -->

                                <div class="form-group m-form__group row site-header-content">
                                  <!-- <label class="col-form-label col-lg-12 col-sm-12">
                                    Edit text :
                                  </label> -->
                                  <div class="col-lg-12 col-md-12 col-sm-12">
                                    <textarea name="content" class="form-control" data-provide="markdown" rows="10" v-model="message">
                                    </textarea>
                                  </div>
                                </div>

                              </div>
                              <div class="col-md-4">
                                <div class="form-group m-form__group row">
                                  <label class="col-form-label col-lg-12 col-sm-12">
                                    Edit Image :
                                  </label>
                                  <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="m-dropzone dropzone" action="inc/api/dropzone/upload.php" id="m-dropzone-one">
                                      <div class="m-dropzone__msg dz-message needsclick">
                                        <h3 class="m-dropzone__msg-title">
                                          Drop files here or click to upload.
                                        </h3>
                                        <span class="m-dropzone__msg-desc">
                                          This is just a demo dropzone. Selected files are
                                          <strong>
                                            not
                                          </strong>
                                          actually uploaded.
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>
                      <!--end::Section-->
                    </div>
                    <!--end: Form Body -->

                    <hr>
                    <button type="button" class="btn m-btn--pill  btn-outline-brand m-btn m-btn--custom m-btn--outline-2x" @click="saveAbout">
                      save
                    </button>
                  </form>
                </div>
                <!--end: Form Wizard Form-->
              </div>
            </div>
          </div>
          <!--end: Form Wizard-->
        </div>
        <!--end: Portlet Body-->
      </div>
      <!--End::Main Portlet-->
    </div>

  </div>
</template>

<script>
  import SiteHeader from '@/components/Content/Sites/SiteHeader'
  import AboutService from '@/services/AboutService'

  export default {
    components: {
      appSiteHeader: SiteHeader
    },
    data() {
      return {
        message: 'Momentum Services Ltd is the Company providing on board services on the high- speed trains linking London to Paris, Brussels, Amsterdam, Rotterdam, Disneyland, Marseille and the French Alps through the Channel Tunnel.Our goal is to improve our performance continuously delight our customers by exceeding their expectations promote the growth of our company. To meet these goals we have a management system in place hat complies with all relevant legal requirements and the requirements of ISO9001 : 2008 – Quality management system ISO9001 : 2008 – Quality management system ISO9001 : 2008 – Quality management system',
        titleAbout : 'About Us and',
        image: ''
      }
    }, 
    methods: {
      saveAbout() {
        console.log(this.titleA)
      }
    }
  }

</script>


<style scoped>
  .fa-mail-reply-all {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(-120deg);
    font-size: 50px;
  }

  .m-section .m-section__sub {
    font-size: 20px;
    margin-left: 30px;
  }

  .m-section .m-section__content {
    margin-top: 20px;
  }

  .m-content .m-portlet--full-height {
    border: 1px solid #716aca;
  }

  .m-wizard.m-wizard--3 .m-portlet__foot {
    margin: 0px -2rem -8rem -4rem;
  }

  .site-header img {
    border: 2px dashed #efefef;
    width: 100%;
    height: 327px;
    padding: 10px;
  }

  .site-header .site-header-title {
    border: 2px dashed #efefef;
  }

  .site-header .site-header-content {
    border: 2px dashed #efefef;
  }

</style>
