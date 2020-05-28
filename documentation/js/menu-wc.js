'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Projet-Ionic-Pizza-Marmier documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddIngredientComponentModule.html" data-type="entity-link">AddIngredientComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddIngredientComponentModule-9b6a2c714e1bc706a16aae759858ce3a"' : 'data-target="#xs-components-links-module-AddIngredientComponentModule-9b6a2c714e1bc706a16aae759858ce3a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddIngredientComponentModule-9b6a2c714e1bc706a16aae759858ce3a"' :
                                            'id="xs-components-links-module-AddIngredientComponentModule-9b6a2c714e1bc706a16aae759858ce3a"' }>
                                            <li class="link">
                                                <a href="components/AddIngredientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddIngredientComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddPizzaComponentModule.html" data-type="entity-link">AddPizzaComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddPizzaComponentModule-e5fe560b2c54301d3ab28ef12f903cd5"' : 'data-target="#xs-components-links-module-AddPizzaComponentModule-e5fe560b2c54301d3ab28ef12f903cd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddPizzaComponentModule-e5fe560b2c54301d3ab28ef12f903cd5"' :
                                            'id="xs-components-links-module-AddPizzaComponentModule-e5fe560b2c54301d3ab28ef12f903cd5"' }>
                                            <li class="link">
                                                <a href="components/AddPizzaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPizzaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminProfilPageModule.html" data-type="entity-link">AdminProfilPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminProfilPageModule-8a47a131f388813c62a00ea0e6c1a721"' : 'data-target="#xs-components-links-module-AdminProfilPageModule-8a47a131f388813c62a00ea0e6c1a721"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminProfilPageModule-8a47a131f388813c62a00ea0e6c1a721"' :
                                            'id="xs-components-links-module-AdminProfilPageModule-8a47a131f388813c62a00ea0e6c1a721"' }>
                                            <li class="link">
                                                <a href="components/AdminProfilPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminProfilPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6266631cc2e1044204ae3062772bbe08"' : 'data-target="#xs-components-links-module-AppModule-6266631cc2e1044204ae3062772bbe08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6266631cc2e1044204ae3062772bbe08"' :
                                            'id="xs-components-links-module-AppModule-6266631cc2e1044204ae3062772bbe08"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartPageModule.html" data-type="entity-link">CartPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartPageModule-077cb983413050c3ee59e59f7d719742"' : 'data-target="#xs-components-links-module-CartPageModule-077cb983413050c3ee59e59f7d719742"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartPageModule-077cb983413050c3ee59e59f7d719742"' :
                                            'id="xs-components-links-module-CartPageModule-077cb983413050c3ee59e59f7d719742"' }>
                                            <li class="link">
                                                <a href="components/CartPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditIngredientPageModule.html" data-type="entity-link">EditIngredientPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditIngredientPageModule-4a5c7fc563186b7f4da7f5bd1ca3a63e"' : 'data-target="#xs-components-links-module-EditIngredientPageModule-4a5c7fc563186b7f4da7f5bd1ca3a63e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditIngredientPageModule-4a5c7fc563186b7f4da7f5bd1ca3a63e"' :
                                            'id="xs-components-links-module-EditIngredientPageModule-4a5c7fc563186b7f4da7f5bd1ca3a63e"' }>
                                            <li class="link">
                                                <a href="components/EditIngredientPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditIngredientPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditPizzaPageModule.html" data-type="entity-link">EditPizzaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditPizzaPageModule-2c99054cdddea9fe0ed46eec3f546fe4"' : 'data-target="#xs-components-links-module-EditPizzaPageModule-2c99054cdddea9fe0ed46eec3f546fe4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditPizzaPageModule-2c99054cdddea9fe0ed46eec3f546fe4"' :
                                            'id="xs-components-links-module-EditPizzaPageModule-2c99054cdddea9fe0ed46eec3f546fe4"' }>
                                            <li class="link">
                                                <a href="components/EditPizzaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPizzaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FooterComponentModule.html" data-type="entity-link">FooterComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterComponentModule-3e5d2948d049b7ac6722f2b9230f724d"' : 'data-target="#xs-components-links-module-FooterComponentModule-3e5d2948d049b7ac6722f2b9230f724d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterComponentModule-3e5d2948d049b7ac6722f2b9230f724d"' :
                                            'id="xs-components-links-module-FooterComponentModule-3e5d2948d049b7ac6722f2b9230f724d"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-581096241b4567473e6a46c8ca9c5e8d"' : 'data-target="#xs-components-links-module-HomePageModule-581096241b4567473e6a46c8ca9c5e8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-581096241b4567473e6a46c8ca9c5e8d"' :
                                            'id="xs-components-links-module-HomePageModule-581096241b4567473e6a46c8ca9c5e8d"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PizzaDetailPageModule.html" data-type="entity-link">PizzaDetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PizzaDetailPageModule-51a7a97eaceef2d2af59b9284c31c74b"' : 'data-target="#xs-components-links-module-PizzaDetailPageModule-51a7a97eaceef2d2af59b9284c31c74b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PizzaDetailPageModule-51a7a97eaceef2d2af59b9284c31c74b"' :
                                            'id="xs-components-links-module-PizzaDetailPageModule-51a7a97eaceef2d2af59b9284c31c74b"' }>
                                            <li class="link">
                                                <a href="components/PizzaDetailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PizzaDetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link">CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IngredientService.html" data-type="entity-link">IngredientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PizzaService.html" data-type="entity-link">PizzaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Pizza.html" data-type="entity-link">Pizza</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});