document
  .getElementById("lightModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
  });
function showFullText() {
  var fullTextElement = document.getElementById("full-text");
  fullTextElement.style.opacity = 1;
  fullTextElement.classList.add("typing");
}

function hideFullText() {
  var fullTextElement = document.getElementById("full-text");
  fullTextElement.style.opacity = 0;
  fullTextElement.classList.remove("typing");
}

window.onload = function () {
  showProject("welcome");
};

function showProject(projectName) {
  let projectContent = "";
  switch (projectName) {
    case "welcome":
      projectContent += `
        <div id="welcome" class="fade-in">
            <h2>Bem vindo ao meu portifolio </h2><span></span>
        </div>


        <div class="text-home fade-in">
            <p>Eu sou um estudante do BI-CTI com foco em desenvolvimento web. Atualmente, estou imerso em experiências
                práticas
                com HTML, CSS, JavaScript e React - as ferramentas fundamentais para dar vida às minhas ideias digitais.
                Estou
                sempre buscando expandir meus conhecimentos e aprimorar minhas habilidades, ansioso para enfrentar
                grandes
                desafios profissionais que me permitam crescer, ganhar experiência e me desenvolver como um
                desenvolvedor
                Fullstack.
            </p>
            <p>Neste espaço virtual, você encontrará uma amostra do meu trabalho, desde projetos simples até
                empreendimentos
                mais complexos. Cada linha de código reflete meu compromisso com a excelência e minha paixão por criar
                soluções
                elegantes e funcionais.

                Estou pronto para mergulhar de cabeça em novos projetos e colaborações, sempre em busca de novas
                oportunidades
                para aprender, crescer e contribuir para a comunidade de desenvolvimento web. Seja bem-vindo e explore
                meu
                portfólio - estou ansioso para compartilhar minha jornada e minhas realizações com você!</p>
        </div>

        `;
      break;
    case "Nexo Jornal":
      projectContent += `
        <div id="section-expert">
            <div class="text-principal fade-in">
                <h2>${projectName}</h2>
                <p>Por dois anos, integrei a equipe da Nexo Jornal, onde trabalhei em projetos que abrangiam o Nexo
                    Jornal
                    (Principal), Nexo Políticas Públicas e a revista Gama. No Nexo Jornal, aprimorei habilidades em
                    React e
                    TypeScript, enquanto na Gama Revista, desenvolvi competências em WordPress. Além disso, participei
                    de
                    projetos especiais em HTML e CSS puro. Essa experiência foi enriquecedora, permitindo-me colaborar
                    em
                    projetos significativos e expandir meu conhecimento em jornalismo e tecnologia. Estou ansioso para
                    aplicar
                    essas habilidades em novos desafios.</p>
                    <a href="https://www.nexojornal.com.br/" class="Button" target="_blank">
            <div class="Button__glowWrap l"><span class="button_glow"></span></div>
            <div class="Button__glowWrap r"><span class="button_glow"></span></div>
            <span class="Button__overlay"></span>
            <div class="Button__content">
                <span>Visite</span>
                <span>Nexo</span>
            </div>
        </a>
            </div>
            <div class="skills-container">
                <div class="skills__skill" style="--image: url('/src/html5.svg')">
                    <div class="skills__content">HTML</div>
                </div>
                <div class="skills__skill" style="--image: url('/src/css3.svg')">
                    <div class="skills__content">CSS</div>
                </div>
                <div class="skills__skill" style="--image: url('/src/js.svg')">
                    <div class="skills__content">JavaScript</div>
                </div>
                <div class="skills__skill" style="--image: url('/src/reactjs.svg')">
                    <div class="skills__content">React</div>
                </div>
                <div class="skills__skill" style="--image: url('/src/tailwindcss.svg')">
                    <div class="skills__content">Tailwind</div>
                </div>
                <div class="skills__skill" style="--image: url('/src/git.svg')">
                    <div class="skills__content">GIT</div>
                </div>
                <div class="skills__skill" style="--image: url('/src/github.svg')">
                    <div class="skills__content">Github</div>
                </div>
                <div class="skills__skill" style="--image: url('/src/nodejs.svg')">
                    <div class="skills__content">NodeJs</div>
                </div>
            </div>


        </div>
        `;
      break;
    case "ClowBozy":
      projectContent += `
        <div id="section-card">
            <div class="text-principal fade-in">
                <h2>${projectName}</h2>
                <p>Recentemente, tive o prazer de criar o site para a ClowBozy, uma agência de marketing digital focada
                    em
                    esportes. Com mais de 150 clientes, destacam-se na gestão de redes sociais, tráfego e criação de
                    conteúdo. O
                    site reflete sua personalidade vibrante, com emojis e slogans cativantes. Foi uma colaboração
                    inspiradora e
                    estou ansioso para mais projetos como esse, ajudando marcas a se destacarem online. Se busca uma
                    parceria
                    dinâmica e criativa, ClowBozy é a escolha certa.</p>
            </div>
            <div class="card">
                <div class="card-container">
                    <img src="/src/clowbozy4-3branco.jpg" alt="">
                    <h1>${projectName}</h1>
                    <a href="https://clowbozy.com.br/" target="_blank" rel="noopener noreferrer">
                        <span>Visite o Site</span>
                    </a>
                </div>
            </div>
        </div>
        `;
      break;
    case "Bahia Sat":
      projectContent += `
        <div id="section-card">
            <div class="text-principal fade-in">
                <h2>${projectName}</h2>
                <p>Recentemente, criei o site para uma empresa de rastreamento de veículos com mais de 10.000 veículos
                    rastreados desde 2012. Com monitoramento 24 horas, o site destaca a segurança e eficiência da
                    empresa,
                    convidando os visitantes a explorar suas soluções de maneira inteligente e segura. Foi uma
                    experiência
                    gratificante contribuir para a presença online de uma empresa tão crucial para a tranquilidade dos
                    proprietários de veículos. Se busca um sistema confiável de rastreamento, encontrou.</p>
            </div>
            <div class="card">
                <div class="card-container">
                    <img src="/src/bahiasat4-3branco.jpg" alt="">
                    <h1>${projectName}</h1>
                    <a href="https://bahiasatrastreamento.com.br/" target="_blank" rel="noopener noreferrer">
                        <span>Visite o Site</span>
                    </a>
                </div>
            </div>
        </div>
        `;
      break;
    case "MB Transportes":
      projectContent += `
        <div id="section-card">
            <div class="text-principal fade-in">
                <h2>${projectName}</h2>
                <p>Recentemente, contribuí com a atualização visual do site da MB Transportadora. Embora não tenha sido
                    o
                    criador original, fui responsável por aprimorar o aspecto visual do site. O lema "Transportando
                    segurança e
                    qualidade por todo Brasil" reflete nossa dedicação em fornecer serviços confiáveis e de qualidade em
                    todo o
                    país. Foi gratificante colaborar na melhoria da presença online da MB Transportadora, proporcionando
                    uma
                    experiência mais atrativa e informativa para os visitantes.</p>

            </div>
            <div class="card">
                <div class="card-container">
                    <img src="/src/MrTransportadora4-3branco.jpg" alt="">
                    <h1>${projectName}</h1>
                    <a href="https://mbtransportesdeveiculos.com.br/" target="_blank" rel="noopener noreferrer">
                        <span>Visite o Site</span>
                    </a>
                </div>
            </div>
        </div>
        `;
      break;
  }
  const outroSection = document.getElementById("outra-section");
  outroSection.classList.remove("fade-in");
  outroSection.classList.add("fade-out");

  setTimeout(() => {
    outroSection.innerHTML = projectContent;
    outroSection.classList.remove("fade-out");
    outroSection.classList.add("fade-in");
  }, 500);

  outroSection.style.display = "block";
}
