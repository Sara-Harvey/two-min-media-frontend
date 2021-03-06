export function deleteStory(id, story) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`https://two-min-media-api.herokuapp.com/stories/${story.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(story)
    })
      .then(response => response.json())
      .then(item => dispatch({ type: 'DELETE_STORY', payload: story})
      )
  }
}