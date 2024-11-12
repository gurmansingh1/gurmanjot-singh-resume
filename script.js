document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('.projects');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Projects';
    toggleButton.style.marginTop = '20px';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = '#007BFF';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    
    toggleButton.addEventListener('click', () => {
        if (projectsSection.style.display === 'none') {
            projectsSection.style.display = 'block';
        } else {
            projectsSection.style.display = 'none';
        }
    });

    document.querySelector('.projects').appendChild(toggleButton);
});