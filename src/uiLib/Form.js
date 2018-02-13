import store from "../store"
import ComponentsLib from '../uiLib/index.js'
export default class Form {
  constructor(id) {
    this.uid=id
    this.name = 'Form'
    this.children=[]
    this.template = '<el-form{attr}>{innerHTML}</el-form>'
    this.attr = {
      labelWidth: {
        type: 'text',
        value: '80px',
        name:'text'
      },
    }
  }

  render(createElement){
    const context = this;
    return createElement(
      'el-form',
      {
      props: {
        labelWidth: this.attr.labelWidth.value,
        // icon: {
        //   type: String,
        //   default: ''
        // },
        // nativeType: {
        //   type: String,
        //   default: 'button'
        // },
        // loading: Boolean,
        // disabled: Boolean,
        // plain: Boolean,
        // autofocus: Boolean,
        // round: {
        //   type:Boolean,
        //   default:false
        // }
      },
        'class': {
          'ui-item-box': true
        },
        directives: [{
          name: 'dropable',
          value: context
        },{
        name:'editable'
        }],
      domProps: {
        componentData: this,
        // innerHTML: this.attr.name.value
      },
      nativeOn: {
        click: function (e) {
          store.commit('setEditingAttr', e)
        },
        // drop:function (e) {
        //   console.log(e);
        //   let uiName = e.dataTransfer.getData("uiName");
        //   // let uid = guid()
        //
        //   console.log(uiName);
        //   let ex = new ComponentsLib[uiName]();
        //   context.children.push(ex);
        //   // this.$store.commit('setComponents',this.components)
        //   // this.components.push(new ComponentsLib[name](uid));
        //   e.preventDefault();
        //   e.stopPropagation()
        // },
      },
    },
      this.children.map(function (child) {
        return child.render(createElement)
      })
      )
  }
}
