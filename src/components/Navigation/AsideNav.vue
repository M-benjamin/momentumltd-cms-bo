<template>
  
        <div id="m_aside_left" class="m-grid__item m-aside-left m-aside-left--skin-dark ">
          <!-- BEGIN: Aside Menu -->
          <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " data-menu-vertical="true"
            data-menu-scrollable="false" data-menu-dropdown-timeout="500">
            <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
              <li class="m-menu__item  m-menu__item--active" aria-haspopup="true">
                 <router-link to="/" class="m-menu__link ">
                  <i class="m-menu__link-icon flaticon-line-graph"></i>
                  <span class="m-menu__link-title">
                    <span class="m-menu__link-wrap">
                      <span class="m-menu__link-text">
                        Dashboard
                      </span>
                      <span class="m-menu__link-badge">
                        <span class="m-badge m-badge--danger">
                          2
                        </span>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li class="m-menu__section">
                <h4 class="m-menu__section-text">
                  Components
                </h4>
                <i class="m-menu__section-icon flaticon-more-v3"></i>
              </li>
              <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">

                
                <router-link to="/section" class="m-menu__link m-menu__toggle">
                  <i class="m-menu__link-icon flaticon-layers"></i>
                  <span class="m-menu__link-text">
                    Pages
                  </span>
                  <i class="m-menu__ver-arrow la la-angle-right"></i>
                </router-link>

               


                <!-- // <div class="m-menu__submenu ">
                //   <span class="m-menu__arrow"></span>

                //   <ul class="m-menu__subnav">
                //     <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                //       <span class="m-menu__link">
                //         <span class="m-menu__link-text">
                //           Base
                //         </span>
                //       </span>
                //     </li>
                //     <li class="m-menu__item " aria-haspopup="true">
                //       <a href="/base/state.html" class="m-menu__link ">
                //         <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                //           <span></span>
                //         </i>
                //         <span class="m-menu__link-text">
                //           State Colors
                //         </span>
                //       </a>
                //     </li>

                //   </ul>
                // </div> -->
              </li>
              <!-- <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                <a href="#" class="m-menu__link m-menu__toggle">
                  <i class="m-menu__link-icon flaticon-share"></i>
                  <span class="m-menu__link-text">
                    Icons
                  </span>
                  <i class="m-menu__ver-arrow la la-angle-right"></i>
                </a>


                <div class="m-menu__submenu ">
                  <span class="m-menu__arrow"></span>
                  <ul class="m-menu__subnav">
                    <li class="m-menu__item " aria-haspopup="true">
                      <a href="/icons/flaticon.html" class="m-menu__link ">
                        <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                          <span></span>
                        </i>
                        <span class="m-menu__link-text">
                          Flaticon
                        </span>
                      </a>
                    </li>


                  </ul>
                </div>
              </li>
              <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                <a href="#" class="m-menu__link m-menu__toggle">
                  <i class="m-menu__link-icon flaticon-multimedia-1"></i>
                  <span class="m-menu__link-text">
                    Buttons
                  </span>
                  <i class="m-menu__ver-arrow la la-angle-right"></i>
                </a>
                <div class="m-menu__submenu ">
                  <span class="m-menu__arrow"></span>
                  <ul class="m-menu__subnav">
                    <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                      <span class="m-menu__link">
                        <span class="m-menu__link-text">
                          Buttons
                        </span>
                      </span>
                    </li>


                  </ul>
                </div>
              </li>

              <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                <a href="#" class="m-menu__link m-menu__toggle">
                  <i class="m-menu__link-icon flaticon-interface-7"></i>
                  <span class="m-menu__link-text">
                    Forms
                  </span>
                  <i class="m-menu__ver-arrow la la-angle-right"></i>
                </a>
                <div class="m-menu__submenu ">
                  <span class="m-menu__arrow"></span>
                  <ul class="m-menu__subnav">
                    <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                      <span class="m-menu__link">
                        <span class="m-menu__link-text">
                          Forms
                        </span>
                      </span>
                    </li>



                  </ul>
                </div>
              </li>
              <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                <a href="#" class="m-menu__link m-menu__toggle">
                  <i class="m-menu__link-icon flaticon-tabs"></i>
                  <span class="m-menu__link-text">
                    Datatables
                  </span>
                  <i class="m-menu__ver-arrow la la-angle-right"></i>
                </a>
                <div class="m-menu__submenu ">
                  <span class="m-menu__arrow"></span>
                  <ul class="m-menu__subnav">
                    <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                      <span class="m-menu__link">
                        <span class="m-menu__link-text">
                          Datatables
                        </span>
                      </span>
                    </li>



                  </ul>
                </div>
              </li> -->

            </ul>
          </div>
          <!-- END: Aside Menu -->

        </div>
        <!-- END: Left Aside -->

</template>
