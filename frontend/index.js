function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    // Create a nav element
    const nav = document.createElement('nav');
  
    // Loop over the array of objects to create anchor tags
    links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.textContent;
      anchor.title = link.title;
  
      // Append each anchor to the nav
      nav.appendChild(anchor);
    });
  
    return nav;
  }
  
  // Example usage
  const navLinks = [
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' }
  ];
  
  // Create the nav and attach it to the DOM
  const navElement = buildNav(navLinks);
  document.body.appendChild(navElement);
  
  

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  // eslint-disable-next-line no-unused-vars
  function buildLearnerCard(_learner) {
    // Stub out a simple card
    const card = document.createElement('div');
    card.textContent = 'WIP'; // Work in progress placeholder
  
    return card;
  }
  


    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    // Assuming learners and languages arrays are defined elsewhere
const learners = [
  { name: 'Kenneth Fisher', id: 24, dob: '1990-01-01', favoriteLanguage: 'Python' },
  // Add more learners as needed
];

// eslint-disable-next-line no-unused-vars
const languages = ['Python', 'JavaScript', 'Java', 'C#', 'Ruby']; // Example

// Get the section element where cards will be appended
const section = document.querySelector('section');

// Loop over the learners array
learners.forEach(learner => {
  // Generate a learner card using buildLearnerCard function
  const learnerCard = buildLearnerCard(learner);

  // Append the card to the section element
  section.appendChild(learnerCard);
});

// eslint-disable-next-line no-redeclare
function buildLearnerCard(learner) {
  // Create the learner card container
  const card = document.createElement('div');
  card.classList.add('learner-card');

  // Create elements for learner details
  const name = document.createElement('p');
  name.textContent = learner.name;

  const learnerId = document.createElement('p');
  learnerId.textContent = `Learner ID: ${learner.id}`;

  const dob = document.createElement('p');
  dob.textContent = `Date of Birth: ${learner.dob}`;

  const favoriteLanguage = document.createElement('p');
  favoriteLanguage.textContent = `Favorite Language: ${learner.favoriteLanguage}`;

  // Append elements to the card
  card.appendChild(name);
  card.appendChild(learnerId);
  card.appendChild(dob);
  card.appendChild(favoriteLanguage);

  // Add click event listener to toggle 'active' class
  // eslint-disable-next-line no-unused-vars
  card.addEventListener('click', (event) => {
    // Remove 'active' class from all cards
    document.querySelectorAll('.learner-card.active').forEach(activeCard => {
      activeCard.classList.remove('active');
    });
    // Add 'active' class to the clicked card
    card.classList.add('active');
  });

  return card;
}

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    // Create the footer element
    const footer = document.createElement('footer');
  
    // Create the company-info div
    const companyInfoDiv = document.createElement('div');
    companyInfoDiv.classList.add('company-info');
  
    // Create and append the company name paragraph
    const companyName = document.createElement('p');
    companyName.classList.add('company-name');
    companyName.textContent = footerData.companyName;
    companyInfoDiv.appendChild(companyName);
  
    // Create and append the address paragraph
    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = footerData.address;
    companyInfoDiv.appendChild(address);
  
    // Create and append the contact email paragraph
    const contactEmail = document.createElement('p');
    contactEmail.classList.add('contact-email');
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${footerData.email}`;
    emailLink.textContent = footerData.email;
    contactEmail.appendChild(document.createTextNode('Email: '));
    contactEmail.appendChild(emailLink);
    companyInfoDiv.appendChild(contactEmail);
  
    // Append the company-info div to the footer
    footer.appendChild(companyInfoDiv);
  
    // Create the social-media div
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');
  
    // Create and append social media links
    footerData.socialMedia.forEach(platform => {
      const socialLink = document.createElement('a');
      socialLink.href = platform.url;
      socialLink.textContent = platform.name;
      socialMediaDiv.appendChild(socialLink);
    });
  
    // Append the social-media div to the footer
    footer.appendChild(socialMediaDiv);
  
    // Create and append the copyright div
    const copyrightDiv = document.createElement('div');
    copyrightDiv.textContent = `© ${footerData.companyName.toUpperCase()} ${footerData.year}`;
    footer.appendChild(copyrightDiv);
  
    return footer;
  }
  
  // Example usage
  const footerData = {
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    email: 'info@example.com',
    socialMedia: [
      { name: 'Twitter', url: 'https://twitter.com/example' },
      { name: 'Facebook', url: 'https://www.facebook.com/example' },
      { name: 'Instagram', url: 'https://www.instagram.com/example' }
    ],
    year: 2023
  };
  
  // Create the footer and attach it to the DOM
  const footerElement = buildFooter(footerData);
  document.body.appendChild(footerElement);
  
  

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

document.addEventListener('click', evt =>{
  if (evt.target === document.querySelector('section')){
    const learners = document.querySelectorAll('.learner-card')
    learners.forEach(card => card.classList.remove('active'))
  }
})
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 } 
else moduleProject3()
