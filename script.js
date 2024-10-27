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
            <p>This project aims to predict future coral reef health globally using machine learning and time series models with the goal to aid conservationists, governments, and raise public awareness. Researched and integrated over 6 environmental, socio-economic, and geospatial datasets, including satellite imagery, utilizing SQL, GeoPandas, and Pandas in Python. Developed a map interface with JavaScript and HTML to display model predictions, and used React for back-end website creation. Employed AWS for both model training and website hosting.</p>
          `;
          break;

        case 'med-abbrev-mystery':
          modalContent.innerHTML = `
            <img src="images/med-abbrev-mystery_image.png" alt="Project Image">
            <h2>Med-Abbrev-Mystery</h2>
            <p>This project aims to predict future coral reef health globally using machine learning and time series models with the goal to aid conservationists, governments, and raise public awareness. Researched and integrated over 6 environmental, socio-economic, and geospatial datasets, including satellite imagery, utilizing SQL, GeoPandas, and Pandas in Python. Developed a map interface with JavaScript and HTML to display model predictions, and used React for back-end website creation. Employed AWS for both model training and website hosting.</p>
          `;
          break;

        case 'flight_delays':
          modalContent.innerHTML = `
            <img src="flight_delay_image.jpg" alt="Project Image">
            <h2>Predicting Flight Delays for Consumers</h2>
            <p>Developed time series predictive pipelines using large datasets and distributed frameworks on the Databricks platform to enhance airline customer experience by forecasting flight delays with U.S. Department of Transportation and NOAA data. Highly predictive new features were created, including a PageRank feature. The project employed grid searches to optimize logistic regression and neural network models in PySpark.</p>
          `;
          break;

        case 'cystic_fibrosis':
          modalContent.innerHTML = `
            <img src="project1-thumbnail.jpg" alt="Project Image">
            <h2>Cystic Fibrosis Theratyping</h2>
            <p>Project focused on clinical data analysis and visualization for cystic fibrosis treatment optimization.</p>
          `;
          break;
		  
		  case 'olympics':
		    // Clear any previous modal content
		    modalContent.innerHTML = '';

		    // Add the tableau-visual class to modalContent for fixed-size display
		    modalContent.classList.add('tableau-visual');

		    // Insert the Tableau visualization HTML
		    modalContent.innerHTML = `
		      <div class='tableauPlaceholder' id='viz1730071449355' style='position: relative; width: 100%; height: 100%'>
		        <noscript><a href='#'>
		          <img alt='Dashboard 1' src='https://public.tableau.com/static/images/Pa/Paris2024OlympicsDoMedalCountsTelltheWholeStory/Dashboard1/1_rss.png' style='border: none' />
		        </a></noscript>
		        <object class='tableauViz' style='width: 1024px; height: 800px;'>
		          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
		          <param name='embed_code_version' value='3' />
		          <param name='site_root' value='' />
		          <param name='name' value='Paris2024OlympicsDoMedalCountsTelltheWholeStory/Dashboard1' />
		          <param name='tabs' value='no' />
		          <param name='toolbar' value='yes' />
		          <param name='static_image' value='https://public.tableau.com/static/images/Pa/Paris2024OlympicsDoMedalCountsTelltheWholeStory/Dashboard1/1.png' />
		          <param name='animate_transition' value='yes' />
		          <param name='display_static_image' value='yes' />
		          <param name='display_spinner' value='yes' />
		          <param name='display_overlay' value='yes' />
		          <param name='display_count' value='yes' />
		          <param name='language' value='en-US' />
		        </object>
		      </div>
		    `;

		    // Dynamically load the Tableau script to initialize the visualization
		    const script = document.createElement('script');
		    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
		    document.body.appendChild(script);
  
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