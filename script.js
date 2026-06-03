const roleWord = document.querySelector("#role-word");
const revealTabs = document.querySelectorAll(".reveal-tab, .reveal-web");
const projectCards = document.querySelectorAll("[data-project]");
const themeToggle = document.querySelector(".theme-toggle");
const roles = [
  "Frontend",
  "Backend",
  "Python Workflow Apps",
  "AI Workflow Tools",
  "DevOps",
  "Cloud Infrastructure",
  "Blockchain",
  "Smart Contracts",
  "RF Simulation",
];

const projectDetails = {
  "pd-image-builder": {
    kicker: "Python workflow app",
    title: "pd-image-builder",
    description:
      "A local browser-based workflow platform for turning product and brand inputs into AI-assisted product image concepts, quality-reviewed outputs, and presentation-ready PDF exports.",
    overview:
      "This project is built around a practical creator workflow: start with a product brief, define the visual direction, generate image concepts, review the output quality, and package the result for sharing. Instead of treating AI image generation as a single prompt box, the app organizes the complete process into a controlled browser experience backed by Python services.",
    points: [
      "Collects brand tone, product context, target visual style, and creative direction from a structured browser UI.",
      "Turns the input into generation-ready prompts and sends the workflow through a Python backend instead of relying on scattered manual prompting.",
      "Adds a review layer so drafts can be checked, refined, and selected before they are treated as final output.",
      "Packages selected concepts, notes, and workflow output into a clean PDF for presentation or handoff.",
    ],
    workflow: [
      "The user starts from the browser interface and enters product details, brand direction, and visual preferences.",
      "The backend receives the structured input, prepares the generation request, and coordinates the image workflow.",
      "Generated outputs are reviewed through QA-style checks so weak or mismatched results can be improved.",
      "Final concepts are exported as a PDF package using ReportLab, making the result easier to share.",
    ],
    impact:
      "The project shows how AI can be wrapped into a real workflow instead of being used as a loose tool. It combines frontend interaction, Python backend logic, AI generation, review steps, and document export into one usable system.",
    architectureImage: "assets/architecture-pd-image-builder.svg",
    architectureAlt: "Flow diagram showing browser UI to Python backend, AI generation, QA scoring, and PDF export.",
    tags: ["Python", "JavaScript", "HTML", "CSS", "ReportLab", "Hugging Face"],
    link: "https://github.com/phanindra029/pd-image-builder",
    image: "assets/project-banner-pd-image-builder.svg",
    imageAlt: "Whiteboard architecture banner for pd-image-builder",
  },
  "multi-vm-cloud": {
    kicker: "Cloud infrastructure",
    title: "Multi-VM Cloud Deployment",
    description:
      "A Terraform-based AWS and GCP deployment for distributed iii engine and worker services.",
    overview:
      "This project focuses on deploying a multi-service system across separate virtual machines with clear infrastructure boundaries. It uses Terraform to create the cloud foundation, then separates the public API gateway from private engine and worker nodes.",
    points: [
      "Provisions networking, subnets, route tables, security groups, and compute instances with Infrastructure as Code.",
      "Separates the public nginx API gateway from private engine and worker services for cleaner service boundaries.",
      "Uses bootstrap scripts and systemd units to automate setup, service startup, and deployment validation.",
    ],
    workflow: [
      "Terraform provisions the network, subnets, compute instances, firewall rules, and routing components.",
      "The nginx gateway exposes a stable public entry point while private services stay behind the network boundary.",
      "Bootstrap scripts install dependencies, clone services, configure runtime files, and register systemd units.",
      "Validation steps check whether the deployed services are reachable and running as expected.",
    ],
    impact:
      "The project demonstrates practical DevOps skills across cloud networking, Infrastructure as Code, Linux service management, and deployment automation.",
    architectureImage: "assets/architecture-cloud-deployment.svg",
    architectureAlt: "Flow diagram showing Terraform infrastructure, nginx gateway, and private worker virtual machines.",
    tags: ["Terraform", "AWS", "GCP", "Linux", "nginx", "Python", "TypeScript"],
    link: "https://github.com/phanindra029/iii-devops-internship",
    image: "assets/project-banner-cloud-deployment.svg",
    imageAlt: "Whiteboard architecture banner for multi VM cloud deployment",
  },
  crowdfunding: {
    kicker: "Solidity smart contract",
    title: "Crowd-Funding Smart-contract",
    description:
      "A Solidity crowdfunding contract focused on contributor tracking, funding rules, refunds, and controlled spending.",
    overview:
      "This project models a crowdfunding system directly inside a Solidity smart contract. It handles contributor participation, deadline-based campaign behavior, refund logic, and controlled fund usage through manager requests and contributor voting.",
    points: [
      "Accepts contributions only when the minimum funding rules and campaign deadline allow it.",
      "Tracks contributors and supports refund flow when the funding goal is not met.",
      "Adds manager spending requests and contributor voting so fund usage is controlled by contract logic.",
    ],
    workflow: [
      "Contributors send funds to the contract while the campaign is active and valid.",
      "The contract records each contributor and checks whether the campaign reaches its target before the deadline.",
      "If the target is not met, contributors can use the refund flow.",
      "If the target is met, the manager can create spending requests that contributors vote on before funds move.",
    ],
    impact:
      "The project demonstrates smart contract fundamentals such as state management, access control, financial rules, and transparent fund movement.",
    architectureImage: "assets/architecture-crowdfunding-contract.svg",
    architectureAlt: "Flow diagram showing contributor funding, Solidity contract rules, voting, refunds, and spending requests.",
    tags: ["Solidity", "Ethereum", "Remix IDE", "Smart Contracts"],
    link: "https://github.com/phanindra029/Crowd-Funding_Smart-contract",
    image: "assets/project-banner-crowdfunding.svg",
    imageAlt: "Whiteboard architecture banner for crowdfunding smart contract",
  },
  lottery: {
    kicker: "Solidity smart contract",
    title: "Lottery Smart Contract",
    description:
      "A Solidity lottery contract that demonstrates participant entry, manager-only controls, winner selection, and prize transfer flow.",
    overview:
      "This project implements a basic lottery flow using Solidity. It is designed to show how participants enter a contract-managed round, how the contract tracks the prize pool, and how restricted manager actions can select a winner and reset the system.",
    points: [
      "Lets participants enter a lottery round while the contract tracks the active player pool and balance.",
      "Restricts sensitive actions such as winner selection to the manager role.",
      "Transfers the prize to the selected winner and resets the round for the next cycle.",
    ],
    workflow: [
      "Players enter the lottery by sending the required amount to the contract.",
      "The contract stores the player list and accumulates the prize pool.",
      "The manager triggers winner selection through a restricted function.",
      "The selected winner receives the pot, and the player list resets for the next round.",
    ],
    impact:
      "The project is a focused demonstration of Solidity control flow, contract balance handling, role restrictions, and round-based state reset.",
    architectureImage: "assets/architecture-lottery-contract.svg",
    architectureAlt: "Flow diagram showing player entry, contract pot, manager draw, winner payout, and round reset.",
    tags: ["Solidity", "Ethereum", "Remix IDE", "Smart Contracts"],
    link: "https://github.com/phanindra029/Lottery-Smart-Contract",
    image: "assets/project-banner-lottery.svg",
    imageAlt: "Whiteboard architecture banner for lottery smart contract",
  },
  "spotify-clone": {
    kicker: "Frontend interface",
    title: "Spotify Clone",
    description:
      "A Spotify-inspired frontend music player built to practice layout, DOM interactions, and responsive browser UI behavior.",
    overview:
      "This project recreates the structure and feel of a music player interface using core frontend technologies. It focuses on layout, visual hierarchy, playlist-style browsing, and JavaScript-driven browser interactions.",
    points: [
      "Builds a music-player interface with structured HTML, CSS styling, and JavaScript behavior.",
      "Handles browser-side interactions for playlist and playback-style controls.",
      "Focuses on responsive visual hierarchy, UI layout, and DOM manipulation fundamentals.",
    ],
    workflow: [
      "HTML defines the main interface sections such as navigation, playlists, cards, and player controls.",
      "CSS handles the visual system, spacing, responsiveness, and music-player styling.",
      "JavaScript connects UI events to DOM updates and playback-style behavior.",
      "The browser becomes the complete runtime for rendering, interaction, and feedback.",
    ],
    impact:
      "The project demonstrates frontend fundamentals through a familiar product-style interface, with attention to layout, interactivity, and responsive behavior.",
    architectureImage: "assets/architecture-spotify-clone.svg",
    architectureAlt: "Flow diagram showing HTML structure, CSS styling, JavaScript DOM behavior, and browser music player UI.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    link: "https://github.com/phanindra029/Spotify-Clone",
    image: "assets/project-banner-spotify-clone.svg",
    imageAlt: "Whiteboard architecture banner for Spotify clone frontend",
  },
};

