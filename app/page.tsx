const invitations = [
  { number: '01', symbol: '◌', title: 'Join the community', text: 'Add your voice to the founding circle and help make a world-sized idea feel possible.' },
  { number: '02', symbol: '✎', title: 'Imagine a garden', text: 'Send a photograph, a sketch, a planting idea, or a place you have carried in your mind.' },
  { number: '03', symbol: '⌖', title: 'Nominate the land', text: 'Help find an extraordinary hundred acres, with water, access, and room to endure.' },
  { number: '04', symbol: '✦', title: 'Offer what you know', text: 'Bring expertise, plants, land, materials, craft, care, or a partnership worth growing.' },
  { number: '05', symbol: '↗', title: 'Carry the story', text: 'Donate a dollar, share the possibility, and help Babylon travel around the world.' },
];

const assetPath = '/babylon';

const atlas = [
  { className: 'atlas-gorgeous', place: 'A courtyard for lingering', idea: 'Rooms that open into the garden', image: `${assetPath}/babylon-gorgeous-courtyard.jpg`, alt: 'A tranquil garden courtyard with shaded seating, blue tile, fountains, reflecting pools, palms, and abundant flowers' },
  { className: 'atlas-water', place: 'A quiet threshold', idea: 'Water that slows you down', image: `${assetPath}/babylon-courtyard-v2.jpg`, alt: 'A flower-filled Babylon courtyard with a long lily pond, fountain, palms, and people gathering' },
  { className: 'atlas-canopy', place: 'A place to wander', idea: 'Courtyards open to everyone', image: `${assetPath}/babylon-courtyard.jpg`, alt: 'A sunlit Babylon courtyard with blue columns, fountains, lily ponds, palms, and visitors' },
  { className: 'atlas-study', place: 'A study in shade', idea: 'Four ways to rest beneath the trees', image: `${assetPath}/babylon-courtyard-study.jpg`, alt: 'Four views of peaceful garden rooms with shaded seating, winding paths, palms, flowers, and warm sunset light' },
  { className: 'atlas-hillside', place: 'A hill above the flowers', idea: 'A garden with room to do nothing', image: `${assetPath}/babylon-garden-chillin.jpg`, alt: 'A visitor resting on a grassy hillside above a vast flower garden, winding paths, waterfalls, and green mountains' },
  { className: 'atlas-lakeside', place: 'A path beside the water', idea: 'A quiet place to choose where next', image: `${assetPath}/babylon-lakeside-pause.jpg`, alt: 'A visitor sitting beneath a leafy tree beside a winding stone path, flower beds, and a peaceful garden lake' },
  { className: 'atlas-path', place: 'A path through green', idea: 'The long way is the point', image: `${assetPath}/babylon-garden-path.jpg`, alt: 'A stone path curving beside a stream through dense tropical foliage, palms, and bright flowers' },
  { className: 'atlas-stream', place: 'A stream under palms', idea: 'Cool water through the living garden', image: `${assetPath}/babylon-tropical-stream.jpg`, alt: 'Stepping stones crossing a clear tropical stream surrounded by palms, ferns, mossy rocks, and red and pink flowers' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Babylon home"><span className="brand-mark" aria-hidden="true">B</span><span>BABYLON</span></a>
          <div className="nav-links"><a href="#vision">The vision</a><a href="#atlas">The atlas</a><a href="#movement">Take part</a></div>
          <a className="nav-cta" href="#founding">Join the world</a>
        </nav>

        <div className="sun" aria-hidden="true" />
        <div className="water-rings" aria-hidden="true"><span /><span /><span /></div>
        <div className="garden garden-left" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="garden garden-right" aria-hidden="true"><span /><span /><span /><span /></div>

        <div className="hero-content">
          <p className="eyebrow">A WORLD WONDER, IMAGINED BY THE WORLD</p>
          <h1>First, imagine<br /><em>Babylon.</em></h1>
          <p className="hero-copy">One hundred acres of water, trees, architecture, peace and wonder—created by the world, for the world.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#movement">Donate $1 to help make it happen <span aria-hidden="true">→</span></a>
            <a className="button button-quiet" href="#vision">Discover the vision</a>
          </div>
          <p className="free-note"><span aria-hidden="true">✦</span> The core gardens will always be free to everyone.</p>
        </div>
        <a className="scroll-cue" href="#vision"><span>Enter the garden</span><span aria-hidden="true">↓</span></a>
      </section>

      <section className="question" id="vision">
        <p className="section-label">THE QUESTION</p>
        <h2>Why don’t we have this<br />wonder today?</h2>
        <p className="why-not">Why couldn’t we?</p>
        <div className="possibility">
          <span className="possibility-small">IF EVEN</span>
          <strong>1%</strong>
          <span className="possibility-copy">of humanity donated <b>$1</b>,<br />we could build it together.</span>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-copy">
          <p className="section-label">A MODERN HANGING GARDEN</p>
          <h2>A place the world<br />can breathe in.</h2>
          <p>Not a monument to one person, one nation, or one moment. A living place that belongs to everyone: shade and water, wildness and architecture, voices drifting through trees.</p>
          <p>We will visit across decades and watch it change. Trees will grow. Paths will soften. Children will return with children of their own.</p>
        </div>
        <figure className="garden-window">
          <img
            className="garden-render"
            src={`${assetPath}/babylon-lush-v4.jpg`}
            alt="An imagined Babylon filled with garden terraces, waterfalls, flowers, palms, and people gathering beside the water"
            width="1535"
            height="1024"
            loading="lazy"
          />
          <figcaption>Warm sun. Cool water.<br />Happy voices.</figcaption>
        </figure>
      </section>

      <section className="movement" id="movement">
        <div className="section-heading">
          <p className="section-label">PHASE ONE · BUILD THE MOVEMENT</p>
          <h2>The first structure<br />is this invitation.</h2>
          <p>Babylon begins wherever someone says: I want this to exist.</p>
        </div>
        <div className="invitation-list">
          {invitations.map((item) => (
            <a className="invitation" href="#founding" key={item.number}>
              <span className="invitation-number">{item.number}</span>
              <span className="invitation-symbol" aria-hidden="true">{item.symbol}</span>
              <span className="invitation-copy"><strong>{item.title}</strong><span>{item.text}</span></span>
              <span className="invitation-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="atlas" id="atlas">
        <div className="atlas-intro">
          <div><p className="section-label">THE ATLAS OF BABYLON</p><h2>A garden imagined<br />from everywhere.</h2></div>
          <p>The Atlas will gather thousands of ways a garden can feel. A global sketchbook of paths, habitats, courtyards, trees, memories and dreams.</p>
        </div>
        <div className="atlas-grid">
          {atlas.map((card, index) => (
            <article className={`atlas-card ${card.className}${card.image ? ' has-image' : ''}`} key={card.place}>
              {card.image && <img className="atlas-image" src={card.image} alt={card.alt} loading="lazy" />}
              <span className="atlas-index">{String(index + 1).padStart(2, '0')} / {String(atlas.length).padStart(2, '0')}</span>
              <div><p>{card.place}</p><h3>{card.idea}</h3></div>
            </article>
          ))}
        </div>
        <a className="text-link" href="#founding">Add something to the Atlas <span aria-hidden="true">→</span></a>
      </section>

      <section className="promise">
        <div className="promise-orbit" aria-hidden="true"><span>B</span></div>
        <div className="promise-copy">
          <p className="section-label">THE PROMISE</p>
          <h2>Free. Open.<br />Tended forever.</h2>
          <p>Babylon must be as beautiful in its stewardship as it is in its gardens. Funding, decisions, feasibility, and progress will be visible from the beginning.</p>
        </div>
        <div className="principles">
          <div><span>01</span><strong>Free at its heart</strong><p>The core garden remains open to everyone.</p></div>
          <div><span>02</span><strong>Built in the open</strong><p>Clear governance, costs and progress.</p></div>
          <div><span>03</span><strong>Rooted in place</strong><p>Water-wise, resilient and ecologically true.</p></div>
          <div><span>04</span><strong>Made by many</strong><p>No single country, company or person owns the wonder.</p></div>
        </div>
      </section>

      <section className="path">
        <p className="section-label">THE LONG VIEW</p>
        <h2>Make Babylon a global idea<br />before it becomes a physical place.</h2>
        <div className="path-line">
          <span className="active"><b>01</b>Imagine</span><i aria-hidden="true" />
          <span><b>02</b>Gather</span><i aria-hidden="true" />
          <span><b>03</b>Find the land</span><i aria-hidden="true" />
          <span><b>04</b>Design</span><i aria-hidden="true" />
          <span><b>05</b>Build & tend</span>
        </div>
      </section>

      <section className="founding" id="founding">
        <div className="founding-sun" aria-hidden="true" />
        <p className="section-label">THE FOUNDING CIRCLE</p>
        <h2>A wonder starts<br />with a hello.</h2>
        <p>Join the earliest circle of people who want Babylon to exist. Donate one dollar, bring one idea, make one connection—or simply share your hope.</p>
        <div className="founding-actions">
          <a className="button button-light" href="https://github.com/amyleesterling/babylon" target="_blank" rel="noreferrer">Follow the beginning <span aria-hidden="true">↗</span></a>
          <a className="button button-outline-light" href="#atlas">Imagine the garden</a>
        </div>
        <span className="founding-note">No contribution is too small. No imagination is too large.</span>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home"><span className="brand-mark">B</span><span>BABYLON</span></a>
        <p>A world wonder, imagined and built by the world.</p>
        <div><a href="#vision">Vision</a><a href="#atlas">Atlas</a><a href="#movement">Take part</a></div>
      </footer>
    </main>
  );
}
