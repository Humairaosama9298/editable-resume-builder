"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Form element ko get karein
const form = document.getElementById('resume-form');
// Resume preview element ko get karein
const resumePreview = document.getElementById('resume-preview');
// Image upload element ko get karein
const imageUpload = document.getElementById('image-upload');
// Image element ko get karein
const imageElement = document.getElementById('image');
// Form submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form data ko get karein
    const formData = new FormData(form);
    // Resume data ko initialize karein
    const resumeData = {
        image: 'image.jpg',
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        degree: formData.get('degree'),
        institution: formData.get('institution'),
        duration: formData.get('duration'),
        jobTitle: formData.get('job-title'),
        company: formData.get('company'),
    };
    // Image upload event listener
    imageUpload.addEventListener('change', (event) => {
        const target = event.target;
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const target = event.target;
            if (target && target.result) {
                resumeData.image = target.result;
                imageElement.innerHTML = `
            <h2>Profile Picture</h2>
            <img src="${resumeData.image}" alt="${resumeData.name}" width="100" height="100">
          `;
            }
        };
        reader.readAsDataURL(file);
    });
    // Resume HTML ko generate karein
    const resumeHtml = `
      <h1>${resumeData.name}</h1>
      <p>${resumeData.email} | ${resumeData.phone}</p>
      <h2>Education</h2>
      <p>${resumeData.degree} at ${resumeData.institution}, ${resumeData.duration}</p>
      <h2>Work Experience</h2>
      <p>${resumeData.jobTitle} at ${resumeData.company}, ${resumeData.duration}</p>
    `;
    // Resume preview ko update karein
    resumePreview.innerHTML = resumeHtml;
});