const savedTheme = window.localStorage.getItem("portfolio-theme");

function setTheme(mode) {
  const isBright = mode === "bright";
  document.body.classList.toggle("bright-mode", isBright);

  if (themeToggle) {
    themeToggle.setAttribute("aria-label", isBright ? "Switch to dark mode" : "Switch to bright mode");
  }
}

setTheme(savedTheme === "bright" ? "bright" : "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("bright-mode") ? "dark" : "bright";
    setTheme(nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);
  });
}

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!roleWord) return;

  const currentRole = roles[roleIndex];
  roleWord.textContent = currentRole.slice(0, charIndex);

  if (!deleting && charIndex < currentRole.length) {
    charIndex += 1;
    window.setTimeout(typeRole, 70);
    return;
  }

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    window.setTimeout(typeRole, 1050);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    window.setTimeout(typeRole, 34);
    return;
  }

  deleting = false;
  roleIndex = (roleIndex + 1) % roles.length;
  window.setTimeout(typeRole, 220);
}

typeRole();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.28 }
  );

  revealTabs.forEach((tab) => revealObserver.observe(tab));
} else {
  revealTabs.forEach((tab) => tab.classList.add("is-visible"));
}

function projectUrl(projectId) {
  return `project.html?project=${encodeURIComponent(projectId)}`;
}

