var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/modal/modal';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import14 from 'ionic-angular/components/content/content';
import * as import15 from 'ionic-angular/components/button/button';
import * as import16 from 'ionic-angular/components/list/list';
import * as import17 from 'ionic-angular/components/item/item';
import * as import18 from 'ionic-angular/components/list/list-header';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from 'ionic-angular/components/label/label';
import * as import21 from 'ionic-angular/components/select/select';
import * as import22 from '@angular/forms/src/directives/ng_model';
import * as import23 from '@angular/forms/src/directives/ng_control_status';
import * as import24 from 'ionic-angular/components/option/option';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from 'ionic-angular/navigation/nav-controller';
import * as import31 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import32 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import33 from 'ionic-angular/util/keyboard';
import * as import34 from '@angular/core/src/zone/ng_zone';
import * as import35 from 'ionic-angular/components/tabs/tabs';
import * as import36 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import37 from 'ionic-angular/gestures/gesture-controller';
import * as import38 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import39 from 'ionic-angular/util/form';
import * as import40 from '../../node_modules/ionic-angular/components/select/select.ngfactory';
import * as import41 from '@angular/forms/src/directives/control_value_accessor';
import * as import42 from '@angular/forms/src/directives/ng_control';
import * as import43 from 'ionic-angular/navigation/nav-params';
import * as import44 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import45 from 'ionic-angular/components/nav/nav';
import * as import46 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import47 from 'ionic-angular/navigation/nav-controller-base';
import * as import48 from '@angular/core/src/linker/component_factory_resolver';
import * as import49 from 'ionic-angular/transitions/transition-controller';
import * as import50 from 'ionic-angular/navigation/deep-linker';
var renderType_ModalFirstPage_Host = null;
var _View_ModalFirstPage_Host0 = (function (_super) {
    __extends(_View_ModalFirstPage_Host0, _super);
    function _View_ModalFirstPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ModalFirstPage_Host0, renderType_ModalFirstPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ModalFirstPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ModalFirstPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ModalFirstPage_0_4 = new import3.ModalFirstPage(this.parentInjector.get(import8.ModalController));
        this._appEl_0.initComponent(this._ModalFirstPage_0_4, [], compView_0);
        compView_0.create(this._ModalFirstPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ModalFirstPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ModalFirstPage) && (0 === requestNodeIndex))) {
            return this._ModalFirstPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ModalFirstPage_Host0;
}(import1.AppView));
function viewFactory_ModalFirstPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ModalFirstPage_Host === null)) {
        (renderType_ModalFirstPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ModalFirstPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ModalFirstPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ModalFirstPage_Host0, import3.ModalFirstPage);
var styles_ModalFirstPage = [];
var renderType_ModalFirstPage = null;
var _View_ModalFirstPage0 = (function (_super) {
    __extends(_View_ModalFirstPage0, _super);
    function _View_ModalFirstPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ModalFirstPage0, renderType_ModalFirstPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ModalFirstPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import28.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import29.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import30.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import31.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Modals', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import32.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_11, 'padding', '');
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_13, 'block', '');
        this.renderer.setElementAttribute(this._el_13, 'ion-button', '');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import36.viewFactory_Button0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Button_13_4 = new import15.Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_13), this.renderer);
        this._appEl_13.initComponent(this._Button_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, 'Open Basic Modal', null);
        compView_13.create(this._Button_13_4, [[].concat([this._text_14])], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_17, 'no-margin', '');
        this._List_17_3 = new import16.List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import37.GestureController));
        this._text_18 = this.renderer.createText(this._el_17, '\n    ', null);
        this._el_19 = this.renderer.createElement(this._el_17, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'item');
        this._appEl_19 = new import2.AppElement(19, 17, this, this._el_19);
        var compView_19 = import38.viewFactory_Item0(this.viewUtils, this.injector(19), this._appEl_19);
        this._Item_19_4 = new import17.Item(this.parentInjector.get(import39.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_19), this.renderer);
        this._ListHeader_19_5 = new import18.ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_19), null);
        this._query_Label_19_0 = new import19.QueryList();
        this._query_Button_19_1 = new import19.QueryList();
        this._query_Icon_19_2 = new import19.QueryList();
        this._appEl_19.initComponent(this._Item_19_4, [], compView_19);
        this._text_20 = this.renderer.createText(null, '\n      Enter Parameters to Pass to the Modal\n    ', null);
        this._query_Label_19_0.reset([]);
        this._Item_19_4.contentLabel = this._query_Label_19_0.first;
        compView_19.create(this._Item_19_4, [
            [],
            [],
            [].concat([this._text_20]),
            [],
            []
        ], null);
        this._text_21 = this.renderer.createText(this._el_17, '\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_17, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'item item-block');
        this._appEl_22 = new import2.AppElement(22, 17, this, this._el_22);
        var compView_22 = import38.viewFactory_Item0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Item_22_4 = new import17.Item(this.parentInjector.get(import39.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_22), this.renderer);
        this._ItemContent_22_5 = new import17.ItemContent();
        this._query_Label_22_0 = new import19.QueryList();
        this._query_Button_22_1 = new import19.QueryList();
        this._query_Icon_22_2 = new import19.QueryList();
        this._appEl_22.initComponent(this._Item_22_4, [], compView_22);
        this._text_23 = this.renderer.createText(null, '\n      ', null);
        this._el_24 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_24_3 = new import20.Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_24), this.renderer, null, null, null, null);
        this._text_25 = this.renderer.createText(this._el_24, 'Parameters', null);
        this._text_26 = this.renderer.createText(null, '\n      ', null);
        this._el_27 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_27, 'multiple', 'true');
        this._appEl_27 = new import2.AppElement(27, 22, this, this._el_27);
        var compView_27 = import40.viewFactory_Select0(this.viewUtils, this.injector(27), this._appEl_27);
        this._Select_27_4 = new import21.Select(this.parentInjector.get(import29.App), this.parentInjector.get(import39.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_27), this.renderer, this._Item_22_4, this.parentInjector.get(import30.NavController, null));
        this._NG_VALUE_ACCESSOR_27_5 = [this._Select_27_4];
        this._NgModel_27_6 = new import22.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_27_5);
        this._NgControl_27_7 = this._NgModel_27_6;
        this._NgControlStatus_27_8 = new import23.NgControlStatus(this._NgControl_27_7);
        this._query_Option_27_0 = new import19.QueryList();
        this._appEl_27.initComponent(this._Select_27_4, [], compView_27);
        this._text_28 = this.renderer.createText(null, '\n        ', null);
        this._el_29 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_29, 'value', 'nes');
        this._Option_29_3 = new import24.Option(new import26.ElementRef(this._el_29));
        this._text_30 = this.renderer.createText(this._el_29, 'NES', null);
        this._text_31 = this.renderer.createText(null, '\n        ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_32, 'value', 'n64');
        this._Option_32_3 = new import24.Option(new import26.ElementRef(this._el_32));
        this._text_33 = this.renderer.createText(this._el_32, 'Nintendo64', null);
        this._text_34 = this.renderer.createText(null, '\n        ', null);
        this._el_35 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_35, 'value', 'ps');
        this._Option_35_3 = new import24.Option(new import26.ElementRef(this._el_35));
        this._text_36 = this.renderer.createText(this._el_35, 'PlayStation', null);
        this._text_37 = this.renderer.createText(null, '\n        ', null);
        this._el_38 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_38, 'value', 'genesis');
        this._Option_38_3 = new import24.Option(new import26.ElementRef(this._el_38));
        this._text_39 = this.renderer.createText(this._el_38, 'Sega Genesis', null);
        this._text_40 = this.renderer.createText(null, '\n        ', null);
        this._el_41 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_41, 'value', 'saturn');
        this._Option_41_3 = new import24.Option(new import26.ElementRef(this._el_41));
        this._text_42 = this.renderer.createText(this._el_41, 'Sega Saturn', null);
        this._text_43 = this.renderer.createText(null, '\n        ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_44, 'value', 'snes');
        this._Option_44_3 = new import24.Option(new import26.ElementRef(this._el_44));
        this._text_45 = this.renderer.createText(this._el_44, 'SNES', null);
        this._text_46 = this.renderer.createText(null, '\n      ', null);
        compView_27.create(this._Select_27_4, [], null);
        this._text_47 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_22_0.reset([this._Label_24_3]);
        this._Item_22_4.contentLabel = this._query_Label_22_0.first;
        compView_22.create(this._Item_22_4, [
            [],
            [].concat([this._el_24]),
            [].concat([
                this._text_23,
                this._text_26,
                this._text_47
            ]),
            [].concat([this._el_27]),
            []
        ], null);
        this._text_48 = this.renderer.createText(this._el_17, '\n  ', null);
        this._text_49 = this.renderer.createText(null, '\n\n  ', null);
        this._el_50 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_50, 'padding', '');
        this._text_51 = this.renderer.createText(this._el_50, '\n    ', null);
        this._el_52 = this.renderer.createElement(this._el_50, 'button', null);
        this.renderer.setElementAttribute(this._el_52, 'block', '');
        this.renderer.setElementAttribute(this._el_52, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_52, 'ion-button', '');
        this._appEl_52 = new import2.AppElement(52, 50, this, this._el_52);
        var compView_52 = import36.viewFactory_Button0(this.viewUtils, this.injector(52), this._appEl_52);
        this._Button_52_4 = new import15.Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_52), this.renderer);
        this._appEl_52.initComponent(this._Button_52_4, [], compView_52);
        this._text_53 = this.renderer.createText(null, 'Open with Parameters', null);
        compView_52.create(this._Button_52_4, [[].concat([this._text_53])], null);
        this._text_54 = this.renderer.createText(this._el_50, '\n  ', null);
        this._text_55 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_16,
                this._el_17,
                this._text_49,
                this._el_50,
                this._text_55
            ]),
            []
        ], null);
        this._text_56 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_27, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_27_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_1.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_27, 'keyup.space', this.eventHandler(this._handle_keyup_space_27_2.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_27_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_27_0.bind(this)));
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_52, 'click', this.eventHandler(this._handle_click_52_0.bind(this)));
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._text_56
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [subscription_0]);
        return null;
    };
    _View_ModalFirstPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import15.Button) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Button_13_4;
        }
        if (((token === import17.Item) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Item_19_4;
        }
        if (((token === import18.ListHeader) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ListHeader_19_5;
        }
        if (((token === import20.Label) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Label_24_3;
        }
        if (((token === import24.Option) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Option_29_3;
        }
        if (((token === import24.Option) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Option_32_3;
        }
        if (((token === import24.Option) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Option_35_3;
        }
        if (((token === import24.Option) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Option_38_3;
        }
        if (((token === import24.Option) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._Option_41_3;
        }
        if (((token === import24.Option) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Option_44_3;
        }
        if (((token === import21.Select) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Select_27_4;
        }
        if (((token === import41.NG_VALUE_ACCESSOR) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NG_VALUE_ACCESSOR_27_5;
        }
        if (((token === import22.NgModel) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgModel_27_6;
        }
        if (((token === import42.NgControl) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgControl_27_7;
        }
        if (((token === import23.NgControlStatus) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgControlStatus_27_8;
        }
        if (((token === import17.Item) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Item_22_4;
        }
        if (((token === import17.ItemContent) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._ItemContent_22_5;
        }
        if (((token === import16.List) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._List_17_3;
        }
        if (((token === import15.Button) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Button_52_4;
        }
        if (((token === import14.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ModalFirstPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changed = false;
        var currVal_4 = '';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Button_13_4.block = currVal_4;
            changed = true;
            this._expr_4 = currVal_4;
        }
        if (changed) {
            this._appEl_13.componentView.markAsCheckOnce();
        }
        var currVal_8 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Select_27_4.multiple = currVal_8;
            this._expr_8 = currVal_8;
        }
        changes = null;
        var currVal_10 = this.context.myParam;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._NgModel_27_6.model = currVal_10;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_10, currVal_10);
            this._expr_10 = currVal_10;
        }
        if ((changes !== null)) {
            this._NgModel_27_6.ngOnChanges(changes);
        }
        var currVal_17 = 'nes';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._Option_29_3.value = currVal_17;
            this._expr_17 = currVal_17;
        }
        var currVal_18 = 'n64';
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._Option_32_3.value = currVal_18;
            this._expr_18 = currVal_18;
        }
        var currVal_19 = 'ps';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Option_35_3.value = currVal_19;
            this._expr_19 = currVal_19;
        }
        var currVal_20 = 'genesis';
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._Option_38_3.value = currVal_20;
            this._expr_20 = currVal_20;
        }
        var currVal_21 = 'saturn';
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._Option_41_3.value = currVal_21;
            this._expr_21 = currVal_21;
        }
        var currVal_22 = 'snes';
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._Option_44_3.value = currVal_22;
            this._expr_22 = currVal_22;
        }
        changed = false;
        var currVal_24 = '';
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._Button_52_4.block = currVal_24;
            changed = true;
            this._expr_24 = currVal_24;
        }
        var currVal_25 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this._Button_52_4.color = currVal_25;
            changed = true;
            this._expr_25 = currVal_25;
        }
        if (changed) {
            this._appEl_52.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_19_1.dirty) {
                this._query_Button_19_1.reset([]);
                this._Item_19_4._buttons = this._query_Button_19_1;
                this._query_Button_19_1.notifyOnChanges();
            }
            if (this._query_Icon_19_2.dirty) {
                this._query_Icon_19_2.reset([]);
                this._Item_19_4._icons = this._query_Icon_19_2;
                this._query_Icon_19_2.notifyOnChanges();
            }
            if (this._query_Option_27_0.dirty) {
                this._query_Option_27_0.reset([
                    this._Option_29_3,
                    this._Option_32_3,
                    this._Option_35_3,
                    this._Option_38_3,
                    this._Option_41_3,
                    this._Option_44_3
                ]);
                this._Select_27_4.options = this._query_Option_27_0;
                this._query_Option_27_0.notifyOnChanges();
            }
            if (this._query_Button_22_1.dirty) {
                this._query_Button_22_1.reset([]);
                this._Item_22_4._buttons = this._query_Button_22_1;
                this._query_Button_22_1.notifyOnChanges();
            }
            if (this._query_Icon_22_2.dirty) {
                this._query_Icon_22_2.reset([]);
                this._Item_22_4._icons = this._query_Icon_22_2;
                this._query_Icon_22_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_19_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_27_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_22_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_52_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_9 = this._Select_27_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_27, 'select-disabled', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_11 = this._NgControlStatus_27_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_27, 'ng-untouched', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_27_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_27, 'ng-touched', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_27_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_27, 'ng-pristine', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_27_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_27, 'ng-dirty', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_27_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_27, 'ng-valid', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_27_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_27, 'ng-invalid', currVal_16);
            this._expr_16 = currVal_16;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ModalFirstPage0.prototype.destroyInternal = function () {
        this._Select_27_4.ngOnDestroy();
        this._NgModel_27_6.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    _View_ModalFirstPage0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openBasicModal() !== false);
        return (true && pd_0);
    };
    _View_ModalFirstPage0.prototype._handle_ngModelChange_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.myParam = $event) !== false);
        return (true && pd_0);
    };
    _View_ModalFirstPage0.prototype._handle_click_27_1 = function ($event) {
        this._appEl_27.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_27_4._click($event) !== false);
        return (true && pd_0);
    };
    _View_ModalFirstPage0.prototype._handle_keyup_space_27_2 = function ($event) {
        this._appEl_27.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_27_4._keyup() !== false);
        return (true && pd_0);
    };
    _View_ModalFirstPage0.prototype._handle_click_52_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openModalWithParams() !== false);
        return (true && pd_0);
    };
    return _View_ModalFirstPage0;
}(import1.AppView));
export function viewFactory_ModalFirstPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ModalFirstPage === null)) {
        (renderType_ModalFirstPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ModalFirstPage, {}));
    }
    return new _View_ModalFirstPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ModalContentPage_Host = null;
