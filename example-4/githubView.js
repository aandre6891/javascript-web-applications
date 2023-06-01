class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');
    
    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }
  
  display(repoData) {
    const repoName = document.querySelector('#repo-name');
    const repoDescription = document.querySelector('#repo-description');
    const repoImage = document.querySelector('#repo-image');
    repoName.innerText = repoData.full_name;
    repoDescription.innerText = repoData.description;
    repoImage.setAttribute('src', repoData.organization.avatar_url)
  }
}

module.exports = GithubView;
