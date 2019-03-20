import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Me</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;





















// import { NavLink, Switch, Route } from 'react-router-dom';

// import React from 'react';
// import './App.css';

// const App = () => (
//   <div className='app'>
//     <h1>React Router Demo</h1>
//     <Navigation />
//     <Main />
//   </div>
// );

// const Navigation = () => (
//   <nav>
//     <ul>
//       <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
//       <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
//       <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
    
//     </ul>
//   </nav>
// );
// const Home = () => (
//   <div className='home'>
//     <h1>Welcome to my portfolio website</h1>
//     <p>Am a software developer and leaner at <a href="#"> Andela in Tanzania</a>.</p>
//   </div>
//   );

// const About = () => (
//   <div className='about'>
//     <h1>About Me</h1>
//     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
//     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
//   </div>
// );

// const Contact = () => (
//   <div className='contact'>
//     <h1>Contact Me</h1>
//     <p>You can reach me via email: <strong>hello@example.com</strong></p>
//   </div>
// );

// const Main = () => (
//   <Switch>
//     <Route exact path='/' component={Home}></Route>
//     <Route exact path='/about' component={About}></Route>
//     <Route exact path='/contact' component={Contact}></Route>
//   </Switch>
// );
// export default App;