
# Zachary Artman's Portfolio

Welcome to my professional portfolio, a comprehensive showcase of my skills, experiences, and projects as a software developer. This portfolio serves as the root of my personal domain, [zacharyartman.com](https://zacharyartman.com), featuring various projects and details about my professional journey.

## Website Structure

The portfolio website is structured to provide an intuitive and informative experience for visitors. It's divided into several key sections:

- **About**: Learn more about my background, education, and what drives me as a developer.
- **Experience**: Insight into my professional experiences and skills I've honed over the years.
- **Projects**: A showcase of my projects, demonstrating my capabilities in software development.
- **Contact**: How to get in touch with me for professional inquiries or collaborations.

## Submodules

This repository uses Git submodules to manage and display individual projects. Each project, like "fair-share-dining" or "auto-detailing", is a separate repository included as a submodule. This approach allows me to keep project repositories independent while easily integrating them into my portfolio.

### Cloning the Repository with Submodules

To clone this repository along with its submodules, use the following command:
`git clone --recurse-submodules https://github.com/zacharyartman/PortfolioWebsite.git`

If the repository was cloned without submodules, they can be initialized and updated using:<br>
`git submodule init`<br>
`git submodule update`

### Accessing Projects

Projects are accessible directly through my portfolio under paths like `zacharyartman.com/detailing`. Each project retains its unique URL while being integrated into the portfolio structure.

### Updating Projects

The submodules are pointers to specific commits in the external repositories. To update a project within my portfolio:

1. Navigate to the submodule directory.
2. Pull the latest changes from the project's main repository.
3. Commit these changes in the portfolio repository to update the submodule reference.

## Contributions and Feedback

While this is a personal portfolio, I welcome any constructive feedback or suggestions. Please feel free to raise an issue or submit a pull request if you have improvements in mind.

## Acknowledgements

This portfolio website is based on and inspired by the template and tutorial provided by Ade-mir. The original source can be found at: [HTML/CSS/JS Portfolio Tutorial](https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2). I extend my gratitude to Ade-mir for creating this valuable resource, which served as a starting point for my portfolio.

