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
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import12 from 'ionic-angular/components/content/content';
import * as import13 from 'ionic-angular/components/chip/chip';
import * as import14 from 'ionic-angular/components/label/label';
import * as import15 from 'ionic-angular/components/icon/icon';
import * as import16 from 'ionic-angular/components/avatar/avatar';
import * as import17 from 'ionic-angular/components/button/button';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import23 from 'ionic-angular/components/navbar/navbar';
import * as import24 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import30 from 'ionic-angular/components/nav/nav';
import * as import31 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import32 from 'ionic-angular/navigation/nav-controller-base';
import * as import33 from '@angular/core/src/linker/component_factory_resolver';
import * as import34 from 'ionic-angular/gestures/gesture-controller';
import * as import35 from 'ionic-angular/transitions/transition-controller';
import * as import36 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = [];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import20.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import21.viewFactory_Toolbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Toolbar_2_4 = new import10.Toolbar(this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Toolbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import22.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import11.ToolbarTitle(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_4), this.renderer, this._Toolbar_2_4, this.parentInjector.get(import23.Navbar, null));
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Chips', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Toolbar_2_4, [
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
        this.renderer.setElementAttribute(this._el_9, 'padding', '');
        this.renderer.setElementAttribute(this._el_9, 'style', 'text-align:center');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import24.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import12.Content(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import25.App), this.parentInjector.get(import26.Keyboard), this.parentInjector.get(import27.NgZone), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import28.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'h2', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Text Chips', null);
        this._text_13 = this.renderer.createText(null, '\n\n  ', null);
        this._el_14 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_14_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_14), this.renderer);
        this._text_15 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'ion-label', null);
        this._Label_16_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_16), this.renderer, null, null, null, null);
        this._text_17 = this.renderer.createText(this._el_16, 'Default', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n  ', null);
        this._text_19 = this.renderer.createText(null, '\n\n  ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_20_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_20), this.renderer);
        this._text_21 = this.renderer.createText(this._el_20, '\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_22, 'color', 'secondary');
        this._Label_22_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_22), this.renderer, null, null, null, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Secondary Label', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n  ', null);
        this._text_25 = this.renderer.createText(null, '\n\n  ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_26_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_26), this.renderer);
        this._text_27 = this.renderer.createText(this._el_26, '\n    ', null);
        this._el_28 = this.renderer.createElement(this._el_26, 'ion-label', null);
        this._Label_28_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_28), this.renderer, null, null, null, null);
        this._text_29 = this.renderer.createText(this._el_28, 'Another With Longer Text', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n  ', null);
        this._text_31 = this.renderer.createText(null, '\n\n  ', null);
        this._el_32 = this.renderer.createElement(null, 'h2', null);
        this._text_33 = this.renderer.createText(this._el_32, 'Color Chips', null);
        this._text_34 = this.renderer.createText(null, '\n\n  ', null);
        this._el_35 = this.renderer.createElement(null, 'ion-chip', null);
        this.renderer.setElementAttribute(this._el_35, 'color', 'primary');
        this._Chip_35_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_35), this.renderer);
        this._text_36 = this.renderer.createText(this._el_35, '\n    ', null);
        this._el_37 = this.renderer.createElement(this._el_35, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_37, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_37, 'name', 'heart');
        this.renderer.setElementAttribute(this._el_37, 'role', 'img');
        this._Icon_37_3 = new import15.Icon(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_37), this.renderer);
        this._text_38 = this.renderer.createText(this._el_35, '\n    ', null);
        this._el_39 = this.renderer.createElement(this._el_35, 'ion-label', null);
        this._Label_39_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_39), this.renderer, null, null, null, null);
        this._text_40 = this.renderer.createText(this._el_39, 'Primary', null);
        this._text_41 = this.renderer.createText(this._el_35, '\n  ', null);
        this._text_42 = this.renderer.createText(null, '\n\n  ', null);
        this._el_43 = this.renderer.createElement(null, 'ion-chip', null);
        this.renderer.setElementAttribute(this._el_43, 'color', 'secondary');
        this._Chip_43_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_43), this.renderer);
        this._text_44 = this.renderer.createText(this._el_43, '\n    ', null);
        this._el_45 = this.renderer.createElement(this._el_43, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_45, 'color', 'dark');
        this._Label_45_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_45), this.renderer, null, null, null, null);
        this._text_46 = this.renderer.createText(this._el_45, 'Secondary w/ Dark label', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n  ', null);
        this._text_48 = this.renderer.createText(null, '\n\n  ', null);
        this._el_49 = this.renderer.createElement(null, 'ion-chip', null);
        this.renderer.setElementAttribute(this._el_49, 'color', 'danger');
        this._Chip_49_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_49), this.renderer);
        this._text_50 = this.renderer.createText(this._el_49, '\n    ', null);
        this._el_51 = this.renderer.createElement(this._el_49, 'ion-label', null);
        this._Label_51_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_51), this.renderer, null, null, null, null);
        this._text_52 = this.renderer.createText(this._el_51, 'Danger', null);
        this._text_53 = this.renderer.createText(this._el_49, '\n  ', null);
        this._text_54 = this.renderer.createText(null, '\n\n  ', null);
        this._el_55 = this.renderer.createElement(null, 'h2', null);
        this._text_56 = this.renderer.createText(this._el_55, 'Icon Chips', null);
        this._text_57 = this.renderer.createText(null, '\n\n  ', null);
        this._el_58 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_58_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_58), this.renderer);
        this._text_59 = this.renderer.createText(this._el_58, '\n    ', null);
        this._el_60 = this.renderer.createElement(this._el_58, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_60, 'name', 'pin');
        this.renderer.setElementAttribute(this._el_60, 'role', 'img');
        this._Icon_60_3 = new import15.Icon(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_60), this.renderer);
        this._text_61 = this.renderer.createText(this._el_58, '\n   ', null);
        this._el_62 = this.renderer.createElement(this._el_58, 'ion-label', null);
        this._Label_62_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_62), this.renderer, null, null, null, null);
        this._text_63 = this.renderer.createText(this._el_62, 'Default', null);
        this._text_64 = this.renderer.createText(this._el_58, '\n  ', null);
        this._text_65 = this.renderer.createText(null, '\n\n  ', null);
        this._el_66 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_66_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_66), this.renderer);
        this._text_67 = this.renderer.createText(this._el_66, '\n    ', null);
        this._el_68 = this.renderer.createElement(this._el_66, 'ion-label', null);
        this._Label_68_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_68), this.renderer, null, null, null, null);
        this._text_69 = this.renderer.createText(this._el_68, 'Secondary', null);
        this._text_70 = this.renderer.createText(this._el_66, '\n    ', null);
        this._el_71 = this.renderer.createElement(this._el_66, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_71, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_71, 'name', 'pin');
        this.renderer.setElementAttribute(this._el_71, 'role', 'img');
        this._Icon_71_3 = new import15.Icon(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_71), this.renderer);
        this._text_72 = this.renderer.createText(this._el_66, '\n  ', null);
        this._text_73 = this.renderer.createText(null, '\n\n  ', null);
        this._el_74 = this.renderer.createElement(null, 'h2', null);
        this._text_75 = this.renderer.createText(this._el_74, 'Avatar Chips', null);
        this._text_76 = this.renderer.createText(null, '\n\n  ', null);
        this._el_77 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_77_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_77), this.renderer);
        this._text_78 = this.renderer.createText(this._el_77, '\n    ', null);
        this._el_79 = this.renderer.createElement(this._el_77, 'ion-avatar', null);
        this._Avatar_79_3 = new import16.Avatar();
        this._text_80 = this.renderer.createText(this._el_79, '\n      ', null);
        this._el_81 = this.renderer.createElement(this._el_79, 'img', null);
        this.renderer.setElementAttribute(this._el_81, 'src', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y');
        this._text_82 = this.renderer.createText(this._el_79, '\n    ', null);
        this._text_83 = this.renderer.createText(this._el_77, '\n    ', null);
        this._el_84 = this.renderer.createElement(this._el_77, 'ion-label', null);
        this._Label_84_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_84), this.renderer, null, null, null, null);
        this._text_85 = this.renderer.createText(this._el_84, 'Default', null);
        this._text_86 = this.renderer.createText(this._el_77, '\n  ', null);
        this._text_87 = this.renderer.createText(null, '\n\n  ', null);
        this._el_88 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_88_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_88), this.renderer);
        this._text_89 = this.renderer.createText(this._el_88, '\n    ', null);
        this._el_90 = this.renderer.createElement(this._el_88, 'ion-label', null);
        this._Label_90_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_90), this.renderer, null, null, null, null);
        this._text_91 = this.renderer.createText(this._el_90, 'Right Avatar', null);
        this._text_92 = this.renderer.createText(this._el_88, '\n    ', null);
        this._el_93 = this.renderer.createElement(this._el_88, 'ion-avatar', null);
        this._Avatar_93_3 = new import16.Avatar();
        this._text_94 = this.renderer.createText(this._el_93, '\n      ', null);
        this._el_95 = this.renderer.createElement(this._el_93, 'img', null);
        this.renderer.setElementAttribute(this._el_95, 'src', 'https://gravatar.com/avatar/d249a09fecac4da036d26c5002af2c94?d=identicon&f=y');
        this._text_96 = this.renderer.createText(this._el_93, '\n    ', null);
        this._text_97 = this.renderer.createText(this._el_88, '\n  ', null);
        this._text_98 = this.renderer.createText(null, '\n\n  ', null);
        this._el_99 = this.renderer.createElement(null, 'h2', null);
        this._text_100 = this.renderer.createText(this._el_99, 'Delete Chips', null);
        this._text_101 = this.renderer.createText(null, '\n\n  ', null);
        this._el_102 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_102_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_102), this.renderer);
        this._text_103 = this.renderer.createText(this._el_102, '\n    ', null);
        this._el_104 = this.renderer.createElement(this._el_102, 'ion-label', null);
        this._Label_104_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_104), this.renderer, null, null, null, null);
        this._text_105 = this.renderer.createText(this._el_104, 'Default', null);
        this._text_106 = this.renderer.createText(this._el_102, '\n    ', null);
        this._el_107 = this.renderer.createElement(this._el_102, 'button', null);
        this.renderer.setElementAttribute(this._el_107, 'clear', '');
        this.renderer.setElementAttribute(this._el_107, 'ion-button', '');
        this._appEl_107 = new import2.AppElement(107, 102, this, this._el_107);
        var compView_107 = import29.viewFactory_Button0(this.viewUtils, this.injector(107), this._appEl_107);
        this._Button_107_4 = new import17.Button(null, '', this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_107), this.renderer);
        this._appEl_107.initComponent(this._Button_107_4, [], compView_107);
        this._text_108 = this.renderer.createText(null, '\n      ', null);
        this._el_109 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_109, 'name', 'close-circle');
        this.renderer.setElementAttribute(this._el_109, 'role', 'img');
        this._Icon_109_3 = new import15.Icon(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_109), this.renderer);
        this._text_110 = this.renderer.createText(null, '\n    ', null);
        compView_107.create(this._Button_107_4, [[].concat([
                this._text_108,
                this._el_109,
                this._text_110
            ])], null);
        this._text_111 = this.renderer.createText(this._el_102, '\n  ', null);
        this._text_112 = this.renderer.createText(null, '\n\n  ', null);
        this._el_113 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_113_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_113), this.renderer);
        this._text_114 = this.renderer.createText(this._el_113, '\n    ', null);
        this._el_115 = this.renderer.createElement(this._el_113, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_115, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_115, 'name', 'pin');
        this.renderer.setElementAttribute(this._el_115, 'role', 'img');
        this._Icon_115_3 = new import15.Icon(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_115), this.renderer);
        this._text_116 = this.renderer.createText(this._el_113, '\n    ', null);
        this._el_117 = this.renderer.createElement(this._el_113, 'ion-label', null);
        this._Label_117_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_117), this.renderer, null, null, null, null);
        this._text_118 = this.renderer.createText(this._el_117, 'With Icon', null);
        this._text_119 = this.renderer.createText(this._el_113, '\n    ', null);
        this._el_120 = this.renderer.createElement(this._el_113, 'button', null);
        this.renderer.setElementAttribute(this._el_120, 'clear', '');
        this.renderer.setElementAttribute(this._el_120, 'ion-button', '');
        this._appEl_120 = new import2.AppElement(120, 113, this, this._el_120);
        var compView_120 = import29.viewFactory_Button0(this.viewUtils, this.injector(120), this._appEl_120);
        this._Button_120_4 = new import17.Button(null, '', this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_120), this.renderer);
        this._appEl_120.initComponent(this._Button_120_4, [], compView_120);
        this._text_121 = this.renderer.createText(null, '\n      ', null);
        this._el_122 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_122, 'name', 'close-circle');
        this.renderer.setElementAttribute(this._el_122, 'role', 'img');
        this._Icon_122_3 = new import15.Icon(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_122), this.renderer);
        this._text_123 = this.renderer.createText(null, '\n    ', null);
        compView_120.create(this._Button_120_4, [[].concat([
                this._text_121,
                this._el_122,
                this._text_123
            ])], null);
        this._text_124 = this.renderer.createText(this._el_113, '\n  ', null);
        this._text_125 = this.renderer.createText(null, '\n\n  ', null);
        this._el_126 = this.renderer.createElement(null, 'ion-chip', null);
        this._Chip_126_3 = new import13.Chip(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_126), this.renderer);
        this._text_127 = this.renderer.createText(this._el_126, '\n    ', null);
        this._el_128 = this.renderer.createElement(this._el_126, 'ion-avatar', null);
        this._Avatar_128_3 = new import16.Avatar();
        this._text_129 = this.renderer.createText(this._el_128, '\n      ', null);
        this._el_130 = this.renderer.createElement(this._el_128, 'img', null);
        this.renderer.setElementAttribute(this._el_130, 'src', 'https://gravatar.com/avatar/83b4748bf7e821165ecccd4c090d96e1?d=identicon&f=y');
        this._text_131 = this.renderer.createText(this._el_128, '\n    ', null);
        this._text_132 = this.renderer.createText(this._el_126, '\n    ', null);
        this._el_133 = this.renderer.createElement(this._el_126, 'ion-label', null);
        this._Label_133_3 = new import14.Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_133), this.renderer, null, null, null, null);
        this._text_134 = this.renderer.createText(this._el_133, 'With Avatar', null);
        this._text_135 = this.renderer.createText(this._el_126, '\n    ', null);
        this._el_136 = this.renderer.createElement(this._el_126, 'button', null);
        this.renderer.setElementAttribute(this._el_136, 'clear', '');
        this.renderer.setElementAttribute(this._el_136, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_136, 'ion-button', '');
        this._appEl_136 = new import2.AppElement(136, 126, this, this._el_136);
        var compView_136 = import29.viewFactory_Button0(this.viewUtils, this.injector(136), this._appEl_136);
        this._Button_136_4 = new import17.Button(null, '', this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_136), this.renderer);
        this._appEl_136.initComponent(this._Button_136_4, [], compView_136);
        this._text_137 = this.renderer.createText(null, '\n      ', null);
        this._el_138 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_138, 'name', 'close-circle');
        this.renderer.setElementAttribute(this._el_138, 'role', 'img');
        this._Icon_138_3 = new import15.Icon(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_138), this.renderer);
        this._text_139 = this.renderer.createText(null, '\n    ', null);
        compView_136.create(this._Button_136_4, [[].concat([
                this._text_137,
                this._el_138,
                this._text_139
            ])], null);
        this._text_140 = this.renderer.createText(this._el_126, '\n  ', null);
        this._text_141 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_13,
                this._el_14,
                this._text_19,
                this._el_20,
                this._text_25,
                this._el_26,
                this._text_31,
                this._el_32,
                this._text_34,
                this._el_35,
                this._text_42,
                this._el_43,
                this._text_48,
                this._el_49,
                this._text_54,
                this._el_55,
                this._text_57,
                this._el_58,
                this._text_65,
                this._el_66,
                this._text_73,
                this._el_74,
                this._text_76,
                this._el_77,
                this._text_87,
                this._el_88,
                this._text_98,
                this._el_99,
                this._text_101,
                this._el_102,
                this._text_112,
                this._el_113,
                this._text_125,
                this._el_126,
                this._text_141
            ]),
            []
        ], null);
        this._text_142 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_107, 'click', this.eventHandler(this._handle_click_107_0.bind(this)));
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_120, 'click', this.eventHandler(this._handle_click_120_0.bind(this)));
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_136, 'click', this.eventHandler(this._handle_click_136_0.bind(this)));
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
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
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
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
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._text_86,
            this._text_87,
            this._el_88,
            this._text_89,
            this._el_90,
            this._text_91,
            this._text_92,
            this._el_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._text_97,
            this._text_98,
            this._el_99,
            this._text_100,
            this._text_101,
            this._el_102,
            this._text_103,
            this._el_104,
            this._text_105,
            this._text_106,
            this._el_107,
            this._text_108,
            this._el_109,
            this._text_110,
            this._text_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._el_115,
            this._text_116,
            this._el_117,
            this._text_118,
            this._text_119,
            this._el_120,
            this._text_121,
            this._el_122,
            this._text_123,
            this._text_124,
            this._text_125,
            this._el_126,
            this._text_127,
            this._el_128,
            this._text_129,
            this._el_130,
            this._text_131,
            this._text_132,
            this._el_133,
            this._text_134,
            this._text_135,
            this._el_136,
            this._text_137,
            this._el_138,
            this._text_139,
            this._text_140,
            this._text_141,
            this._text_142
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import10.Toolbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Toolbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import14.Label) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Label_16_3;
        }
        if (((token === import13.Chip) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Chip_14_3;
        }
        if (((token === import14.Label) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Label_22_3;
        }
        if (((token === import13.Chip) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Chip_20_3;
        }
        if (((token === import14.Label) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Label_28_3;
        }
        if (((token === import13.Chip) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Chip_26_3;
        }
        if (((token === import15.Icon) && (37 === requestNodeIndex))) {
            return this._Icon_37_3;
        }
        if (((token === import14.Label) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Label_39_3;
        }
        if (((token === import13.Chip) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._Chip_35_3;
        }
        if (((token === import14.Label) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Label_45_3;
        }
        if (((token === import13.Chip) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Chip_43_3;
        }
        if (((token === import14.Label) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._Label_51_3;
        }
        if (((token === import13.Chip) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Chip_49_3;
        }
        if (((token === import15.Icon) && (60 === requestNodeIndex))) {
            return this._Icon_60_3;
        }
        if (((token === import14.Label) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._Label_62_3;
        }
        if (((token === import13.Chip) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._Chip_58_3;
        }
        if (((token === import14.Label) && ((68 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Label_68_3;
        }
        if (((token === import15.Icon) && (71 === requestNodeIndex))) {
            return this._Icon_71_3;
        }
        if (((token === import13.Chip) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._Chip_66_3;
        }
        if (((token === import16.Avatar) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 82)))) {
            return this._Avatar_79_3;
        }
        if (((token === import14.Label) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 85)))) {
            return this._Label_84_3;
        }
        if (((token === import13.Chip) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Chip_77_3;
        }
        if (((token === import14.Label) && ((90 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._Label_90_3;
        }
        if (((token === import16.Avatar) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._Avatar_93_3;
        }
        if (((token === import13.Chip) && ((88 <= requestNodeIndex) && (requestNodeIndex <= 97)))) {
            return this._Chip_88_3;
        }
        if (((token === import14.Label) && ((104 <= requestNodeIndex) && (requestNodeIndex <= 105)))) {
            return this._Label_104_3;
        }
        if (((token === import15.Icon) && (109 === requestNodeIndex))) {
            return this._Icon_109_3;
        }
        if (((token === import17.Button) && ((107 <= requestNodeIndex) && (requestNodeIndex <= 110)))) {
            return this._Button_107_4;
        }
        if (((token === import13.Chip) && ((102 <= requestNodeIndex) && (requestNodeIndex <= 111)))) {
            return this._Chip_102_3;
        }
        if (((token === import15.Icon) && (115 === requestNodeIndex))) {
            return this._Icon_115_3;
        }
        if (((token === import14.Label) && ((117 <= requestNodeIndex) && (requestNodeIndex <= 118)))) {
            return this._Label_117_3;
        }
        if (((token === import15.Icon) && (122 === requestNodeIndex))) {
            return this._Icon_122_3;
        }
        if (((token === import17.Button) && ((120 <= requestNodeIndex) && (requestNodeIndex <= 123)))) {
            return this._Button_120_4;
        }
        if (((token === import13.Chip) && ((113 <= requestNodeIndex) && (requestNodeIndex <= 124)))) {
            return this._Chip_113_3;
        }
        if (((token === import16.Avatar) && ((128 <= requestNodeIndex) && (requestNodeIndex <= 131)))) {
            return this._Avatar_128_3;
        }
        if (((token === import14.Label) && ((133 <= requestNodeIndex) && (requestNodeIndex <= 134)))) {
            return this._Label_133_3;
        }
        if (((token === import15.Icon) && (138 === requestNodeIndex))) {
            return this._Icon_138_3;
        }
        if (((token === import17.Button) && ((136 <= requestNodeIndex) && (requestNodeIndex <= 139)))) {
            return this._Button_136_4;
        }
        if (((token === import13.Chip) && ((126 <= requestNodeIndex) && (requestNodeIndex <= 140)))) {
            return this._Chip_126_3;
        }
        if (((token === import12.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 141)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        var currVal_2 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Label_22_3.color = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Chip_35_3.color = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Icon_37_3.color = currVal_4;
            this._expr_4 = currVal_4;
        }
        var currVal_5 = 'heart';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_37_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_7 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Chip_43_3.color = currVal_7;
            this._expr_7 = currVal_7;
        }
        var currVal_8 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Label_45_3.color = currVal_8;
            this._expr_8 = currVal_8;
        }
        var currVal_9 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Chip_49_3.color = currVal_9;
            this._expr_9 = currVal_9;
        }
        var currVal_10 = 'pin';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Icon_60_3.name = currVal_10;
            this._expr_10 = currVal_10;
        }
        var currVal_12 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Icon_71_3.color = currVal_12;
            this._expr_12 = currVal_12;
        }
        var currVal_13 = 'pin';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Icon_71_3.name = currVal_13;
            this._expr_13 = currVal_13;
        }
        changed = false;
        var currVal_16 = '';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._Button_107_4.clear = currVal_16;
            changed = true;
            this._expr_16 = currVal_16;
        }
        if (changed) {
            this._appEl_107.componentView.markAsCheckOnce();
        }
        var currVal_17 = 'close-circle';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._Icon_109_3.name = currVal_17;
            this._expr_17 = currVal_17;
        }
        var currVal_19 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Icon_115_3.color = currVal_19;
            this._expr_19 = currVal_19;
        }
        var currVal_20 = 'pin';
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._Icon_115_3.name = currVal_20;
            this._expr_20 = currVal_20;
        }
        changed = false;
        var currVal_23 = '';
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._Button_120_4.clear = currVal_23;
            changed = true;
            this._expr_23 = currVal_23;
        }
        if (changed) {
            this._appEl_120.componentView.markAsCheckOnce();
        }
        var currVal_24 = 'close-circle';
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._Icon_122_3.name = currVal_24;
            this._expr_24 = currVal_24;
        }
        changed = false;
        var currVal_27 = '';
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this._Button_136_4.clear = currVal_27;
            changed = true;
            this._expr_27 = currVal_27;
        }
        var currVal_28 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this._Button_136_4.color = currVal_28;
            changed = true;
            this._expr_28 = currVal_28;
        }
        if (changed) {
            this._appEl_136.componentView.markAsCheckOnce();
        }
        var currVal_29 = 'close-circle';
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this._Icon_138_3.name = currVal_29;
            this._expr_29 = currVal_29;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_107_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_120_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_136_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Toolbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_6 = this._Icon_37_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_37, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_11 = this._Icon_60_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_60, 'hide', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_14 = this._Icon_71_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_71, 'hide', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_18 = this._Icon_109_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_109, 'hide', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_21 = this._Icon_115_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_115, 'hide', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_25 = this._Icon_122_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_122, 'hide', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_30 = this._Icon_138_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_138, 'hide', currVal_30);
            this._expr_30 = currVal_30;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_37_3.ngOnDestroy();
        this._Icon_60_3.ngOnDestroy();
        this._Icon_71_3.ngOnDestroy();
        this._Icon_109_3.ngOnDestroy();
        this._Icon_115_3.ngOnDestroy();
        this._Icon_122_3.ngOnDestroy();
        this._Icon_138_3.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_107_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.delete(this._el_102) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_120_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.delete(this._el_113) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_136_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.delete(this._el_126) !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
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
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
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
        var compView_0 = import31.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import30.Nav(this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import32.NavControllerBase, null), this.parentInjector.get(import25.App), this.parentInjector.get(import18.Config), this.parentInjector.get(import26.Keyboard), new import19.ElementRef(this._el_0), this.parentInjector.get(import27.NgZone), this.renderer, this.parentInjector.get(import33.ComponentFactoryResolver), this.parentInjector.get(import34.GestureController), this.parentInjector.get(import35.TransitionController), this.parentInjector.get(import36.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.Nav) && (0 === requestNodeIndex))) {
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
