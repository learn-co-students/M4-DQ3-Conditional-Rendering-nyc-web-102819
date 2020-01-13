import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: "profile"
  }

  changeSelected = (selected) => {
    this.setState({
     selected: selected
    })
  }


  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should have state? 
    Which component should have methods to control state? Where should these methods be called?
    */

    let detailsToDisplay = null

    this.state.selected === 'profile' && (detailsToDisplay = Profile())
    this.state.selected === 'photo' && (detailsToDisplay = Photos())
    this.state.selected === 'cocktail' && (detailsToDisplay = Cocktails())
    this.state.selected === 'pokemon' && (detailsToDisplay = < Pokemon />)

    return (
      <div>
        <MenuBar callback={this.changeSelected} selected={this.state.selected}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
