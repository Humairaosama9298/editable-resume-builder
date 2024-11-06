"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Form element ko get karein
var form = document.getElementById('resume-form');
// Resume preview element ko get karein
var resumePreview = document.getElementById('resume-preview');
// Image upload element ko get karein
var imageUpload = document.getElementById('image-upload');
// Image element ko get karein
var imageElement = document.getElementById('image');
// Form submit event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Form data ko get karein
    var formData = new FormData(form);
    // Resume data ko initialize karein
    var resumeData = {
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
    imageUpload.addEventListener('change', function (event) {
        var target = event.target;
        var file = target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var target = event.target;
            if (target && target.result) {
                resumeData.image = target.result;
                imageElement.innerHTML = "\n            <h2>Profile Picture</h2>\n            <img src=\"".concat(resumeData.image, "\" alt=\"").concat(resumeData.name, "\" width=\"100\" height=\"100\">\n          ");
            }
        };
        reader.readAsDataURL(file);
    });
    // Resume HTML ko generate karein
    var resumeHtml = "\n      <h1>".concat(resumeData.name, "</h1>\n      <p>").concat(resumeData.email, " | ").concat(resumeData.phone, "</p>\n      <h2>Education</h2>\n      <p>").concat(resumeData.degree, " at ").concat(resumeData.institution, ", ").concat(resumeData.duration, "</p>\n      <h2>Work Experience</h2>\n      <p>").concat(resumeData.jobTitle, " at ").concat(resumeData.company, ", ").concat(resumeData.duration, "</p>\n    ");
    // Resume preview ko update karein
    resumePreview.innerHTML = resumeHtml;
});
