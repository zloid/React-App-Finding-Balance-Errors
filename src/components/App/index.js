import React from 'react'
import GithubCorner from 'react-github-corner'
//own
import Layout from 'components/Layout'
import Aa from 'features/delll'

const App = () => {
  return (
    <>
      <Aa dataFromTextareaOne="asfdsdfa" />
      <Layout />
      <GithubCorner href="https://github.com/zloid/React-App-Finding-Balance-Errors" />
    </>
  )
}

export default App
