import React from 'react'
import app from 'xadmin'
import 'antd/dist/antd.min.css'
import 'ant-design-pro/dist/ant-design-pro.min.css'
import routers, { Main, App, Page, Loading, Icon } from './layout'

import { Menu, MenuItem } from './components/Menu'

import form from './form'
import model from './model'
import filter from './filter'

export default {
  name: 'xadmin.ui.antd',
  components: {
    Main, App, Page, Loading, Icon,
    Menu, 'Menu.Item': MenuItem,
    ...form.components,
    ...model.components,
    ...filter.components
  },
  routers,
  form_fields: {
    ...form.form_fields,
    ...filter.form_fields
  }
}