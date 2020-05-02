import React, { createContext, Component } from "react";

export const LanguageContext = React.createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "portuguese"
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({language: e.target.value})
  }

  render() {
    return (
      <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}


// On functional components, useContext can be used to shorten the code

// export const withLanguageContext = Component => props => (
//   <LanguageContext.Consumer>
//     {value => <Component languageContext={value} {...props} /> }
//   </LanguageContext.Consumer>
// );