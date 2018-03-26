<template>
  <div>
    <!-- BEGIN: Subheader -->
    <div class="m-subheader ">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            Sections
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
      <div class="row">
        <div class="col-lg-12">
          <!--begin::Portlet-->
          <div class="m-portlet">
            <div class="m-portlet__head">
              <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                  <h3 class="m-portlet__head-text">
                    Edit section of your page :
                  </h3>
                </div>
              </div>
            </div>
            <div class="m-portlet__body">
              <!--begin::Section-->
              <div class="m-section m-section--last">
                <div class="m-section__content">
                  <!--begin::Preview-->
                  <div class="m-demo" data-code-preview="true" data-code-html="true" data-code-js="false">
                    <div class="m-demo__preview">
                      <ul class="m-nav">
                        <li class="m-nav__item">
                          <a href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-folder-4"></i>
                            <span class="m-nav__link-text">
                              Header
                            </span>
                          </a>
                        </li>
                        <li class="m-nav__item m-nav__item--active">
                          <router-link to="/section/about" href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-chat-1"></i>
                            <span class="m-nav__link-title">
                              <span class="m-nav__link-wrap">
                                <span class="m-nav__link-text">
                                  About
                                </span>
                                <!-- <span class="m-nav__link-badge">
                                  <span class="m-badge m-badge--danger m-badge--wide m-badge--rounded">
                                    new
                                  </span>
                                </span> -->
                              </span>
                            </span>
                          </router-link>
                        </li>
                        <li class="m-nav__item">
                          <a href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-users"></i>
                            <span class="m-nav__link-text">
                              Engagement
                            </span>
                          </a>
                        </li>
                        <li class="m-nav__item">
                          <a href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-cogwheel-2"></i>
                            <span class="m-nav__link-text">
                              Services
                            </span>
                          </a>
                        </li>
                        <li class="m-nav__item">
                          <a href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                            <span class="m-nav__link-title">
                              <span class="m-nav__link-wrap">
                                <span class="m-nav__link-text">
                                  carrier
                                </span>
                                <!-- <span class="m-nav__link-badge">
                                  <span class="m-badge m-badge--success m-badge--wide">
                                    23
                                  </span>
                                </span> -->
                              </span>
                            </span>
                          </a>
                        </li>
                        <li class="m-nav__item">
                          <a href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-folder-1"></i>
                            <span class="m-nav__link-text">
                              Testimony
                            </span>
                          </a>
                        </li>
                        <li class="m-nav__item">
                          <a href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-folder-2"></i>
                            <span class="m-nav__link-text">
                              Contact
                            </span>
                          </a>
                        </li>
                           <li class="m-nav__item">
                          <a href="" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-folder-3"></i>
                            <span class="m-nav__link-text">
                              Footer
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--end::Preview-->
                  <!-- begin::Dropdown-->
                  <div class="m-dropdown m-dropdown--inline  m-dropdown--arrow" data-dropdown-toggle="click">
                    <a href="#" class="m-dropdown__toggle btn btn-success dropdown-toggle">
                      Dropdown example
                    </a>
                  </div>
                  <!--end::Dropdown -->
                </div>
              </div>
              <!--end::Section-->
            </div>
          </div>
          <!--end::Portlet-->
        </div>
      </div>
    </div>
  </div>
</template>
