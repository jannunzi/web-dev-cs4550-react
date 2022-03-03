const Labs = () => {
  const loggedIn = false;
  const username = 'alice'
  return(
    <div>
      <h1>Labs</h1>

      {
        loggedIn &&
        <h2>Welcome {username}</h2>
      }
      {
        !loggedIn &&
        <h2>Go away</h2>
      }

    </div>
  )
}

export default Labs;