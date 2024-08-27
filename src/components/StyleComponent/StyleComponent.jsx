import React, { Component } from 'react';

import style from './styleComponent.module.css';

export default class StyleComponent extends Component {
  render() {
    return (
      <div>
        {/* css module */}
        <p className={`${style['text-cyber']}`}>Nay mưa to quá</p>
        <p className={`${style['bg-cyber']}`}>Xin chào các bạn</p>


        {/* css inline */}
        <div style={{
          fontSize: '40px' ,
          background: 'red',
          color: 'white'
        }}>Mọi người ăn cơm chưa</div>
        
      </div>
    )
  }
}