projectCards.forEach((card) => {
  const projectId = card.dataset.project;
  const link = card.querySelector("[data-project-link]");

  if (link) {
    link.href = projectUrl(projectId);
  }

  card.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = projectUrl(projectId);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = projectUrl(projectId);
    }
  });
});

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function populateProjectPage() {
  const page = document.querySelector("[data-project-page]");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project") || "pd-image-builder";
  const detail = projectDetails[projectId] || projectDetails["pd-image-builder"];

  document.title = `${detail.title} | Phanindra Kanaparthi`;
  setText("#project-page-kicker", detail.kicker);
  setText("#project-page-title", detail.title);
  setText("#project-page-description", detail.description);
  setText("#project-page-overview", detail.overview);
  setText("#project-page-impact", detail.impact);

  const banner = document.querySelector("#project-page-banner");
  if (banner) {
    banner.src = detail.image;
    banner.alt = detail.imageAlt;
  }

  const points = document.querySelector("#project-page-points");
  if (points) {
    points.innerHTML = detail.points.map((point) => `<li>${point}</li>`).join("");
  }

  const workflow = document.querySelector("#project-page-workflow");
  if (workflow) {
    workflow.innerHTML = detail.workflow.map((step) => `<li>${step}</li>`).join("");
  }

  const architecture = document.querySelector("#project-page-architecture");
  if (architecture) {
    architecture.src = detail.architectureImage;
    architecture.alt = detail.architectureAlt;
  }

  const tags = document.querySelector("#project-page-tags");
  if (tags) {
    tags.innerHTML = detail.tags.map((tag) => `<span>${tag}</span>`).join("");
  }

  const githubLink = document.querySelector("#project-page-github");
  if (githubLink) {
    githubLink.href = detail.link;
  }
}

populateProjectPage();
