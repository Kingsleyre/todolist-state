import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoCategory from './TodoCategory';

import logo from './images/logo.svg';

import './App.css';

const App = () => {

  

  return (
    <>
      <Header className='top-header' id='header' title='This is the header'>
        <h1>Kingsley's TodoList 🚀🐨</h1>
        <img alt='' src={logo} width={55} height={55} />
      </Header>
      <TodoCategory title='Morning' />
      <TodoCategory title='Afternoon' />
      <TodoCategory title='Tonight' />
      
      <Footer />
    </>
  );
}

export default App;
