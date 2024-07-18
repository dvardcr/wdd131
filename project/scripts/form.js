// Footer JS
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    yearElement.textContent = `${new Date().getFullYear()}`;
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    lastModifiedElement.classList.add('last-modified');
});

// Form Select 'Countries'
document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country');
    const countries = ['USA', 'Mexico', 'Italy', 'France', 'Japan', 'India', 'Thailand', 'Brazil', 'Morocco', 'Greece'];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    // Submission counter
    const form = document.querySelector('.wf1');
    form.addEventListener('submit', () => {
        let submissionCount = localStorage.getItem('submissionCount');

        if (submissionCount === null) {
            submissionCount = 0;
        } else {
            submissionCount = parseInt(submissionCount, 10);
        }

        submissionCount++;

        localStorage.setItem('submissionCount', submissionCount);
    });
});
