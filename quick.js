
const sections = [
    { title: 'What is a CV Builder?', content: 'A CV builder is an online tool that helps you create a professional CV quickly and easily. With customizable templates, design options, and additional features like QR code generation, our CV builder ensures your CV stands out.' },
    { title: 'How do I get started with the CV builder?', content: 'Simply sign up or log in to your account, choose a template that fits your profession, and start filling in your information. Our intuitive interface guides you through each step.' },
    { title: 'Can I customize my CV layout?', content: 'Yes, our CV builder offers extensive customization options. You can adjust fonts, colors, and layouts to match your personal style and professional needs.' }
];

// Function to create accordion elements
function createAccordion(sections) {
    const container = document.getElementById('accordion-container');

    sections.forEach(section => {
        // Create accordion elements
        const accordion = document.createElement('div');
        accordion.className = 'accordion';

        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.textContent = section.title;

        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.innerHTML = `<p>${section.content}</p>`;

        // Append header and content to the accordion
        accordion.appendChild(header);
        accordion.appendChild(content);

        // Add click event to the header
        header.addEventListener('click', function() {
            // Toggle the content visibility
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });

        // Append the accordion to the container
        container.appendChild(accordion);
    });
}

// Initialize the accordion
createAccordion(sections);