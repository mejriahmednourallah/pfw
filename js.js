window.addEventListener('load', (event) => {
    const timeline = document.getElementById('experience-timeline');


    const experiences = [
        { date: '2023 - 2024', description: ' 3eme Annee Esprit 3B' },
        { date: '2023 - 2024', description: '1ere anne ensit Gc' },
        { date: '2024 - 2025', description: '2 eme Annee et 4eme Anne ensit et esprit ' }

    ];


    function createTimeline() {
        experiences.forEach((experience) => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            timelineItem.innerHTML = `
                <div class="date">${experience.date}</div>
                <div class="description">${experience.description}</div>
            `;
            timeline.appendChild(timelineItem);
        });
    }


    createTimeline();
});

