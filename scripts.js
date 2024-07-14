document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.github.com/users/SarthakTechie/repos')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('github-projects');
            projectsContainer.innerHTML = '';

            // Filter out the project you want to ignore
            const filteredProjects = data.filter(repo => repo.name !== 'SarthakTechie');
            
            filteredProjects.forEach(repo => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                const projectName = document.createElement('h3');
                projectName.textContent = repo.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = repo.description;

                const projectLink = document.createElement('a');
                projectLink.href = repo.html_url;
                projectLink.textContent = 'View on GitHub';
                projectLink.target = '_blank';

                projectElement.appendChild(projectName);
                projectElement.appendChild(projectDescription);
                projectElement.appendChild(projectLink);

                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => {
            const projectsContainer = document.getElementById('github-projects');
            projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
        });
});
