fetch(
  // Explain each parameter in comments below.
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
  // per_page=10 - number of results per page (10 results per page)
  // state=open - indicates the state of the issue (state is open)
  // sort=created - what to sort the results by (sort by date created)
  // direction=desc - direction to sort results by (descending)
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
