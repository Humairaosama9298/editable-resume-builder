interface ResumeData {
    image: string;
    name: string;
    email: string;
    phone: string;
    degree: string;
    institution: string;
    duration: string;
    jobTitle: string;
    company: string;
  }
  
  // Form element ko get karein
  const form: HTMLFormElement = document.getElementById('resume-form') as HTMLFormElement;
  
  // Resume preview element ko get karein
  const resumePreview: HTMLElement = document.getElementById('resume-preview') as HTMLElement;
  
  // Image upload element ko get karein
  const imageUpload: HTMLInputElement = document.getElementById('image-upload') as HTMLInputElement;
  
  // Image element ko get karein
  const imageElement: HTMLElement = document.getElementById('image') as HTMLElement;
  
  // Form submit event listener
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    // Form data ko get karein
    const formData: FormData = new FormData(form);
  
    // Resume data ko initialize karein
    const resumeData: ResumeData = {
      image: 'image.jpg',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      degree: formData.get('degree') as string,
      institution: formData.get('institution') as string,
      duration: formData.get('duration') as string,
      jobTitle: formData.get('job-title') as string,
      company: formData.get('company') as string,
    };
  
    // Image upload event listener
    imageUpload.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file: File = target.files![0];
      const reader: FileReader = new FileReader();
  
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const target = event.target as FileReader | null;
        if (target && target.result) {
          resumeData.image = target.result as string;
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
  