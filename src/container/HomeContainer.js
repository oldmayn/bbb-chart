import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { fetchUserScores } from '../actions/userScores'

class HomeContainer extends Component {
  componentWillMount () {
    this.props.fetchScores()
  }
  render () {
    return <Home {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    userScores: state.userScores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScores: () => {
      dispatch(fetchUserScores())
    }
  }
}

HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)


export default HomeContainer