var _View_ModalContentPage_Host0 = (function (_super) {
    __extends(_View_ModalContentPage_Host0, _super);
    function _View_ModalContentPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ModalContentPage_Host0, renderType_ModalContentPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ModalContentPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ModalContentPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ModalContentPage_0_4 = new import3.ModalContentPage(this.parentInjector.get(import27.ViewController), this.parentInjector.get(import43.NavParams));
        this._appEl_0.initComponent(this._ModalContentPage_0_4, [], compView_0);
        compView_0.create(this._ModalContentPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ModalContentPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ModalContentPage) && (0 === requestNodeIndex))) {
            return this._ModalContentPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ModalContentPage_Host0;
}(import1.AppView));
function viewFactory_ModalContentPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ModalContentPage_Host === null)) {
        (renderType_ModalContentPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ModalContentPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ModalContentPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ModalContentPage_Host0, import3.ModalContentPage);
var styles_ModalContentPage = [];
var renderType_ModalContentPage = null;
var _View_ModalContentPage0 = (function (_super) {
    __extends(_View_ModalContentPage0, _super);
    function _View_ModalContentPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ModalContentPage0, renderType_ModalContentPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ModalContentPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import28.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import29.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import30.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_4, 'start', '');
        this._ToolbarItem_4_3 = new import44.ToolbarItem(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._query_Button_4_0 = new import19.QueryList();
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_6, 'ion-button', '');
        this._appEl_6 = new import2.AppElement(6, 4, this, this._el_6);
        var compView_6 = import36.viewFactory_Button0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Button_6_4 = new import15.Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_6), this.renderer);
        this._appEl_6.initComponent(this._Button_6_4, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Close', null);
        compView_6.create(this._Button_6_4, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_10 = new import2.AppElement(10, 2, this, this._el_10);
        var compView_10 = import31.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(10), this._appEl_10);
        this._ToolbarTitle_10_4 = new import13.ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_10.initComponent(this._ToolbarTitle_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, 'Modals', null);
        compView_10.create(this._ToolbarTitle_10_4, [[].concat([this._text_11])], null);
        this._text_12 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [].concat([this._el_4]),
            [],
            [].concat([
                this._text_3,
                this._text_9,
                this._el_10,
                this._text_12
            ])
        ], null);
        this._text_13 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_15, 'padding', '');
        this._appEl_15 = new import2.AppElement(15, null, this, this._el_15);
        var compView_15 = import32.viewFactory_Content0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Content_15_4 = new import14.Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_15), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_15.initComponent(this._Content_15_4, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'div', null);
        this._text_18 = this.renderer.createText(this._el_17, '\n    ', null);
        this._el_19 = this.renderer.createElement(this._el_17, 'h5', null);
        this._text_20 = this.renderer.createText(this._el_19, 'Parameters passed:', null);
        this._text_21 = this.renderer.createText(this._el_17, '\n\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_17, 'pre', null);
        this.renderer.setElementAttribute(this._el_22, 'style', 'background-color: #f8f8f8');
        this._text_23 = this.renderer.createText(this._el_22, '', null);
        this._text_24 = this.renderer.createText(this._el_17, '\n\n  ', null);
        this._text_25 = this.renderer.createText(null, '\n  ', null);
        this._el_26 = this.renderer.createElement(null, 'div', null);
        this._text_27 = this.renderer.createText(this._el_26, '\n    ', null);
        this._el_28 = this.renderer.createElement(this._el_26, 'p', null);
        this._text_29 = this.renderer.createText(this._el_28, 'No parameters passed.', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n  ', null);
        this._text_31 = this.renderer.createText(null, '\n  ', null);
        this._el_32 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_32, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_32, 'full', '');
        this.renderer.setElementAttribute(this._el_32, 'ion-button', '');
        this._appEl_32 = new import2.AppElement(32, 15, this, this._el_32);
        var compView_32 = import36.viewFactory_Button0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Button_32_4 = new import15.Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_32), this.renderer);
        this._appEl_32.initComponent(this._Button_32_4, [], compView_32);
        this._text_33 = this.renderer.createText(null, 'Close Modal', null);
        compView_32.create(this._Button_32_4, [[].concat([this._text_33])], null);
        this._text_34 = this.renderer.createText(null, '\n\n', null);
        compView_15.create(this._Content_15_4, [
            [],
            [].concat([
                this._text_16,
                this._el_17,
                this._text_25,
                this._el_26,
                this._text_31,
                this._el_32,
                this._text_34
            ]),
            []
        ], null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_32, 'click', this.eventHandler(this._handle_click_32_0.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ModalContentPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.Button) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_6_4;
        }
        if (((token === import44.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_4_3;
        }
        if (((token === import13.ToolbarTitle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarTitle_10_4;
        }
        if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Navbar_2_4;
        }
        if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Header_0_3;
        }
        if (((token === import15.Button) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Button_32_4;
        }
        if (((token === import14.Content) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Content_15_4;
        }
        return notFoundResult;
    };
    _View_ModalContentPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_15_4.ngOnInit();
        }
        changed = false;
        var currVal_8 = '';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Button_32_4.full = currVal_8;
            changed = true;
            this._expr_8 = currVal_8;
        }
        var currVal_9 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Button_32_4.color = currVal_9;
            changed = true;
            this._expr_9 = currVal_9;
        }
        if (changed) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_6_4]);
                this._ToolbarItem_4_3._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_6_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_32_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._Content_15_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_15, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = !this.context.myParam;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_17, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, 'selections: [\n  ', this.context.myParam, '\n]');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_23, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.myParam;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementProperty(this._el_26, 'hidden', currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ModalContentPage0.prototype.destroyInternal = function () {
        this._Content_15_4.ngOnDestroy();
    };
    _View_ModalContentPage0.prototype._handle_click_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.dismiss() !== false);
        return (true && pd_0);
    };
    _View_ModalContentPage0.prototype._handle_click_32_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.dismiss() !== false);
        return (true && pd_0);
    };
    return _View_ModalContentPage0;
}(import1.AppView));
export function viewFactory_ModalContentPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ModalContentPage === null)) {
        (renderType_ModalContentPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ModalContentPage, {}));
    }
    return new _View_ModalContentPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import46.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import45.Nav(this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import47.NavControllerBase, null), this.parentInjector.get(import29.App), this.parentInjector.get(import25.Config), this.parentInjector.get(import33.Keyboard), new import26.ElementRef(this._el_0), this.parentInjector.get(import34.NgZone), this.renderer, this.parentInjector.get(import48.ComponentFactoryResolver), this.parentInjector.get(import37.GestureController), this.parentInjector.get(import49.TransitionController), this.parentInjector.get(import50.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import45.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
