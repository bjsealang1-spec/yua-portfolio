
import './App.css'

const projects = [
  {
    number: '01',
    name: 'MintChoco AI',
    category: 'AI / MACHINE LEARNING',
    description:
      'PyTorch 기반 AI 예측 프로젝트. 사용자 입력을 분석하고 예측 결과와 설명을 제공하는 기능을 개발했습니다.',
    stack: ['Python', 'PyTorch', 'Streamlit', 'Pandas'],
    icon: '🧠',
    github: 'https://github.com/bjsealang1-spec/MintChoco_AI',
  },
  {
    number: '02',
    name: 'YuaLing_Shop',
    category: 'AI / FASHION E-COMMERCE',
    description:
      '패션과 AI를 결합한 쇼핑 프로젝트. 패션 분류 모델과 상품 조회, 장바구니 등 쇼핑 기능을 구성했습니다.',
    stack: ['Python', 'PyTorch', 'Streamlit'],
    icon: '🛍️',
    github: 'https://github.com/bjsealang1-spec/YuaLing_Shop',
  },
  {
    number: '03',
    name: 'OilAndCharge',
    category: 'MOBILITY SERVICE / TEAM PROJECT',
    description:
      '사용자 위치와 차량 연비를 바탕으로 주변 주유소를 탐색하고, 주유비와 왕복 이동비를 계산하는 종합 모빌리티 웹 서비스입니다. 주유소 검색, 차량 관리, 지도 연동, 데이터 캐싱 및 배포 등 팀 전체 기능을 확인할 수 있습니다.',
    stack: [
      'Python',
      'Flask',
      'HTML5',
      'CSS3',
      'JavaScript',
      'MariaDB',
      'Kakao Maps',
      'OPINET API',
      'Cloudtype',
    ],
    icon: '🚘',
    github: 'https://github.com/bjsealang1-spec/OilAndCharge',
    contribution: '팀 프로젝트 · 프론트엔드 담당',
    details: [
      '주변 주유소 검색 및 카카오맵 마커 표시',
      '차량 등록 및 등록 차량 목록 조회',
      '연비 기반 왕복 이동비와 예상 주유 비용 계산',
      'OPINET 조회 결과의 데이터베이스 캐싱',
      'Flask API, MariaDB 및 외부 API 연동 구조',
      'Gunicorn 및 Cloudtype 배포 환경',
    ],
  },
  {
    number: '04',
    name: 'WorkHelper',
    category: 'AI / FULL-STACK TEAM PROJECT',
    description:
      'Spring Boot 기반 노동 상담 웹 서비스입니다. 상담 케이스 관리 및 상담 메시지 기능을 구현하고 PostgreSQL과 JWT 인증을 활용했습니다.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'React',
      'AI',
    ],
    icon: '⚖️',
    github: 'https://github.com/workhelper-team/work-helper-backend',
    contribution: '팀 프로젝트 · 백엔드 담당',
    repositories: [
      {
        name: 'Frontend',
        url: 'https://github.com/workhelper-team/work-helper-frontend',
      },
      {
        name: 'Backend',
        url: 'https://github.com/workhelper-team/work-helper-backend',
      },
      {
        name: 'AI Service',
        url: 'https://github.com/workhelper-team/work-helper-ai',
      },
    ],
  },
]

const skills = [
  {
    category: 'Backend',
    items: 'Java · Spring Boot · Spring Security · JWT · REST API',
  },
  {
    category: 'Frontend',
    items: 'React · JavaScript · HTML5 · CSS3',
  },
  {
    category: 'AI / Data',
    items: 'Python · PyTorch · Pandas · NumPy · Streamlit',
  },
  {
    category: 'Database & Tools',
    items: 'PostgreSQL · MariaDB · Git · GitHub · DBeaver',
  },
]

