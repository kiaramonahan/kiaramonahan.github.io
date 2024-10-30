// Skill filtering logic
document.querySelectorAll('.filter-skill').forEach(skill => {
  skill.addEventListener('click', () => {
    skill.classList.toggle('selected'); // Toggle selected class

    // Gather all selected skills
    const selectedSkills = Array.from(document.querySelectorAll('.filter-skill.selected'))
      .map(skill => skill.textContent.trim());

    // Show or hide each project card based on selected skills
    document.querySelectorAll('.project-card').forEach(card => {
      const projectSkills = card.dataset.skill.split(",").map(s => s.trim());
      const matchesAllSkills = selectedSkills.every(selectedSkill => 
        projectSkills.includes(selectedSkill)
      );

      // Display only if project matches all selected skills, or show all if none selected
      card.style.display = matchesAllSkills || selectedSkills.length === 0 ? 'block' : 'none';
    });
  });
});

// Modal functionality
const modal = document.querySelector('.modal');
const modalContent = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');
const viewMoreButtons = document.querySelectorAll('.view-more');

viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const project = button.getAttribute('data-project');
    const pdfPath = button.getAttribute('data-pdf');

    // Clear previous content and reset modal content class
    modalContent.innerHTML = '';
    modalContent.classList.remove('pdf-viewer'); // Remove PDF-specific styling

    if (pdfPath) {
      // Display PDF content with wider modal
      modalContent.classList.add('pdf-viewer');
      const iframe = document.createElement('iframe');
      iframe.src = pdfPath;
      iframe.style.width = '100%';
      iframe.style.height = '80vh';
      iframe.style.border = 'none';
      modalContent.appendChild(iframe);
    } else {
      // Load specific content based on project
      switch (project) {
        case 'coralsense':
          modalContent.innerHTML = `
            <img src="images/coral_no_background.png" alt="Detailed Project Image">
            <p>This project is ongoing, but I'd be happy to discuss progress and details with anyone interested. I plan on adding a link to our website once it goes live.</p>
          `;
          break;

        case 'med-abbrev-mystery':
          modalContent.innerHTML = `
            <img src="images/med-abbrev-mystery_image.png" alt="Project Image">
            <h2>Med-Abbrev-Mystery</h2>
            <p><b>Abstract:</b> Electronic Health Records (EHRs) are a critical data source for Natural Language Processing (NLP) applications in healthcare. Despite their utility, the widespread use of abbreviations in EHRs can lead to misinterpretations and reduced clarity, posing challenges for clinical decision making. This study aims to improve the interpretation of medical abbreviations in clinical texts by fine-tuning Bidirectional Encoder Representations from Transformers (BERT) models using the Medical Dataset for Abbreviation Disambiguation for Natural Language Understanding (MeDAL), crafted by Wen et al. (2020) containing 5,886 abbreviations with approximately 4 expansions on average for each. The abbreviations come from 14,393,619 medical abstracts on PubMed. The fine-tuned BERT models were applied to two medical tasks: mortality prediction and diagnosis prediction. We hypothesize that fine-tuning on medical abbre- viations will enhance the models’ ability to process clinical text and improve task performance, and that performance improvements can be ob- tained by fine-tuning Large Language Models (LLMs) on the abbreviation disambiguation task. Results were mixed with some indication that fine-tuning BERT models on abbreviation disambiguation does offer modest performance improvements on downstream mortality and diagnosis prediction tasks in line with those observed in Wen et al. (2020) but we ultimately conclude that there is more exploration which can be done in fine-tuning BERT models on medical abbreviations to improve downstream task performance.</p>
          `;
          break;

          case 'vinhoverde':
            modalContent.innerHTML = `
              <img src="vinhoverde.png" alt="Project Image">
              <h2>Regression Analysis of Vinho Verde Wine Preferences</h2>
              <p>More coming soon as I create my site!</p>
            `;
            break;

        case 'cystic_fibrosis':
          modalContent.innerHTML = `
            <img src="project1-thumbnail.jpg" alt="Project Image">
            <h2>Cystic Fibrosis Theratyping</h2>
            <p>Project focused on clinical data analysis and visualization for cystic fibrosis treatment optimization.</p>
          `;
          break;

        case 'flight_delays':
          modalContent.innerHTML = '';
          modalContent.classList.add('report-visual');
          modalContent.innerHTML = `
            <div class="loader-container">
              <div class="loading-spinner"></div>
            </div>
            <iframe src="files/flight_delays_project.html" 
                    style="width: 100%; height: 85vh; border: none; display: none;"
                    onload="this.style.display='block'; document.querySelector('.loader-container').style.display='none';">
            </iframe>
          `;
          modal.style.display = 'flex';
          break;
          
          
		  
        case 'olympics':
            modalContent.innerHTML = '';
            modalContent.classList.add('tableau-visual');
            modalContent.innerHTML = `
                <div class="tableauPlaceholder" style="width: 100%; height: 85vh;">
                  <noscript>
                    <a href="#">
                      <img alt="Dashboard 1" src="https://public.tableau.com/static/images/Pa/Paris2024OlympicsDoMedalCountsTelltheWholeStory/Dashboard1/1_rss.png" style="border: none" />
                    </a>
                  </noscript>
                  <object class="tableauViz" style="width: 100%; height: 100%;">
                    <param name="host_url" value="https://public.tableau.com/" />
                    <param name="embed_code_version" value="3" />
                    <param name="name" value="Paris2024OlympicsDoMedalCountsTelltheWholeStory/Dashboard1" />
                    <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                  </object>
                </div>
              `;

              const script = document.createElement('script');
              script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
              document.body.appendChild(script);
              modal.style.display = 'flex';
              break;

    
		  

        default:
          modalContent.innerHTML = '<p>No project data found.</p>';
      }
    }

	// Show the modal
	    modal.style.display = 'flex';
	  });
	});

	// Close modal when close button is clicked
	closeBtn.addEventListener('click', (e) => {
	  modal.style.display = 'none';
	});

	// Close modal when clicking outside of it
	window.addEventListener('click', (e) => {
	  if (e.target == modal) {
	    modal.style.display = 'none';
	  }
	});