function App() {
  const oilProject = projects.find(
    (project) => project.name === 'OilAndCharge',
  )

  const workHelperProject = projects.find(
    (project) => project.name === 'WorkHelper',
  )

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home" aria-label="YUA.dev 홈">
          YUA<span>.dev</span>
        </a>

        <nav aria-label="메인 메뉴">
          <a href="#about">소개</a>
          <a href="#projects">프로젝트</a>
          <a href="#skills">기술 스택</a>
          <a href="#contact">연락처</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Contact ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              DEVELOPER PORTFOLIO · 2026
            </div>

            <h1>
              AI와 웹을 연결하는
              <br />
              <span>개발자입니다.</span>
            </h1>

            <p className="hero-description">
              아이디어를 실제 서비스로 구현하고,
              <br className="desktop-break" />
              기술로 일상의 문제를 해결합니다.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                프로젝트 살펴보기 ↘
              </a>
              <a className="secondary-button" href="#about">
                About me
              </a>
            </div>

            <div className="hero-stack">
              <span>JAVA</span>
              <span>SPRING BOOT</span>
              <span>PYTHON</span>
              <span>REACT</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="개발자 소개 장식">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="profile-card">
              <div className="profile-icon">Y.</div>
              <span className="profile-label">BUILDING WITH CODE</span>
              <h2>Learn · Build · Grow</h2>
              <p>Full-stack & AI Projects</p>
              <div className="profile-divider" />
              <div className="profile-bottom">
                <span>CREATIVE THINKING</span>
                <span>✳</span>
              </div>
            </div>

            <div className="floating-tag tag-top">✦ AI & WEB</div>
            <div className="floating-tag tag-bottom">Made with ♡</div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <span className="section-label">01 / ABOUT</span>
            <h2>기술을 배우고, 직접 구현합니다.</h2>
          </div>

          <p className="about-text">
            Java와 Spring Boot 기반의 백엔드 개발부터 Python을 활용한
            AI 프로젝트, Flask 기반 웹 서비스까지 다양한 기술을
            프로젝트에 적용하고 있습니다. 기능 구현뿐 아니라 서비스의
            구조와 데이터 흐름을 이해하고 협업을 통해 문제를 해결하는
            개발자를 지향합니다.
          </p>

          <div className="stats">
            <div>
              <strong>04</strong>
              <span>PROJECTS</span>
            </div>
            <div>
              <strong>AI + Web</strong>
              <span>FOCUS</span>
            </div>
            <div>
              <strong>Always</strong>
              <span>LEARNING</span>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <span className="section-label">02 / SELECTED WORKS</span>
            <h2>
              프로젝트 쇼케이스
              <span className="heading-dot">.</span>
            </h2>
            <p>
              프로젝트 카드를 누르면 해당 GitHub 저장소가 새 탭에서 열립니다.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                key={project.number}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub 저장소 열기`}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {project.contribution && (
                  <p className="project-contribution">
                    {project.contribution}
                  </p>
                )}

                <div className="tech-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card-bottom">
                  <span>VIEW ON GITHUB</span>
                  <span className="project-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>

          <section className="project-detail">
            <span className="section-label">FEATURED TEAM PROJECT</span>
            <h3>OilAndCharge — 프로젝트 상세</h3>
            <p>
              팀이 구현한 전체 서비스의 주요 기능과 기술 구성을 소개합니다.
              개인 담당 업무와 팀 전체의 구현 범위를 구분해 확인할 수 있습니다.
            </p>

            <ul>
              {oilProject.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <a
              className="secondary-button"
              href={oilProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              OilAndCharge 저장소 보기 ↗
            </a>
          </section>

          <section className="project-detail">
            <span className="section-label">FEATURED TEAM PROJECT</span>
            <h3>WorkHelper — AI 기반 노동 상담 서비스</h3>
            <p>
              노동 상담 케이스 관리와 상담 메시지 기능을 구현한 팀 프로젝트입니다.
              프론트엔드, 백엔드, AI 서비스의 저장소를 각각 확인할 수 있습니다.
            </p>

            <ul>
              <li>LaborCase 기반 상담 케이스 관리</li>
              <li>ConsultationMessage 기반 상담 메시지 저장 및 관리</li>
              <li>PostgreSQL 데이터베이스 연동</li>
              <li>JWT 기반 인증 구조 활용</li>
              <li>프론트엔드·백엔드·AI 서비스 분리 구조</li>
            </ul>

            <div className="hero-actions">
              {workHelperProject.repositories.map((repository) => (
                <a
                  className="secondary-button"
                  key={repository.name}
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repository.name} ↗
                </a>
              ))}
            </div>
          </section>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <span className="section-label">03 / TECH STACK</span>
            <h2>사용 기술</h2>
            <p>프로젝트에서 활용한 기술을 분야별로 정리했습니다.</p>
          </div>

          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.category}>
                <span>{skill.category}</span>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <span className="section-label">04 / CONTACT</span>
          <h2>함께 성장할 기회를 찾고 있습니다.</h2>
          <p>프로젝트와 개발 경험에 관해 이야기 나눠요.</p>

          <a
            className="primary-button"
            href="https://github.com/bjsealang1-spec"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 방문하기 ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          YUA<span>.dev</span>
        </a>
        <p>Designed & built with care · © 2026 Yua</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
